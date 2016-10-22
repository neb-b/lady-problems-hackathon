import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ActiveRow = (row) => {
  console.log("active row!")
  return (
    <View style={styles.active}>
      <Text>{row.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  active: {
    height: 300
  }
})
