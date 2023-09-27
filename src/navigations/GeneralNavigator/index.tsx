import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../TabNavigation';
import {
  ADD_CATEGORY_SCREEN,
  ADD_PRODUCT_SCREEN,
  ADD_SALES_SCREEN,
  CART_CHECKOUT_SCREEN,
  CATEGORY_SCREEN,
  DASHBOARD,
  PRODUCT_SCREEN,
  SALES_SCREEN,
  SERVICE_SCREEN,
} from '../../constants/routeNames';
import Home from '../../screens/General/Home';
import Services from '../../screens/General/Services';
import Categories from '../../screens/General/Category';
import AddCategory from '../../screens/General/Category/AddCategory';
import Products from '../../screens/General/Products';
import AddProduct from '../../screens/General/Products/AddProduct';
import AddSales from '../../screens/General/Sales/AddSales';
import ViewSales from '../../screens/General/Sales';
import CartDetail from '../../screens/General/Sales/CartDetail';

interface Props {
  title?: string;
}

const GeneralNavigator = ({}: Props) => {
  const GeneralStack = createStackNavigator();
  return (
    <GeneralStack.Navigator>
      <GeneralStack.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen
        name={DASHBOARD}
        component={Home}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen name={SERVICE_SCREEN} component={Services} />
      <GeneralStack.Screen
        name={CATEGORY_SCREEN}
        component={Categories}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen
        name={ADD_CATEGORY_SCREEN}
        component={AddCategory}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen
        name={PRODUCT_SCREEN}
        component={Products}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen
        name={ADD_PRODUCT_SCREEN}
        component={AddProduct}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen
        name={ADD_SALES_SCREEN}
        component={AddSales}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen
        name={CART_CHECKOUT_SCREEN}
        component={CartDetail}
        options={{headerShown: false}}
      />
      <GeneralStack.Screen
        name={SALES_SCREEN}
        component={ViewSales}
        options={{headerShown: false}}
      />
    </GeneralStack.Navigator>
  );
};

export default GeneralNavigator;
