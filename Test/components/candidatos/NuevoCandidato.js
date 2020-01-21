import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Alert, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");


export default class NuevoCandidato extends Component {

  static navigationOptions = {
    title: 'Nueva Candidato',
    headerStyle: {
      backgroundColor: '#00B6B9',
    }
  };

  state = {
    nombre_completo: '',
  }
  

  componentDidMount() {
    db.transaction(tx => {
      // tx.executeSql('DROP TABLE IF EXISTS encuestas');
      tx.executeSql(
        "create table if not exists candidatos (id integer primary key not null, nombre_completo text);"
      );
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.text}>Ingresa el nombre del candidato</Text>
            <View  style={styles.input}>
              <TextInput
               
                onChangeText={nombre_completo => this.setState({nombre_completo})}
                value={this.state.nombre_completo}
              />
            </View>

            
            <View style={styles.buttonStyle}>
              <Button
                title="Guardar"
                color="#00B6B9"
                onPress={ e => {
                  e.preventDefault();
                  navigate('Candidatos_Inicio');
                  const {nombre_completo} = this.state;
                  // const anio = Number(this.state.anio);
                  // const edad = Number(this.state.edad);

                  db.transaction(
                    tx => {
                      tx.executeSql("insert into candidatos (nombre_completo) values (?)", [nombre_completo]); 
                      tx.executeSql("select * from candidatos", [], (_, { rows }) =>
                        console.log(JSON.stringify(rows))
                      );
                    },
                    Alert.alert('Candidato registrado!'),
                    null
                  );
                }}
              /> 
            </View> 
          </View>
        </ScrollView>
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
  text: {
    fontSize: 20,
    textAlign: 'justify',
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 250,
    height: 50,
  }, 
  buttonStyle: {
    margin: 30,
    width: 300,
    height: 70,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});