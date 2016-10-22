import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Layout from './layout'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: null,
      data: [
        {
          title: "Housing",
          summary: "This is a summary of the data"
        },
        {
          title: "Employment",
          summary: "This is a summary of the data"
        },
        {
          title: "Food/Emergency Services",
          summary: "This is a summary of the data"
        },
        {
          title: "Legal Aid",
          summary: "This is a summary of the data"
        },
        {
          title: "Healthcare",
          summary: "This is a summary of the data"
        },
      ]
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        if (coords) {
          //fetch data
          this.setState({location: {lat: coords.latitude, lon: coords.longitude}})
        }
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }

  render() {
    return (
      <View>
        <Layout {...this.props} data={this.state.data}/>
      </View>
    )
  }
}
export default App
