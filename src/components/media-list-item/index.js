/* Imports */
import React, { Component } from 'react';

import ReactNative, {
    StyleSheet,
    View,
    ToolbarAndroid,
    TouchableOpacity,
    Text
} from 'react-native';

var ResponsiveImage = require('react-native-responsive-image');

module.exports = React.createClass({

    render(){
        return(
            <TouchableOpacity style={styles.rowContainer} onPress={this.props.onPress}>
                { this.renderImage(this.props.rowData) }
                <View style={styles.rowDataContainer}>
                    <Text>{this.props.rowData.title}</Text>
                    <Text>{this.props.rowData.year}</Text>
                    <Text>{this.props.rowData.rating} stars</Text>
                </View>
            </TouchableOpacity>
        )
    },


    /* Render do Thumb s*/
    renderImage(rowData){
        var urlString = rowData.images.poster.thumb;
        return(
            <ResponsiveImage initWidth= "80" initHeight="120" source={{uri:urlString}}/>
        )
    }

});


/*
 * ESTILOS
 */

const STICKY_HEADER_HEIGHT =  56;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowDataContainer: {
        justifyContent:'center',
        marginLeft: 10,
    },
    rowContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    }
});
