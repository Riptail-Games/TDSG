import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../../src/components/Home/Home';

//Allows navigation between screens
//URL: https://reactnavigation.org/docs/intro/

export const App = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
});