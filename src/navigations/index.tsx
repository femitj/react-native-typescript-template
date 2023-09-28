import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme, SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import style from './style';
import {logOutUser} from '../screens/Authentication/AuthSlicer/authSlice';
import AuthNavigator from './AuthNavigation';
import {RootState} from '../store';
// import GeneralNavigator from './GeneralNavigator';
import DrawerNavigator from './DrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  const {token} = useAppSelector((state: RootState) => state.authentication);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('gere logout');
    dispatch(logOutUser());
  }, [dispatch]);

  const getIsLoggedIn = async () => {
    try {
      const user = await AsyncStorage.getItem('token');
      // console.log('storage user', user);
      if (user) {
        setIsAuthenticated(true);
      } else {
        console.log('confirms logged out');
        setIsAuthenticated(false);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getIsLoggedIn();
  }, [token]);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={isDarkMode ? '#000' : '#fff'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        {/* <Text>Welcome to react native template</Text> */}
        {/* <AuthNavigator /> */}
        {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
