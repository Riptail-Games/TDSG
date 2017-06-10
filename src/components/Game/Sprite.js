import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Loop, Stage, World, Body, Sprite } from 'react-game-kit';


//https://github.com/FormidableLabs/react-game-kit
class Sprite extends Component {
    render() {
        return (
            <Sprite
                repeat={true}
                src="assets/character-sprite.png"
                scale={this.context.scale * 2}
                state={0}
                steps={[9, 9, 0, 4, 5]}
            />
        );
    }
}

// The Loop component acts much like a Redux provider, 
// in that it passes a GameLoop instance down the component
// tree via this.context.loop.

// This allows you to subscribe and unsubscribe to the main
// game loop anywhere in your component tree. Here is an
// example of how this would generally look:

// class ChildComponent extends Component {
//   static contextTypes = {
//     loop: PropTypes.object,
//   };
	
//   update = () => {
//     // tick logic
//   };
	
//   componentDidMount() {
//     this.context.loop.subscribe(this.update);
//   }
	
//   componentWillUnmount() {
//     this.context.loop.unsubscribe(this.update);
//   }
// }