import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import Dimensions from 'Dimensions'
import ActiveRow from './active-row'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state={active: null}
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress(row) {
    if (this.state.active !== row.title) {
      this.setState({active: row.title})
    } else {
      this.setState({active: null})
    }
  }

  _renderRowContent(row) {

  }

  _renderRow(row, index) {
    return (
      <View
        key={row.title}
        style={styles.row}
        backgroundColor={colors[index]}>
        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this._handlePress(row)}>
          <View><Text>Hello</Text></View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    console.log("render", this.state)
    return (
      <View style={styles.list}>
        <ScrollView>
          {this.props.data.map(this._renderRow.bind(this))}
        </ScrollView>
      </View>
    )
  }
}

export default Layout
const {height} = Dimensions.get('window')
const rowHeight = (height - 70) / 5
const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  row: {
    flex: 1,
    height: rowHeight,
  },
  inactiveRow: {
    color: '#fff',
    fontSize: 48
  },
  touchableHighlight: {
    flex: 1
  }
})

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange"
]
