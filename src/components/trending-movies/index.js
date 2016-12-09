/* Components */
import React, { Component } from 'react';
import MoviesApi from '../../services/movies/MoviesApi'


import ReactNative, {
   StyleSheet,
   View,
   ListView,
   ActivityIndicator,
 } from 'react-native';

 let ResponsiveImage = require('react-native-responsive-image');
 let Header = require('../header');
 let MediaListItem = require('../media-list-item');


/* Constants */
var DATASOURCE_MANAGER;

module.exports = React.createClass({

  getInitialState(){
    DATASOURCE_MANAGER = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return{

      };
  },

  componentDidMount(){
    MoviesApi.getTrendingMovies().then((jsonResponse) => {
        let moviesJson = jsonResponse;
        this.setState({
            dataSource : DATASOURCE_MANAGER.cloneWithRows(moviesJson),
            hasMovies: moviesJson.length > 0
        });
    });
  },

  /* Verifica se ha filmes na lista para parar de apresentar o activity indicator*/
  hasEnoughData() {
    return this.state.dataSource && this.state.hasMovies;
  },

  /* Renderizacao do view completo */
  render() {
    return (
        <View style={styles.container}>
          <Header title="Movies"/>
          { this.renderMoviesList() }
        </View>
    )
  },

  /* Renderizacao da lista*/
  renderMoviesList(){
    if(this.hasEnoughData()){
      return(
        <ListView
          ref="ListView"
          dataSource={ this.state.dataSource }
          renderSeparator={(sectionID, rowID) => <View key={`separator-${rowID}`}/>}
          renderRow={(rowData) => (
            <MediaListItem rowData={rowData.movie} watchers={rowData.watchers} onPress={() => {this.props.navigator.push({name: 'detail', data: rowData.movie})}}/>
           )}
        />
      );
    }else{
      if(!this.hasEnoughData()){
        return(
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
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
