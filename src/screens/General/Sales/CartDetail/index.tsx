import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {colors} from '../../../../assets/theme/color';
import TopNav from '../../../../components/TopNav';
import {Screen, ScreenList} from '../../../../components/Screens';
import Button from '../../../../components/CustomButton';
import Icon from '../../../../components/Icon';
import EmptyData from '../../../../components/EmptyData';
import CartList from '../CartList';
import {truncateWords} from '../../../../utils';
import genStyles from '../../genStyles';
import {currencyFormat} from '../../../../utils/currency';
import AddItem from '../AddItem';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {setCartList, setRemoveCartItem} from '../SaleSlicer/saleSlice';

const CartDetail = ({navigation}) => {
  const {navigate} = useNavigation();
  const {params} = useRoute();
  const dispatch = useAppDispatch();
  const {cartList} = useAppSelector(state => state.sales);
  const [addItem, setAddItem] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [addOther, setAddOther] = useState(false);
  const [selected, setSelected] = useState({});
  const [breakdown, setBreakdown] = useState({
    subTotal: 0,
    discount: 0,
    total: 0,
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [fromLocation, setFromLocation] = useState(undefined);
  const [showItem, hideItem] = useState(false);

  // useEffect(() => {
  //   setOrderItemList(list);
  //   const subTotal = calcSubTotal(list);
  //   const discount = orderItem?.discount || 0;
  //   const total = subTotal + discount;
  //   handleCalcBreakdown(subTotal, discount, total);
  // }, [list]);

  useEffect(() => {
    if (params?.data) {
      console.log(params?.data?.fromLocation);
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

  // const handleDeleteOrder = async () => {
  //   const id = orderItem.id;
  //   if (!id) {
  //     clearGlobalState();
  //     navigation.goBack();
  //     return;
  //   }
  //   const res = await httpDeleteOrder(id);
  //   if (res.status) {
  //     setActionLoading(false);
  //     // navigate to orders
  //     setNavigateTo(fromLocation);
  //     setModalObj({
  //       title: 'Delete order',
  //       description: 'Your order has been successfully deleted',
  //       btnText: 'Continue',
  //     });
  //     setShowModal(true);
  //   } else {
  //     setNavigateTo('error');
  //     setModalObj({
  //       title: 'Delete order',
  //       description: res.message,
  //       btnText: 'Go back',
  //     });
  //     setShowModal(true);
  //   }
  // };

  const handleAddMoreQuantity = (soldPrice: string, quantity: number) => {
    setAddItem(!addItem);
    dispatch(setRemoveCartItem(selected)); // removes item to be edited
    setSelected({...selected, quantity, soldPrice});
    dispatch(setCartList({...selected, quantity, soldPrice})); // add item back after editing
  };

  const handleCalcBreakdown = (subTotal, discount, total) => {
    setBreakdown({
      subTotal,
      discount,
      total,
    });
  };

  const clearGlobalState = () => {
    // handleAddCartItem([])(cartDispatch);
  };

  return (
    <Screen
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
              <Button
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
                        onPress: () => {},
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
              <Button
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
            <TouchableOpacity
              style={[styles.title, {marginBottom: 18}]}
              onPress={() => hideItem(!showItem)}>
              {/* <Text>{sellerName}</Text> */}
              <Icon
                type="fa"
                name={showItem ? 'angle-up' : 'angle-down'}
                size={24}
              />
            </TouchableOpacity>

            <View style={genStyles.itemList}>
              <ScreenList
                onRefresh={() => {}}
                data={[]}
                ListEmptyComponent={<EmptyData message="No item found" />}
                renderItem={({item, index}: any) => (
                  <CartList
                    key={`${item.name}-${Math.random().toString()}`}
                    name=""
                    description={truncateWords(item.description, {length: 35})}
                    price={item.unitPrice * item.quantity}
                    editQuantity={() => {
                      setSelected({...item, orderIndex: index});
                      setAddItem(true);
                      setAddMode(false);
                    }}
                    handleRemove={() => {}}
                    showItem={showItem}
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
          <Pressable onPress={() => {}}>
            <Text style={styles.save}>Save for later</Text>
          </Pressable>

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
                content="Place Order & Pay"
                backgroundColor="#29BF6A"
                color={colors.white}
                onPress={() => {}}
              />
            </View>
            <View
              style={{
                flexGrow: 1,
              }}>
              <Button
                content="Place Order"
                backgroundColor={colors.primary}
                color={colors.white}
                onPress={() => {}}
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
    paddingTop: 25,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
  },
});
