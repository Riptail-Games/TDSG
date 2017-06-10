import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Loop, Stage, World, Body, Sprite, TileMap} from 'react-game-kit';

//https://github.com/FormidableLabs/react-game-kit
class TileMap extends Component {
    render() {
        return (
            <TileMap
                src="assets/boardwalktile.png"
                tileSize={128}
                columns={24}
                rows={4}
                layers={[
                    [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    ],
                ]}
            />

            // <TileMap
            //     style={{ top: Math.floor(-63 * this.context.scale) }}
            //     src="assets/buildings.png"
            //     rows={1}
            //     columns={6}
            //     tileSize={512}
            //     layers={[
            //         [1, 2, 3, 4, 5, 6],
            //     ]}
            // />

            // <TileMap
            //     src="atlas.png"
            //     columns={4}
            //     rows={2}
            //     renderTile={(tile, src, styles) => {
            //         if (tile.index === 2) {
            //             return <Body><img style={styles} src={src} /></Body>;
            //         }
            //         return <img style={styles} src={src} />;
            //     }}
            //     layers={[
            //         [
            //         0, 0, 2, 0,
            //         2, 0, 1, 1,
            //         ]
            //     ]}
            // />
        );
    }
}




