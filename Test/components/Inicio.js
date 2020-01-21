
import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, SafeAreaView, Alert, ImageBackground} from 'react-native';


export default class Inicio extends React.Component {
  
  EncuestaInicio = () => {
    this.props.navigation.navigate('Encuesta_Inicio')
  }
  PartidosInicio = () => {
    this.props.navigation.navigate('Partidos_Inicio')
  }
  CandidatosInicio = () => {
    this.props.navigation.navigate('Candidatos_Inicio')
  }

    render() {
        const {navigate} = this.props.navigation;
      return (
        <ImageBackground source={require('../imagenes/fondo3.jpg')} style={styles.container} >
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Candidatos"
              buttonStyle={{color: 'red', marginTop: 10, padding: 10}}
              onPress={this.CandidatosInicio}
            />
        </View>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Partidos"
              buttonStyle={{color: 'red', marginTop: 10, padding: 10}}
              onPress={this.PartidosInicio}
            />
        </View>
          <View style={styles.buttonStyle}>
            <Button
              color="#00B6B9"
              title="Encuestas"
              onPress={this.EncuestaInicio}
            />
          </View>
        </ImageBackground> 
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF'
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