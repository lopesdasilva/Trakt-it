/* Components */
import React, {Component} from 'react';
import ShowsApi from '../../services/shows/ShowsApi'
import {Container, Header, Title, Content} from 'native-base';


import ReactNative, {
    StyleSheet,
    View,
    ListView,
    ActivityIndicator,
} from 'react-native';

let ResponsiveImage = require('react-native-responsive-image');
let MediaListItem = require('../media-list-item');


/* Constants */
var DATASOURCE_MANAGER;

module.exports = React.createClass({

    getInitialState(){
        DATASOURCE_MANAGER = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {};
    },

    componentDidMount(){
        ShowsApi.getTrendingShows().then((jsonResponse) => {
            let showsJson = jsonResponse;
            this.setState({
                dataSource: DATASOURCE_MANAGER.cloneWithRows(showsJson),
                hasShows: showsJson.length > 0
            });
        });
    },


    /* Verifica se ha filmes na lista para parar de apresentar o activity indicator*/
    hasEnoughData() {
        return this.state.dataSource && this.state.hasShows;
    },

    /* Renderizacao do view completo */
    render() {
        return (
            <Container>
                <Header>
                    <Title>Trendig Shows</Title>
                </Header>
                <Content>
                    <View style={styles.container}>
                        { this.renderShowsList() }
                    </View>
                </Content>
            </Container>
        )
    },

    /* Renderizacao da lista*/
    renderShowsList(){
        if (this.hasEnoughData()) {
            return (
                <ListView
                    ref="ListView"
                    dataSource={ this.state.dataSource }
                    renderSeparator={(sectionID, rowID) => <View key={`separator-${rowID}`}/>}
                    renderRow={(rowData) => (
                        <MediaListItem rowData={rowData.show} onPress={() => {
                            this.props.navigator.push({name: 'detail', data: rowData.show})
                        }}/>
                    )}
                />
            );
        } else {
            if (!this.hasEnoughData()) {
                return (
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator size="large"/>
                    </View>
                );
            }
        }
    },

});


/*
 * ESTILOS
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE'
    }
});
