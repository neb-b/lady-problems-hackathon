import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import Dimensions from 'Dimensions'
import Splash from './components/splash'
import ActiveScreen from './components/active-screen'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  _renderTop() {
    return (
      <View style={[styles.statusBar, this.props.app === 'ios' ? styles.iosStatusBar : styles.androidStatusBar]}>
        <StatusBar barStyle="light-content" />
        <Text style={[styles.statusBar, this.props.app === 'ios' ? styles.iosStatusText : styles.androidStatusText]}>
          App name
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.layout}>
        {this._renderTop()}
        <View style={styles.listView}>
          {
            this.props.active
            ? <ActiveScreen {...this.props}/>
            : <Splash {...this.props}/>
          }
        </View>
      </View>
    )
  }
}

export default Layout

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width,
    height
  },
  statusBar: {
    backgroundColor: '#3273f4'
  },
  iosStatusBar: {
    height: 70,
  },
  androidStatusBar: {
    height: 60,
  },
  iosStatusText: {
    padding: 30,
    paddingBottom: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  androidStatusText: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingBottom: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
  },
  listView: {
    flex: 1,
  }
})
