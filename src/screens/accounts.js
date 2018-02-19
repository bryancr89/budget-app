import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

export default class AccountsView extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Accounts',
      headerRight: (
        <Button onPress={() => navigation.navigate('NewAccount')} title="+" color="#000" />
      ),
    };
  };
  render() {
    return (
      <View>
        <Card
          title='HELLO WORLD'>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            onPress={() => alert('This is a button!')}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      </View>
    );
  }
}