import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import ImageLoader from '../components/ImageLoader'
import { Font } from 'expo'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount () {
    await Font.loadAsync({
      'Courier New': require('../assets/fonts/cour.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text style={styles.heading}>T-Connect</Text>
        ) : null}
        {this.state.fontLoaded ? (
          <Text style={styles.subheading}>Explore Timor-Leste</Text>
        ) : null}
        {this.state.fontLoaded ? (
          <ImageLoader
            style={styles.image}
            source={require('../assets/images/logo.png')}
          />
        ) : null}
        {this.state.fontLoaded ? (
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        ) : null}
        {this.state.fontLoaded ? (
          <TouchableHighlight
            onPress={() => {
              alert('Not Available')
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 300,
    width: 300,
    margin: 50
  },
  heading: {
    fontSize: 60,
    fontFamily: 'Courier New',
    color: 'white'
  },
  subheading: {
    fontSize: 20,
    fontFamily: 'Courier New',
    color: 'white'
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Courier New',
    fontSize: 30
  }
})
