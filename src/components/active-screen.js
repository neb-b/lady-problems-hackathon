import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking
} from 'react-native'
import Dimensions from 'Dimensions'

class ActiveScreen extends Component {
  constructor(props) {
    super(props)
  }

  handleLinkPress(url) {
    console.log("url", url)
  }

  _renderLink(link) {
    return (
      <TouchableHighlight
        key={link}
        onPress={() => this.handleLinkPress(link)}>
        <Text
          key={link}
          style={styles.link}>
          {link}
        </Text>
      </TouchableHighlight>
    )
  }

  _renderDataRow({title, summary, address, hours, links}) {
    return (
      <View
        key={title}
        style={styles.resourceData}>
        <Text style={styles.resourceHeading}>{title}</Text>
        <Text>{summary}</Text>
        <Text>{address}</Text>
        <Text style={styles.linksHeading}>Helpful links:</Text>
        {links.length && links.map(this._renderLink)}
      </View>
    )
  }

  render() {
    const { clearActive, active: {title, summary, data} } = this.props
    return (
      <View style={styles.active}>
        <View style={styles.resourceWrapper}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.resource}>{summary}</Text>
          <View style={styles.data}>
            {data.length && data.map(this._renderDataRow)}
          </View>
        </View>
        <TouchableHighlight
          onPress={clearActive}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default ActiveScreen

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  active: {
    flex: 1,
    height,
    width,
    padding: 30
  },
  resourceWrapper: {
    paddingBottom: 30
  },
  heading: {
    fontSize: 36,
    fontWeight: '800'
  },
  resource: {
    paddingTop: 10,
  },
  resourceData: {
    paddingTop: 10
  },
  resourceHeading: {
    fontSize: 18,
    fontWeight: '600'
  },
  linksHeading: {
    paddingTop: 5,
    fontWeight: '600'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
  button: {
    alignSelf: 'center',
    padding: 10,
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  }
})
