import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../allstyles';

class DroopInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      latitude: null,
      longitude: null
    };
  }

  handleLongitude = (longitude) => {
    this.setState({ longitude })
  }

  handleLatitude = (latitude) => {
    this.setState({ latitude})
  }

  render() {
    const { longitude, latitude } = this.state
    return (
      <View style={styles.UserInputView}>
        <Text>LOCATION: {latitude} {" "} {longitude}</Text>
        <TextInput
          placeholder="Enter latitude"
          style={styles.InputBox}
          keyboardType="decimal-pad"
          returnKeyType={"done"}
          enablesReturnKeyAutomatically={true}
          onChangeText={this.handleLatitude}
          value={latitude}
        />
        <TextInput
          placeholder="Enter longitude"
          style={styles.InputBox}
          keyboardType="decimal-pad"
          returnKeyType={"done"}
          enablesReturnKeyAutomatically={true}
          onChangeText={this.handleLongitude}
          value={longitude}
        />
        <Button
          title="Submit"
          onPress={() => alert(longitude)}
        />
      </View>
    );
  }
}

export default DroopInputScreen;
