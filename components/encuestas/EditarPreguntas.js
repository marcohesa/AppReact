
import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, SafeAreaView, Alert } from 'react-native';


export default class EditarPreguntas extends React.Component {
  static navigationOptions = {
    title: 'Editar Preguntas',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
  };

  constructor(props){
    super(props)
    this.state = {
      pregunta : ''
    }
  }

  myChangeHandler = (pregunta) => {
    this.setState({pregunta});
  }

    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.text}>
          <Text> {this.state.pregunta} </Text>
          <TextInput
          style={styles.buttonStyle}
          onChangeText={this.myChangeHandler}
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