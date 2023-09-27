import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {colors} from '../../assets/theme/color';
import Home from '../../screens/General/Home';
import Services from '../../screens/General/Services';
import HomeTabIcon from '../../assets/svgs/homeTabIcon';
import {MoreTabIcon} from '../../assets/svgs';
import ServiceTabIcon from '../../assets/svgs/serviceTabIcon';
import ProfileTabIcon from '../../assets/svgs/profileTabIcon';
import {
  ADD_SALES_SCREEN,
  DASHBOARD,
  MORE_SCREEN,
  PROFILE_SCREEN,
  SERVICE_SCREEN,
} from '../../constants/routeNames';
import AddSales from '../../screens/General/Sales/AddSales';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={DASHBOARD}
      screenOptions={{
        tabBarActiveTintColor: colors.jaffa,
        tabBarInactiveTintColor: colors.mako,
        tabBarStyle: {
          paddingHorizontal: 10,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: colors.white,
          borderRadius: 14,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
        },
      }}>
      <Tab.Screen
        name={DASHBOARD}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({color}) => (
            <Text style={{color, margin: 0, marginBottom: 10, fontSize: 12}}>
              Home
            </Text>
          ),
          tabBarIcon: ({color}) => <HomeTabIcon color={color} />,
        }}
      />
      <Tab.Screen
        name={ADD_SALES_SCREEN}
        component={AddSales}
        options={{
          headerShown: false,
          tabBarLabel: ({color}) => (
            <Text style={{color, margin: 0, marginBottom: 10, fontSize: 12}}>
              Sales
            </Text>
          ),
          tabBarIcon: ({color}) => <ServiceTabIcon color={color} />,
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({color}) => (
            <Text style={{color, margin: 0, marginBottom: 10, fontSize: 12}}>
              Profile
            </Text>
          ),
          tabBarIcon: ({color}) => <ProfileTabIcon color={color} />,
        }}
      />
      <Tab.Screen
        name={SERVICE_SCREEN}
        component={Services}
        options={{
          headerShown: false,
          tabBarLabel: ({color}) => (
            <Text style={{color, margin: 0, marginBottom: 10, fontSize: 12}}>
              More
            </Text>
          ),
          tabBarIcon: ({color}) => <MoreTabIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
