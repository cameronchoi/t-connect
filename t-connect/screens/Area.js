import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'

const { width } = Dimensions.get('window')

class ScrollImage extends React.Component {
  render () {
    return (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={this.props.handleClick}
      >
        <Image style={styles.image} source={this.props.address} />
        <Text style={styles.imageText}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}

export default class App extends React.Component {
  render () {
    return (
      <View>
        <ScrollView>
          <Text style={styles.heading}>
            {this.props.navigation.getParam('name')}
          </Text>
          <Text style={styles.subheading}>Overview</Text>
          <Text style={styles.para}>
            {this.props.navigation.getParam('overview')}
          </Text>
          <Text style={styles.subheading}>Key Attractions</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToInterval={width}
            snapToAlignment='center'
          >
            <ScrollImage
              address={this.props.navigation.getParam('attractionOneImage')}
              label={this.props.navigation.getParam('attractionOneName')}
              handleClick={() =>
                this.props.navigation.navigate('Attraction', {
                  name: this.props.navigation.getParam('attractionOneName'),
                  image: this.props.navigation.getParam('attractionOneImage'),
                  description: this.props.navigation.getParam(
                    'attractionOneDesc'
                  )
                })
              }
            />
            <ScrollImage
              address={this.props.navigation.getParam('attractionTwoImage')}
              label={this.props.navigation.getParam('attractionTwoName')}
              handleClick={() =>
                this.props.navigation.navigate('Attraction', {
                  name: this.props.navigation.getParam('attractionTwoName'),
                  image: this.props.navigation.getParam('attractionTwoImage'),
                  description: this.props.navigation.getParam(
                    'attractionTwoDesc'
                  )
                })
              }
            />
            <ScrollImage
              address={this.props.navigation.getParam('attractionThreeImage')}
              label={this.props.navigation.getParam('attractionThreeName')}
              handleClick={() =>
                this.props.navigation.navigate('Attraction', {
                  name: this.props.navigation.getParam('attractionThreeName'),
                  image: this.props.navigation.getParam('attractionThreeImage'),
                  description: this.props.navigation.getParam(
                    'attractionThreeDesc'
                  )
                })
              }
            />
          </ScrollView>
          <Text style={styles.subheading}>Interesting Facts</Text>
          <Text style={[styles.para, { marginBottom: 20 }]}>
            {this.props.navigation.getParam('misc')}
          </Text>
        </ScrollView>
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
  subheading: {
    fontSize: 20,
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 20
  },
  para: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: '200'
  },
  imageContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    height: width * 0.6,
    width: width - 40,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  italics: {
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 10
  },
  label: {
    borderWidth: 1,
    borderRadius: 5
  },
  imageText: {
    position: 'absolute',
    top: 10,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  }
})
