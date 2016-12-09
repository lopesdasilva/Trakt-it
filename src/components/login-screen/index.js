'use strict';
import React, {Component} from 'react';
import Utils from '../../services/Utils'
import TraktApi from '../../services/TraktApi'
import ReactNative, {
    View,
    Navigator,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Linking,
    Platform,
    AsyncStorage
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var STORAGE_KEY = '@TraktBeta:access_token';

function performLogin() {
    var url = "https://api.trakt.tv/oauth/authorize?response_type=code&client_id=c47b9ef0b13af4abe0ab8410e4c44b9a34387dd78a95f6d891bef9861fa42c1b&redirect_uri=traktoauth://traktlogin";

    Linking.openURL(url).catch(err => console.error('An error occurred', err));

}
function newUserRegistration() {
    var url = "https://trakt.tv/auth/join";
    Linking.openURL(url).catch(err => console.error('An error occurred', err));

}

module.exports = React.createClass({
    async _loadInitialState() {
        try {
            const code = await AsyncStorage.getItem(STORAGE_KEY);
            if (code) {
                TraktApi.access_token = code;
                this.props.navigator.replace({name: 'trendingShows'});
            } else {
                this._setDeepLink();
            }
        } catch (error) {
            console.log(error);
        }
    },
    _setDeepLink() {
        Linking.getInitialURL().then(async function (url) {
            if (url) {
                try {
                    const code = Utils.getParameterFromUrl(url, 'code');
                    await AsyncStorage.setItem(STORAGE_KEY, code);
                    //TODO: This should be in a method (duplicated code)
                    if (code) {
                        TraktApi.access_token = code;
                        this.props.navigator.replace({name: 'trendingShows'});
                    } else {
                        alert("Error Message");
                    }
                } catch (error) {
                    console.log(error);
                }
                //                 this.props.navigator.push({name: 'trendingShows'})
                //                 //const route = url.replace(/.*?:\/\//g, "");
                //                 //this._navigator.replace(this.state.routes[route]);
            }
        });
        if (Platform.OS === 'ios') {
            Linking.addEventListener('url', this.handleDeepLink);
        }
    },
    componentWillMount: () => {
    },
    componentDidMount() {
        this._loadInitialState();
    },
    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleDeepLink);
    },

    handleDeepLink(e) {
        console.log(e);
        //   const route = e.url.replace(/.*?:\/\//g, "");
        // this._navigator.replace(this.state.routes[route]);
    },
    getInitialState: () => {
        return {
            username: '',
            password: ''
        }
    },

    render: function () {
        return (
            <View style={styles.container}>
                <Image style={styles.bg}
                       source={{uri: 'https://trakt.tv/assets/main/hero-media-centers-901bdfdbe7aa2e7d4385edc3654903ba.jpg.webp'}}/>
                <View style={styles.header}>
                    <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}}/>
                </View>
                <TouchableHighlight onPress={() => {
                    performLogin();
                    //this.props.navigator.push({name: 'trendingShows'})
                }}>
                    <View style={styles.signin}>
                        <Text style={styles.whiteFont}>Sign In</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.signup} onPress={() => {
                    newUserRegistration();
                }}>
                    <Text style={styles.greyFont}>New to Trakt.tv?<Text style={styles.whiteFont}> Join now</Text></Text>
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#c61017',
        borderColor: '#a50d13',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
        marginLeft: 15,
        width: 20,
        height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
})
