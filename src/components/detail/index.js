/* Components */
import React, { Component } from 'react';
import { Container, Header, Title, Content, Card, CardItem, Icon, Button } from 'native-base';

import ReactNative, {
    StyleSheet,
    View,
    Text,
    ListView,
    Image
} from 'react-native';

var ResponsiveImage = require('react-native-responsive-image');

/* Constants */

import Dimensions from 'Dimensions';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

module.exports = React.createClass({

    getInitialState(){
        console.log(this.props.navigator.navigationContext.currentRoute.data);
        return{
            data: this.props.navigator.navigationContext.currentRoute.data
        };
    },

    /* Renderizacao do view completo */
    render() {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={() => {this.props.navigator.pop()}}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    <Title>{this.state.data.title}</Title>
                </Header>
                <Content>

                    <View>
                        { this.renderDetail() }
                    </View>
                </Content>
            </Container>
        )
    },

    /* Renderizacao do detalhe*/
    renderDetail(){
        return(
            <CardItem cardBody>
                <Image style={{ resizeMode: 'cover' }} source={{uri: this.state.data.images.fanart.full,
                    initWidth: windowWidth,
                    initHeight: windowHeight/3}} />
                <Text>
                    {this.state.data.title}
                </Text>
                <Button transparent textStyle={{color: '#87838B'}}>
                    <Text>{this.state.data.rating} Stars</Text>
                </Button>
            </CardItem>
        );
    },

});


/*
 * ESTILOS
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE'
    },
    imageContainer: {
        flex: 1,
        backgroundColor: '#EEE'
    },
    detailContainer: {
        flex: 3,
        backgroundColor: '#EEE'
    }
});
