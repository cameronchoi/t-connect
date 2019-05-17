import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native'

import data from '../constants/mocks'

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View
        style={{
          height: Dimensions.get('window').height,
          paddingBottom: 70
        }}
      >
        <Text style={styles.heading}>Explore</Text>
        <FlatList
          data={data}
          automaticallyAdjustContentInsets={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() =>
                this.props.navigation.navigate('Area', {
                  name: item.name,
                  overview: item.overview,
                  attractionOneName: item.attractionOneName,
                  attractionOneImage: item.attractionOneImage,
                  attractionOneDesc: item.attractionOneDesc,
                  attractionTwoName: item.attractionTwoName,
                  attractionTwoImage: item.attractionTwoImage,
                  attractionTwoDesc: item.attractionTwoDesc,
                  attractionThreeName: item.attractionThreeName,
                  attractionThreeImage: item.attractionThreeImage,
                  attractionThreeDesc: item.attractionThreeDesc,
                  misc: item.misc
                })
              }
            >
              <Image style={styles.image} source={item.address} />
              <Text style={styles.imageText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 40,
    textAlign: 'center'
  },
  imageContainer: {
    marginTop: 15
  },
  image: {
    height: width * 0.6,
    width: width - 50,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageText: {
    position: 'absolute',
    top: 10,
    left: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})
