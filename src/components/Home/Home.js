import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        //this.onNavigate = this.onNavigate.bind(this)
    }

    // onNavigate() {
    //     console.log("Parent Class");
    //     this.props.navigation.navigate('Map');
    // }

  render() {
      //const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('../../images/tower.jpg')}
        />
        <Text style={styles.welcome}>
          Welcome to TDSG!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>


      //Example for navigation:
      //<Child nav={this.onNavigate} />
    );
  }
}


//Colors: http://www.flatuicolorpicker.com/category/gray
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //vertical alignment
    alignItems: 'center', //horizontal alignment
    backgroundColor: '#6C7A89',
  },
  welcome: {
    color: '#EEEEEE',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: '600'
  },
  instructions: {
    textAlign: 'center',
    color: '#EEEEEE',
    marginBottom: 5,
    padding: 10
  },
  logo: {
    width: 200,
    height: 200
  }
});