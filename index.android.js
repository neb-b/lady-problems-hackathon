import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App './src/app'

export default class lady_problems_hackathon extends Component {
  render() {
    return (
      <View>
        <App app="android"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('lady_problems_hackathon', () => lady_problems_hackathon);
