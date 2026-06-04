import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { COLORS } from '../globalStyle/Theme';

const RootStack = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor={COLORS.cream} />
    <StackNavigator />
  </NavigationContainer>
);

export default RootStack;
