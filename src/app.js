import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Layout from './layout'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: null,
      active: null,
      data: [
        {
          title: "Housing",
          summary: "This is a summary of the data",
          data: [
            {
              title: "Resource 1",
              summary: "Summary of resource 1",
              address: "Address of resource 1",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "facebook.com", "twitter.com"]
            },
            {
              title: "Resource 2",
              summary: "Summary of resource 2",
              address: "Address of resource 2",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            }
          ]
        },
        {
          title: "Employment",
          summary: "This is a summary of the data",
          data: [
            {
              title: "Resource 1",
              summary: "Summary of resource 1",
              address: "Address of resource 1",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            },
            {
              title: "Resource 2",
              summary: "Summary of resource 2",
              address: "Address of resource 2",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            }
          ]
        },
        {
          title: "Food/Emergency Services",
          summary: "This is a summary of the data",
          data: [
            {
              title: "Resource 1",
              summary: "Summary of resource 1",
              address: "Address of resource 1",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            },
            {
              title: "Resource 2",
              summary: "Summary of resource 2",
              address: "Address of resource 2",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            }
          ]
        },
        {
          title: "Legal Aid",
          summary: "This is a summary of the data",
          data: [
            {
              title: "Resource 1",
              summary: "Summary of resource 1",
              address: "Address of resource 1",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            },
            {
              title: "Resource 2",
              summary: "Summary of resource 2",
              address: "Address of resource 2",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            }
          ]
        },
        {
          title: "Healthcare",
          summary: "This is a summary of the data",
          data: [
            {
              title: "Resource 1",
              summary: "Summary of resource 1",
              address: "Address of resource 1",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            },
            {
              title: "Resource 2",
              summary: "Summary of resource 2",
              address: "Address of resource 2",
              hours: "8:00 a.m. - 7:00 p.m.",
              links: ["google.com", "google.com", "google.com"]
            }
          ]
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

  viewContent(row) {
    if (this.state.active !== row.title) {
      this.setState({active: row})
    } else {
      this.setState({active: null})
    }
  }

  clearActive() {
    this.setState({active: null})
  }

  render() {
    return (
      <View>
        <Layout
          {...this.props}
          data={this.state.data}
          active={this.state.active}
          viewContent={this.viewContent.bind(this)}
          clearActive={this.clearActive.bind(this)}/>
      </View>
    )
  }
}
export default App
