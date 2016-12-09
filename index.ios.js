/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

let TraktApp = require('./src/TraktApp');

class Trakt extends Component {
  render() {
    return (
        <TraktApp>
        </TraktApp>
    );
  }
}

AppRegistry.registerComponent('TraktBeta', () => Trakt);
