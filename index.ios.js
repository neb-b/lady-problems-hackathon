import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native'
import App from './src/app'

export default class lady_problems_hackathon extends Component {
  render() {
    return (
      <View>
        <App app="ios"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('lady_problems_hackathon', () => lady_problems_hackathon);
