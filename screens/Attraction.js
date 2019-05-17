import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {this.props.navigation.getParam('name')}
        </Text>
        <Image
          style={styles.image}
          source={this.props.navigation.getParam('image')}
        />
        <Text style={styles.para}>
          {this.props.navigation.getParam('description')}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  para: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: '200'
  },
  image: {
    height: width * 0.6,
    width: width - 40,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden'
  }
})
