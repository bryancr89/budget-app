import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Picker } from 'react-native-picker-dropdown';

export default class EditAccountView extends Component {
  constructor() {
    super();
    this.state = { language: 'js'  }
    this.onValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(language) {
    this.setState({ language })
  }

  render() {
    return (
      <View>
        <FormLabel>Account Name</FormLabel>
        <FormInput
          placeholder='INPUT WITH SHAKING EFFECT'
          shake={true}
        />
        <FormLabel>Account Name</FormLabel>
        <FormInput
          placeholder='INPUT WITH SHAKING EFFECT'
          shake={true}
        />
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Ruby" value="ruby" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Elm" value="elm" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerText: {
    color: 'black',
  }
});
