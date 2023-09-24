import React, {useContext, useState} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from '../GeneralNavigator';
import {DASHBOARD, HOME_SCREEN} from '../../constants/routeNames';
import SideMenu from '../SideMenu';

const getDrawerContent = (
  navigation,
  authDispatch,
  authState,
  userInfo,
): any => {
  return (
    <SideMenu
      navigation={navigation}
      authDispatch={authDispatch}
      authState={authState}
      userInfo={userInfo}
    />
  );
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch, authState, userInfo} = useState({});

  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD}
      drawerType="slide"
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch, authState, userInfo)
      }>
      <Drawer.Screen name={HOME_SCREEN} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
