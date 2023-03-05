/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
*/

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
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
  title: string;
  color: string;
  onPress: () => void;
  backgroundColor: string
}>;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
  }
})

export default function CustomButton({title, color, onPress, backgroundColor}: SectionProps): JSX.Element {
  return (
    <View style={[styles.container, {backgroundColor, borderColor: backgroundColor}]}>
      <Button
        onPress={onPress}
        title={title}
        color={color}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}
