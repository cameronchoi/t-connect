import React from 'react'
import { StyleSheet, View, Image, Dimensions, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name='ios-search'
            size={20}
            color='#000'
          />
          <TextInput style={styles.input} placeholder='Search here' />
          {/* In future iterations, a search feature would be implemented allowing users to search for a
          certain location, and download the map block for that searched location. */}
        </View>
        <Image
          style={styles.image}
          source={require('../assets/images/map.png')}
        />
        {/* Instead of an image, using Expo THREE which allows importing 3D models into the application,
        in future iterations, the 3D map models made would be able to be properly showcased. Using orbit controls,
        the 3D model would also be able to zoomed up on and moved around using native gestures. */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: { width: width + 20, height: 700 },
  input: {
    marginTop: 30,
    width: width - 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 3
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242'
  }
})
