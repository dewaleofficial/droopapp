import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../allstyles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.HomeView}>
        <Text style={styles.HomeScreenText}> DROOP </Text>
        <Image source={require("../assets/globe.jpg")} />
      </View>
    );
  }
}

export default HomeScreen;
