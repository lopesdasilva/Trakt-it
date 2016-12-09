'use strict';
import React, {Component} from 'react';
import ReactNative, {View, Navigator, Image, Text, TextInput, StyleSheet, TouchableHighlight} from 'react-native';

function traktOAuth (app_key)
{
    var url = Linking.getInitialURL().then((url) => {
        if (url) {
            console.log('Initial url is: ' + url);
        }
    }).catch(err => console.error('An error occurred', err));
    LinkingIOS.openURL(["https://api.trakt.tv/oauth/authorize","?response_type=code","&client_id=" + app_key,
        "&redirect_uri=oauth2example://foo"
    ].join(""))
}
module.exports = React.createClass({
    getInitialState: function () {
        return "";
    },
    componentDidMount(){
        var client_id="c47b9ef0b13af4abe0ab8410e4c44b9a34387dd78a95f6d891bef9861fa42c1b";
        traktOAuth(client_id);

    },
    render: function () {
        return  "";
    }
});