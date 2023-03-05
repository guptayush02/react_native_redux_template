import React, { useState, useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Login, Signup } from '../screens/auth/index';
import { Dashboard, QrScreen, Settings } from '../screens/Dashboard/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StateContext } from '../redux/redux';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
    </Stack.Navigator>
  );
}

export function MyStack() {

  const { login } = useContext(StateContext);
  const state:any = useContext(StateContext);

  const [isLogin, setIsLogin] = useState(login);

  useEffect(() => {
    // state.dispatch({type: 'logout'})
    setIsLogin(login)
  }, [login]);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {
        isLogin ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{title: 'Dashboard'}}
            />
            <Tab.Screen
              name="QR"
              component={QrScreen}
              options={{title: 'QR'}}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{title: 'Settings'}}
            />
          </Tab.Navigator>
        ) : (
          <AuthNavigator />
        )
      }
    </NavigationContainer>
  )
}
