/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useState, useContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { StateContext } from '../../redux/redux';
import { Card, InputField, CustomButton } from '../../components/index';
import { useToast } from "react-native-toast-notifications";

type SectionProps = PropsWithChildren<{
  navigation: any;
}>;

export default function Signup({ navigation }: SectionProps): JSX.Element {

  const NavigationContext = createContext(navigation)

  return (
    <ScrollView>
      <NavigationContext.Provider value={navigation}>
        <Card Child={SignupForm} NavigationContext={NavigationContext} />
      </NavigationContext.Provider>
    </ScrollView>
  );
}

type SectionPropsSignupForm = PropsWithChildren<{
  NavigationContext: any;
}>;

function SignupForm({NavigationContext}: SectionPropsSignupForm): JSX.Element {

  const navigation:any = useContext(NavigationContext);
  const state:any = useContext(StateContext);
  const toast = useToast();

  const [password, setPassword] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const onChangeName = (val:string) => {
    setName(val)
  }

  const onChangePassword = (val:string) => {
    setPassword(val)
  }

  const onChangeEmail = (val:string) => {
    setEmail(val)
  }

  const onChangePhone = (val:string) => {
    setPhone(val)
  }

  const onPressSignup = () => {
    console.log("press signup")
    if (!!name && !!email && !!phone && !!password) {
      return state.dispatch({ type: 'login' });
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
        placeHolder={'Name'}
        onChangeText={onChangeName}
        secureTextEntry={false}
      />

      <View style={styles.verticalLine} />
      <InputField
        placeHolder={'Email'}
        onChangeText={onChangeEmail}
        secureTextEntry={false}
      />

      <View style={styles.verticalLine} />
      <InputField
        placeHolder={'Phone'}
        onChangeText={onChangePhone}
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
        title={'Signup'}
        color={'#fff'}
        onPress={onPressSignup}
        backgroundColor={'#728FCE'}
      />

      <View style={{alignSelf: 'center'}}>
        <Text onPress={() => navigation.navigate('Login')}>Already have an account?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  verticalLine: {
    height: 10
  }
});
