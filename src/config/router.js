import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Accounts from '../screens/accounts';
import EditAccount from '../screens/editAccount';
import Header from '../screens/header';

export const Tabs = StackNavigator({
  Accounts: {
    screen: Accounts,
  },
  NewAccount: {
    screen: EditAccount
  }
});
