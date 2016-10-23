import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Dimensions from 'Dimensions'

const _renderDataRow = ({title, summary, address, hours, links}) => {
  return (
    <View
      key={title}
      style={styles.resourceData}>
      <Text style={styles.resourceHeading}>{title}</Text>
      <Text>{summary}</Text>
      <Text>{address}</Text>
      <Text style={styles.linksHeading}>Helpful links</Text>
      {links.length && links.map((link) => <Text key={link}>{link}</Text>)}
    </View>
  )
}

const ActiveScreen = ({clearActive, active}) => {
  const { title, summary, data } = active
  return (
    <View style={styles.active}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.resource}>{summary}</Text>
      <View style={styles.data}>
        {data.length && data.map(_renderDataRow)}
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

export default ActiveScreen

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  active: {
    flex: 1,
    height,
    width,
    padding: 30
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
    fontWeight: '600'
  },
  linksHeading: {
    
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
