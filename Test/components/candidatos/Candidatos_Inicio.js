
import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, SafeAreaView, Alert } from 'react-native';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");


export default class Inicio extends React.Component {
  NuevoCandidato = () => {
    this.props.navigation.navigate('NuevoCandidato')
  }
  Candidatos = () => {
    this.props.navigation.navigate('Candidatos')
  }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Nueva Candidato"
              buttonStyle={{color: 'red', marginTop: 10, padding: 10}}
              onPress={this.NuevoCandidato}
            />
        </View>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Candidatos almacenados"
              onPress={this.Candidatos}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Vaciar tabla"
              onPress={ e => {
                  e.preventDefault();

                  db.transaction(
                    tx => {
                      tx.executeSql('DROP TABLE IF EXISTS candidatos');
                    },
                    Alert.alert('Candidatos borrados!'),
                    null
                  );
                }}
            />
          </View>
        </View> 
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    input: {
      marginLeft: 50,
      marginRight: 50,
    }, 
    buttonStyle: {
      width: 300,
      height: 70,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    
  });