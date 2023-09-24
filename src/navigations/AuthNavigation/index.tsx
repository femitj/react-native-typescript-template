import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Authentication/Login';
import {LOGIN} from '../../constants/routeNames';

interface Props {
  title?: string;
}

const AuthNavigator = ({}: Props) => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
