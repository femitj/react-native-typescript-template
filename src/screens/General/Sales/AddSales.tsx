import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmptyData from '../../../components/EmptyData';
import {Screen, ScreenList} from '../../../components/Screens';
import NavToggle from '../../../components/TopNav/NavToggle';
import {colors} from '../../../assets/theme/color';
import {useGetProductsQuery} from '../GeneralSlicer';
import genStyles from '../genStyles';
import SearchView from '../../../components/SearchView';
import ProductItem from '../Products/ProductItem';
import AddItem from './AddItem';
import Button from '../../../components/CustomButton';
import {calcSubTotal} from '../../../utils';
import {HDP, RF} from '../../../utils/devicesize';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setCartList} from './SaleSlicer/saleSlice';
import {
  ADD_SALES_SCREEN,
  CART_CHECKOUT_SCREEN,
} from '../../../constants/routeNames';
import {SizedBox} from '../../../components/SizedBox';

const AddSales = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {currentData, isFetching, refetch} = useGetProductsQuery();
  const [filterData, setFilterData] = useState({});
  const [addItem, setAddItem] = useState(false);
  const [selected, setSelected] = useState({
    name: '',
    productId: '',
    quantity: 0,
    soldPrice: '',
  });
  const {cartList} = useAppSelector(state => state.sales);

  // console.log('>>>>>', isFetching, currentData?.data[0]);

  const handleSelected = (soldPrice: string, quantity: number) => {
    console.log(soldPrice, quantity);
    setSelected({...selected, quantity, soldPrice});
    setAddItem(!addItem);
    dispatch(setCartList({...selected, quantity, soldPrice}));
    // setCartList([...cart, {...selected, quantity, soldPrice}]);
    // handleAddCartItem([...cart, {...selected, quantity, soldPrice}])(
    //   cartDispatch,
    // );
  };

  return (
    <Screen
      isFixed={true}
      backgroundColor={colors.white}
      paddingHorizontal={15}>
      <NavToggle />
      <SearchView
        title="Select Product"
        searchPress={() => {}}
        type="default"
        filterData={filterData}
        setFilterData={setFilterData}
      />

      <View style={genStyles.itemList}>
        <ScreenList
          onRefresh={() => {
            refetch();
          }}
          refreshing={isFetching}
          data={currentData?.data}
          ListEmptyComponent={<EmptyData message="No product found" />}
          renderItem={({item}: any) => (
            <ProductItem
              item={item}
              handleClick={(x: any) => {
                setSelected(x);
                setAddItem(true);
              }}
              disableClick={false}
            />
          )}
        />
      </View>

      {addItem && (
        <AddItem
          visible={addItem}
          setVisible={setAddItem}
          handleSelected={handleSelected}
          mode={'add'}
          selected={selected}
        />
      )}

      {cartList?.length && !addItem ? (
        <View style={styles.itemListFooter}>
          <Button
            onPress={() => {
              navigation.push(CART_CHECKOUT_SCREEN, {
                data: {fromLocation: ADD_SALES_SCREEN},
              });
            }}
            content={
              <View style={styles.procView}>
                <Text style={styles.procViewText}>
                  Proceed to order {cartList?.length} item
                </Text>
                <Text style={styles.procViewText}>
                  {calcSubTotal(cartList)}
                </Text>
              </View>
            }
            color={colors.white}
            backgroundColor={colors.primary}
          />

          <SizedBox height={3} />
        </View>
      ) : (
        <View />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemListFooter: {
    backgroundColor: colors.transparent,
    paddingHorizontal: 16,
    marginTop: 'auto',
  },
  procView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: HDP(300),
  },
  procViewText: {
    color: colors.white,
    fontSize: RF(14),
    fontWeight: '500',
    lineHeight: 19,
  },
});

export default AddSales;
