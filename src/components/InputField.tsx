/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


type SectionProps = PropsWithChildren<{
  secureTextEntry: boolean;
  onChangeText: (val:string) => void;
  placeHolder: string;
}>;

export default function LoginForm({ placeHolder, onChangeText, secureTextEntry }: SectionProps): JSX.Element {

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        onChangeText={(val) => onChangeText(val)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
});
