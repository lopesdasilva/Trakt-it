/* Imports */
import React, { Component } from 'react';

import ReactNative, {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

module.exports = React.createClass({

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/traktlogo.png')}
                    />
                    <Text style={styles.titleText}>{this.props.title}</Text>
                </View>
             </View>
        )
    },

});


/*
 * ESTILOS
 */

const STICKY_HEADER_HEIGHT =  60;

const styles = StyleSheet.create({
    container: {
        height: STICKY_HEADER_HEIGHT
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:"#607D8B",
        alignItems:'center',
        justifyContent:'center'
    },
    titleText: {
        color:'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop:10,
        marginRight: 10
    },
    image: {
        marginTop: 10,
        marginRight: 10
    }
});
