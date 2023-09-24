import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import style from './style';
import {logOutUser} from '../screens/Authentication/AuthSlicer/authSlice';
import AuthNavigator from './AuthNavigation';
import {RootState} from '../store';
// import GeneralNavigator from './GeneralNavigator';
import DrawerNavigator from './DrawerNavigation';

const RootNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  const {token} = useAppSelector((state: RootState) => state.authentication);

  useEffect(() => {
    dispatch(logOutUser());
  }, [dispatch]);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={isDarkMode ? '#000' : '#fff'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        {/* <Text>Welcome to react native template</Text> */}
        {/* <AuthNavigator /> */}
        {token ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
