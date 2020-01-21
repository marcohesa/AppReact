
import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, SafeAreaView, Alert } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, Mutation, graphql } from 'react-apollo';
import {NUEVA_ENCUESTA} from '../../mutations'
import * as SQLite from 'expo-sqlite';


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.137.1:3000/graphql',
  }),
  cache: new InMemoryCache()
});

export default class Inicio extends React.Component {
  NuevaEncuesta = () => {
    this.props.navigation.navigate('NuevaEncuesta')
  }
  Encuestas = () => {
    this.props.navigation.navigate('Encuestas')
  }
  EditarPreguntas = () => {
    this.props.navigation.navigate('EditarPreguntas')
  }
  

    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Editar preguntas"
              buttonStyle={{color: 'red', marginTop: 10, padding: 10}}
              onPress={this.EditarPreguntas}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Nueva encuesta"
              buttonStyle={{color: 'red', marginTop: 10, padding: 10}}
              onPress={this.NuevaEncuesta}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Encuestas registradas"
              onPress={this.Encuestas}
            />
          </View>
            <ApolloProvider client={client}>
            <Fragment>
              <Mutation mutation={NUEVA_ENCUESTA}>
                { crearEncuesta => (
                  <View style={styles.buttonStyle}>
                    <Button
                    color="#00B6B9"
                    title="Enviar servidor"
                      onPress={ e => {
                        e.preventDefault();
                        
                        const db = SQLite.openDatabase("db.db");

                        db.transaction(
                          tx => {
                            tx.executeSql("select * from encuestas", [], (_, { rows }) => {
                              
                              crearEncuesta({
                              variables: {inputs:rows._array}
                              }) .then(data => {
                                if (data.data.crearEncuesta) { 
                                  db.transaction(tx => {
                                    tx.executeSql('DROP TABLE IF EXISTS encuestas');
                                    tx.executeSql(
                                      "create table if not exists encuestas (id integer primary key not null, entidad text, sexo text, credencial text, inicio_gobierno text, problema_municipio text, trabajo_presidente text, proximo_presidente text, caracteristica_proximo_presidente text, posible_candidato text);"
                                    );
                                    console.log(JSON.stringify(rows._array));
                                    // console.log("datos enviados");
                                    Alert.alert('¡Datos enviados al servidor!');
                                  });
                                } else Alert.alert('¡No tiene conexión al servidor!');
                              });
                            
                            }
                            );
                          },
                          null,
                          null
                        );
                        
                        
                      }}
                    />
                  </View>
                )}
              </Mutation>
              </Fragment>
            </ApolloProvider>
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