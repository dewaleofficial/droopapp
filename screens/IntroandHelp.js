import React from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../allstyles'

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    icon: "md-globe",
    image: require('../assets/slide1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    icon: "md-pin",
    text: 'Other cool stuff',
    image: require('../assets/slide2.jpeg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    icon: "md-heart",
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/slide3.jpeg'),
    backgroundColor: '#22bcb5',
  }
];

const SlideComponent = (item) => {
  return (
    <View style={[styles.IntroScreenView, {"backgroundColor": item.backgroundColor}]}>
      <Image source={item.image} style={styles.IntroScreenImage} />
      <Text style={styles.IntroScreenTitle}>{item.title}</Text>
      {/* <Ionicons name={item.icon} size={100} color="green" /> */}
      <Text style={styles.IntroScreenText}>{item.text}</Text>
    </View>
  );
}

class IntroAndHelpScreen extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = SlideComponent //use this or the one below
  // _renderItem = (item) => {
  //   return (
  //     <View style={[styles.slide, {"backgroundColor": item.backgroundColor}]}>
  //       <Image source={item.image} style={styles.slideImg} />
  //       <Text style={styles.slideTitle}>{item.title}</Text>
  //       <Text style={styles.slideText}>{item.text}</Text>
  //     </View>
  //   );
  // }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
  }
}

export default IntroAndHelpScreen;
