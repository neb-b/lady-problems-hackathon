import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.layout}>
        <Text>Hello world</Text>
      </View>
    )
  }
}

export default Layout

const styles = StyleSheet.create({
  layout: {
    padding: 50
  }
})
