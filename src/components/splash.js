import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import Dimensions from 'Dimensions'

class Layout extends Component {
  constructor(props) {
    super(props)
    console.log("this.props", this.props)
  }

  _renderSplash() {
    return (
      <View style={styles.splash}>
      {
      <Image style={styles.image} source={require('../../public/splash.jpeg')}/>
      }
      </View>
    )
  }

  _renderRow(row, index) {
    return (
      <View
        key={row.title}
        style={styles.row}
        backgroundColor={colors[index]}>
        <TouchableHighlight
        underlayColor="#e0d7d7"
        onPress={() => this.props.viewContent(row)}
        style={styles.touchableHighlight}>
          <View>
            <Text style={styles.link}>{row.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.layout}>
        {this._renderSplash()}
        <View style={styles.links}>
        {
          this.props.data.map(this._renderRow.bind(this))
        }
        </View>
      </View>
    )
  }
}

export default Layout
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  layout: {
    flex: 1
  },
  splash: {
    height: 300
  },
  image: {
    maxWidth: width,
    maxHeight: 400
  },
  row: {
    height: 50
  },
  links: {
    position: 'absolute',
    bottom: 0,
    width
  },
  link: {
    color: "#fff",
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 24
  }
})

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange"
]
