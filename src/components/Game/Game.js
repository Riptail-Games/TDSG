import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Loop, Stage, World, Body, Sprite } from 'react-game-kit/native';

//https://github.com/FormidableLabs/react-game-kit
export default class Game extends Component {

    constructor(props) {
        super(props);
        //this.onNavigate = this.onNavigate.bind(this)
    }

    // onNavigate() {
    //     console.log("Parent Class");
    //     this.props.navigation.navigate('Map');
    // }

    render() {
        return (
            <Loop>
                <Stage width={1024} height={576}>
                    {/*Game specific components go here*/}
                    <World>
                        <Body args={[0,0,75,75]} ref={(b) => this.body = b.body }>
                            
                        </Body>
                    </World>
                </Stage>
            </Loop>
        );
    }

    getImageStyles() {
        const scaledWidth = Math.round(this.props.width * this.context.scale);

        return {
            width: scaledWidth,
            imageRendering: 'pixelated'
        };
    }

    getWrapperStyles() {
        const x = Math.round(this.state.x * this.context.scale);

        return {
            position: 'absolute',
            transform: `translate(${x}px, 0px) translateZ(0)`,
            transformOrigin: 'top left',
        };
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