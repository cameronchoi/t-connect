import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  static navigationOptions = {
    header: null
  }
  handlePress () {
    var username = this.state.username
    var password = this.state.password
    if (
      username.toLowerCase() == 'monicas' &&
      password.toLowerCase() == 'peers'
    ) {
      this.props.navigation.navigate('Map')
    } else {
      alert('Wrong username or password!')
    }
  }
  render () {
    return (
      <View>
        <Text style={styles.heading}>Login</Text>
        <View>
          <Text style={styles.subheading}>Username</Text>
          <TextInput
            onChangeText={text => this.setState({ username: text })}
            style={styles.input}
            placeholder='Enter your username'
          />
        </View>
        <View>
          <Text style={styles.subheading}>Password</Text>
          <TextInput
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
            style={styles.input}
            placeholder='Enter your password'
          />
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.handlePress.bind(this)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 65,
    marginLeft: 20,
    marginBottom: 20
  },
  subheading: {
    fontSize: 20,
    marginLeft: 20
  },
  input: {
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: '200'
  },
  button: {
    borderRadius: 5,
    height: 60,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 27
  },
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
