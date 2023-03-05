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
  Child: any;
  NavigationContext: any
}>;

export default function Card({ Child, NavigationContext }: SectionProps): JSX.Element {

  return (
    <View style={styles.container}>
      <Child NavigationContext={NavigationContext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 10
  }
});
