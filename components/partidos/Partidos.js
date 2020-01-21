import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Alert, ScrollView } from 'react-native';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");


export default class Partidos extends React.Component {

  static navigationOptions = {
    title: 'Partidos almacenados',
    headerStyle: {
      backgroundColor: '#00B6B9',
    }
  };

  state = {
    options: []
  }
    
  render() {

    const {navigate} = this.props.navigation;

    return (
      <ScrollView>
        <View>
          <Button
            title="Mostrar partidos"
            color="#00B6B9"
          
            onPress={ e => {

              e.preventDefault();
              
              db.transaction(tx => {
               
                tx.executeSql('select * from partidos', [], (_, { rows }) => {
                  const templateData = rows._array;
                  this.setState({ options: templateData, isLoading: false }, () => console.log(this.state.options))
                });
              },
                error => {
                  alert('¡No hay partidos para mostrar!');
                },
                () => console.log(this.state.options)
              );
              
              
            }}
          />
        </View>
        <View style={styles.container}>
        
          {
            this.state.options.map(option =><Text key={option.id} style={styles.text}> {option.coalicion} </Text> )
          }
      </View>        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    color: 'black',
    backgroundColor: '#ffffff',
    width: 300,
    height: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    
  },
  
});