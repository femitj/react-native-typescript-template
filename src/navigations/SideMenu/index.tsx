import React, {useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  Alert,
  Pressable,
} from 'react-native';
import {
  CATEGORY_SCREEN,
  PRODUCT_SCREEN,
  SALES_SCREEN,
  DASHBOARD,
  PROFILE_SCREEN,
  ADD_CATEGORY_SCREEN,
  ADD_PRODUCT_SCREEN,
  ADD_SALES_SCREEN,
} from '../../constants/routeNames';
import styles from './styles';
import {logOutUser} from '../../screens/Authentication/AuthSlicer/authSlice';
import {useAppDispatch} from '../../hooks';
import Icon from '../../components/Icon';
import {SizedBox} from '../../components/SizedBox';
import {Avatar, Container} from '../../components/Wrappers';
import {placeholderImage} from '../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SideMenu = ({navigation, authDispatch, authState, userInfo}: any) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          AsyncStorage.removeItem('token');
          dispatch(logOutUser());
          // logoutUser()(authDispatch);
          // navigation.navigate(LOGOUT);
          // RNRestart.Restart();
        },
      },
    ]);
  };

  const categoryMenuItems = [
    {
      icon: <Icon type="ant" size={17} name="shoppingcart" />,
      name: 'View Categories',
      onPress: () => {
        navigation.navigate(CATEGORY_SCREEN);
      },
    },
    {
      icon: <Icon type="ant" size={17} name="shoppingcart" />,
      name: 'New Category',
      onPress: () => {
        navigation.navigate(ADD_CATEGORY_SCREEN);
      },
    },
  ];

  const productMenuItems = [
    {
      icon: <Icon type="feather" size={17} name="user" />,
      name: 'My Products',
      onPress: () => {
        navigation.navigate(PRODUCT_SCREEN);
      },
    },
    {
      icon: <Icon type="feather" size={17} name="user-plus" />,
      name: 'Add New Products',
      onPress: () => {
        navigation.navigate(ADD_PRODUCT_SCREEN);
      },
    },
  ];

  const salesMenuItems = [
    {
      icon: <Icon type="feather" size={17} name="user" />,
      name: 'Add New Sales',
      onPress: () => {
        navigation.navigate(ADD_SALES_SCREEN);
      },
    },
    {
      icon: <Icon type="feather" size={17} name="user-plus" />,
      name: 'View all',
      onPress: () => {
        navigation.navigate(SALES_SCREEN);
      },
    },
  ];

  const extrasMenuItems = [
    {
      icon: <Icon type="material" size={17} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];

  // const handleNewOrder = () => {
  //   navigation.toggleDrawer();
  //   setVisble(true);
  // };

  return (
    <SafeAreaView>
      <Container padding={5}>
        <View style={styles.logoDiv}>
          <Pressable onPress={() => navigation.navigate(PRODUCT_SCREEN)}>
            <Avatar
              source={
                userInfo?.profileUrl
                  ? {uri: userInfo?.profileUrl}
                  : placeholderImage
              }
              size={25}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate(PROFILE_SCREEN)}>
            <View style={styles.logoText}>
              {userInfo?.displayName && (
                <Text style={styles.ltName}>{userInfo?.displayName || ''}</Text>
              )}
              <Text style={styles.ltRole}>{userInfo?.role || 'Customer'}</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Ditem}
            onPress={() => navigation.navigate(DASHBOARD)}>
            <Icon type="feather" size={17} name="home" />
            <Text style={styles.itemText}>Dashboard</Text>
          </TouchableOpacity>
          <Text style={styles.ordTitle}>Category</Text>
          {categoryMenuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}

          <SizedBox height={2} />
          <Text style={styles.ordTitle}>Product</Text>
          {productMenuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}

          <SizedBox height={2} />
          <Text style={styles.ordTitle}>Sales</Text>
          {salesMenuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}

          <SizedBox height={2} />
          {extrasMenuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* {visible && (
          <NewOrder
            visible={visible}
            setVisible={setVisble}
            navigation={navigation}
          />
        )} */}
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
