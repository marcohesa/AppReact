import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Alert, ScrollView } from 'react-native';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");


export default class Encuestas extends React.Component {

  static navigationOptions = {
    title: 'Encuestas almacenadas',
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
            title="Mostrar encuestas"
            color="#00B6B9"
          
            onPress={ e => {

              e.preventDefault();
              
              db.transaction(tx => {
               
                tx.executeSql('select * from encuestas', [], (_, { rows }) => {
                  const templateData = rows._array;
                  this.setState({ options: templateData, isLoading: false }, () => console.log(this.state.options))
                });
              },
                error => {
                  alert(error);
                },
                () => console.log(this.state.options)
              );
              
              
            }}
          />
        </View>
        <View style={styles.container}>
        
          {
            this.state.options.map(option =><Text key={option.id} style={styles.text}> No. {option.id} {"\n\n"} Lugar: {option.entidad} {"\n\n"} Sexo: {option.sexo} {"\n\n"} Tiene credencial: {option.credencial} {"\n\n"} Inicio de gobierno: {option.inicio_gobierno} {"\n\n"} Problema de municipio: {option.problema_municipio} {"\n\n"}  Trabajo del presidente: {option.trabajo_presidente} {"\n\n"} Proximo presidente: {option.proximo_presidente} {"\n\n"} Caracteristica  del proximo presidente: {option.caracteristica_proximo_presidente} {"\n\n"} Posible candidato: {option.posible_candidato}</Text> )
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
    height: 400,
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