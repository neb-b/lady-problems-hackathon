import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'
import Layout from './layout'

class App extends Component {
  render() {
    return (
      <View>
        <Layout />
      </View>
    )
  }
}
export default App
