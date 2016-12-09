/* Imports */
import React, { Component } from 'react';

import ReactNative, {
    StyleSheet,
    View,
    ToolbarAndroid,
} from 'react-native';

module.exports = React.createClass({

    render(){
        return(
            <View style={styles.container}>
            <ToolbarAndroid
                style={styles.header}
                titleColor='white'
                logo={require('../../assets/traktlogo.png')}
                title={this.props.title}/>
             </View>
        )
    },

});


/*
 * ESTILOS
 */

const STICKY_HEADER_HEIGHT =  56;

const styles = StyleSheet.create({
    container: {
        height: STICKY_HEADER_HEIGHT
    },
    header: {
        flex: 1,
        backgroundColor:"#607D8B"
    }
});
