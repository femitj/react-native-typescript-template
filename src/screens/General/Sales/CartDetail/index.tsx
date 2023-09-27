import {Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../../assets/theme/color';
import TopNav from '../../../../components/TopNav';
import {Screen, ScreenList} from '../../../../components/Screens';
import CustomButton from '../../../../components/CustomButton';
import Button from '../../../../components/Button';
import EmptyData from '../../../../components/EmptyData';
import CartList from '../CartList';
import {calcSubTotal} from '../../../../utils';
import {currencyFormat} from '../../../../utils/currency';
import AddItem from '../AddItem';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  clearSalesState,
  setCartList,
  setRemoveCartItem,
} from '../SaleSlicer/saleSlice';
import {HP} from '../../../../utils/devicesize';
import {usePostSalesOrderMutation} from '../SaleSlicer';
import useToast from '../../../../hooks/useToast';
import {ADD_SALES_SCREEN, SALES_SCREEN} from '../../../../constants/routeNames';
import HandleError from '../../../../utils/errorMsg';

const CartDetail = ({navigation}: any) => {
  const toast = useToast();
  const {params} = useRoute();
  const dispatch = useAppDispatch();
  const {cartList} = useAppSelector(state => state.sales);
  const [postSalesOrder, {isLoading}] = usePostSalesOrderMutation();
  const [addItem, setAddItem] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [addOther, setAddOther] = useState(false);
  const [selected, setSelected] = useState({});
  const [breakdown, setBreakdown] = useState({
    subTotal: 0,
    discount: 0,
    total: 0,
  });
  // const [totalAmount, setTotalAmount] = useState(0);
  const [fromLocation, setFromLocation] = useState(undefined);

  useEffect(() => {
    const subTotal = calcSubTotal(cartList);
    const discount = 0;
    const total = subTotal + discount;
    handleCalcBreakdown(subTotal, discount, total);
  }, [cartList]);

  useEffect(() => {
    if (params?.data) {
      // console.log(params?.data?.fromLocation);
      setFromLocation(params?.data?.fromLocation);
    }
  }, [params]);

  // const handleRemoveOrderItem = (orderIndex) => {
  //   const newOrder = orderItemList.filter(
  //     (value, index) => index !== orderIndex
  //   );
  //   setOrderItemList(newOrder);
  //   handleAddCartItem([...newOrder])(cartDispatch);
  //   handleCalcBreakdown(
  //     calcSubTotal(newOrder),
  //     breakdown.discount,
  //     calcSubTotal(newOrder) + breakdown.discount
  //   );
  // };

  // const handleAddOrderItem = () => {
  //   const newOrder = orderItemList;
  //   // const onlyCode = newOrder.map((item) => item.code);
  //   handleAddCartItem([...newOrder])(cartDispatch);
  //   navigation.push(PRODUCT_LIST, {
  //     data: {
  //       id: sellerId,
  //       fromLocation: CART_DETAILS,
  //       seller: sellerInfo,
  //     },
  //   });
  // };

  const handleDeleteOrder = () => {
    clearCartState();
  };

  const handleAddMoreQuantity = (soldPrice: string, quantity: number) => {
    setAddItem(!addItem);
    dispatch(setRemoveCartItem(selected)); // removes item to be edited
    setSelected({...selected, quantity, soldPrice});
    dispatch(setCartList({...selected, quantity, soldPrice})); // add item back after editing
  };

  const handleCalcBreakdown = (
    subTotal: number,
    discount: number,
    total: number,
  ) => {
    setBreakdown({
      subTotal,
      discount,
      total,
    });
  };

  const clearCartState = () => {
    dispatch(clearSalesState());
  };

  const handleSubmit = async () => {
    try {
      //   {
      //     "paymentMethod": "Transfer",
      //     "totalAmount": 5000.00,
      //     "selectedProduct": [
      //         {
      //             "productId": "9acd850f-46d7-483b-9648-6b08a6442ad2",
      //             "quantity": 3,
      //             "soldPrice": 5000.00
      //         }
      //     ]
      // }
      const data = {
        paymentMethod: 'Cash',
        totalAmount: breakdown.total,
        selectedProduct: cartList,
      };
      const res = await postSalesOrder(data).unwrap();
      if (res?.status) {
        toast.show(res.message, {
          placement: 'top',
          duration: 4000,
          animationType: 'slide-in',
          type: 'success',
        });
        clearCartState();
        navigation.navigate(ADD_SALES_SCREEN);
      }
    } catch (error: any) {
      const err = HandleError(error);
      toast.show(err, {
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
        type: 'danger',
      });
    }
  };

  return (
    <Screen
      isFixed={true}
      paddingHorizontal={0}
      paddingVertical={0}
      backgroundColor={colors.white}>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}>
        <TopNav fromLocation={fromLocation} navigation={navigation} />
        <View style={styles.title}>
          <Text style={styles.tLeft}>Order details</Text>
        </View>
        <View style={styles.cartViewWrap}>
          <View style={styles.cartView}>
            <View
              style={{
                width: '48%',
              }}>
              <CustomButton
                backgroundColor="rgba(255, 103, 103, 0.05)"
                color={colors.bittersweet}
                bordered
                content="Delete Order"
                containerStyle={{
                  borderColor: colors.bittersweet,
                }}
                onPress={() => {
                  Alert.alert(
                    'Delete Order',
                    'Are you sure you want to delete this order?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {},
                      },
                      {
                        text: 'OK',
                        onPress: () => handleDeleteOrder(),
                      },
                    ],
                  );
                }}
              />
            </View>
            <View
              style={{
                width: '48%',
              }}>
              <CustomButton
                backgroundColor="rgba(41, 191, 106, 0.05)"
                content="Add Item"
                bordered
                color="#29BF6A"
                containerStyle={{
                  borderColor: '#29BF6A',
                }}
                onPress={() => {}}
              />
            </View>
          </View>

          <View style={styles.orderDetailWrapper}>
            <View style={styles.orderTitle}>
              <Text style={styles.otLeft}>Your Order</Text>
              <View style={styles.otRight} />
            </View>

            <View style={{height: HP(35)}}>
              <ScreenList
                onRefresh={() => {}}
                refreshing={false}
                data={cartList}
                ListEmptyComponent={<EmptyData message="No item found" />}
                renderItem={({item, index}: any) => (
                  <CartList
                    key={`${Math.random().toString()}`}
                    editQuantity={() => {
                      setSelected({...item, orderIndex: index});
                      setAddItem(true);
                      setAddMode(false);
                    }}
                    handleRemove={() => {}}
                    item={item}
                  />
                )}
              />
            </View>

            {/*  */}

            <View>
              <Pressable onPress={() => {}}>
                <Text style={styles.addMore}>+ Add to this order</Text>
              </Pressable>
            </View>

            <View>
              <View style={[styles.title, {marginBottom: 16}]}>
                <Text style={styles.noTl}>
                  Subtotal (
                  {cartList.length > 1
                    ? `${cartList.length} Items`
                    : `${cartList.length} Item`}
                  )
                </Text>
                <Text style={styles.noTR}>
                  {currencyFormat(breakdown.subTotal)}
                </Text>
              </View>
              <View style={styles.title}>
                <Text style={styles.noTl}>Discount</Text>
                <Text style={styles.noTR}>
                  ₦ {breakdown.discount || '0.00'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.payCont}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 32,
              marginTop: 'auto',
            }}>
            <Text style={styles.odOrderNo}>Total</Text>
            <Text>{currencyFormat(breakdown.total)}</Text>
          </View>
          {/* <Pressable onPress={() => {}}>
            <Text style={styles.save}>Save for later</Text>
          </Pressable> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexGrow: 1,
                marginRight: 10,
              }}>
              <Button
                disabled={true}
                buttonColor={colors.primary}
                textColor={colors.white}
                onPress={() => {}}>
                Save for later
              </Button>
            </View>
            <View
              style={{
                flexGrow: 1,
              }}>
              <CustomButton
                content="Place Order & Pay"
                backgroundColor="#29BF6A"
                color={colors.white}
                onPress={handleSubmit}
                loading={isLoading}
                disabled={isLoading}
              />
            </View>
          </View>
        </View>
      </View>
      {addItem && (
        <AddItem
          visible={addItem}
          setVisible={setAddItem}
          mode={'edit'}
          handleSelected={handleAddMoreQuantity}
          selected={selected}
        />
      )}
      {/* {addOther && (
        <AddOtherAmount
          quantity={`${totalAmount}`}
          setQuantity={setTotalAmount}
          visible={addOther}
          setVisible={setAddOther}
          handleSubmit={() => {
            setAddOther(false);
            setActionLoading(true);
            handleSubmit('pay');
          }}
        />
      )} */}
    </Screen>
  );
};

export default CartDetail;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 42,
    alignItems: 'center',
  },
  tLeft: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.0333333,
    color: '#18191F',
  },
  tRight: {
    color: '#130F26',
  },
  cartViewWrap: {},
  cartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
  orderTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 16,
  },
  otLeft: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    marginRight: 32,
  },
  otRight: {
    borderColor: colors.alto,
    borderWidth: 1,
    flexGrow: 1,
  },
  addMore: {
    marginLeft: 'auto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    color: colors.primary,
    paddingVertical: 19,
  },
  noTl: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: colors.doveGray,
  },
  noTR: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
  },
  payCont: {
    marginTop: 'auto',
  },
  save: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 16,
  },
  orderDetailWrapper: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 11,
    // },
    // shadowOpacity: 0.55,
    // shadowRadius: 14.78,
  },
});
