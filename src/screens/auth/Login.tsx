/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useContext, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, InputField, CustomButton } from '../../components/index';
import { StateContext } from '../../redux/redux';
import { useToast } from "react-native-toast-notifications";

type SectionProps = PropsWithChildren<{
  navigation: any;
}>;

export default function Login({ navigation }: SectionProps): JSX.Element {

  const NavigationContext = createContext(navigation)

  return (
    <ScrollView>
      <NavigationContext.Provider value={navigation}>
        <Card Child={LoginForm} NavigationContext={NavigationContext} />
      </NavigationContext.Provider>
    </ScrollView>
  );
}

type SectionPropsLoginForm = PropsWithChildren<{
  NavigationContext: any;
}>;

function LoginForm({NavigationContext}: SectionPropsLoginForm) {

  const toast = useToast();
  const state:any = useContext(StateContext);
  const navigation:any = useContext(NavigationContext);

  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const onChangeUser = (val:string) => {
    setUser(val)
  }

  const onChangePassword = (val:string) => {
    setPassword(val)
  }

  const onPressLogin = async() => {
    if (!!user && !!password) {
      return state.dispatch({ type: "login" })
    } else {
      toast.show("Fields are empty", {
        type: "warning",
        duration: 2000
      });
    }
  }

  return (
    <View style={{padding: 5}}>
      <InputField
        placeHolder={'Email/Phone'}
        onChangeText={onChangeUser}
        secureTextEntry={false}
      />

      <View style={styles.verticalLine} />
      <InputField
        placeHolder={'Password'}
        onChangeText={onChangePassword}
        secureTextEntry={true}
      />

      <View style={styles.verticalLine} />
      <CustomButton
        title={'Login'}
        color={'#fff'}
        onPress={onPressLogin}
        backgroundColor={'#728FCE'}
      />

      <View style={{alignSelf: 'center'}}>
        <Text onPress={() => navigation.navigate('Signup')}>Don't have account?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  verticalLine: {
    height: 10
  }
})
