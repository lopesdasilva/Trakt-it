import React, {Component} from 'react';
import ReactNative, {View, Navigator, Platform, StatusBar, BackAndroid} from 'react-native';

var TrendingMovies = require('./components/trending-movies');
var TrendingShows = require('./components/trending-shows');
var LoginScreen = require('./components/login-screen');
var Detail = require('./components/detail');

var SCENE_CONFIG = Platform.OS === 'ios' ? Navigator.SceneConfigs.PushFromRight : Navigator.SceneConfigs.FadeAndroid;

var ROUTES = {
    trendingMovies: TrendingMovies,
    trendingShows: TrendingShows,
    loginScreen: LoginScreen,
    detail: Detail,
};

var PhotospotApp = React.createClass({
    componentDidMount: function () {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    },

    componentWillUnmount: function () {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
    },

    handleBackButton: function () {
        const {navigator} = this.refs;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    },

    renderScene: function (route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator}/>;
    },

    render: function () {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#171c1c"
                    barStyle="light-content"
                />
                <Navigator
                    ref="navigator"
                    initialRoute={{name: 'loginScreen'}}
                    renderScene={this.renderScene}
                    configureScene={(route) => {
                        return SCENE_CONFIG
                    }}
                />
            </View>
        );
    }
});

module.exports = PhotospotApp;
