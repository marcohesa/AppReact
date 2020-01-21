import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Alert, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");


export default class NuevoPartido extends Component {

  static navigationOptions = {
    title: 'Nueva Partido',
    headerStyle: {
      backgroundColor: '#00B6B9',
    }
  };

  state = {
    coalicion: '',
  }
  

  componentDidMount() {
    db.transaction(tx => {
      // tx.executeSql('DROP TABLE IF EXISTS encuestas');
      tx.executeSql(
        "create table if not exists partidos (id integer primary key not null, coalicion text);"
      );
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.text}>Ingresa el partido o la coalición</Text>
            <View  style={styles.input}>
              <TextInput
               
                onChangeText={coalicion => this.setState({coalicion})}
                value={this.state.coalicion}
              />
            </View>

            
            <View style={styles.buttonStyle}>
              <Button
                title="Guardar"
                color="#00B6B9"
                onPress={ e => {
                  e.preventDefault();
                  navigate('Partidos_Inicio');
                  const {coalicion} = this.state;
                  // const anio = Number(this.state.anio);
                  // const edad = Number(this.state.edad);

                  db.transaction(
                    tx => {
                      tx.executeSql("insert into partidos (coalicion) values (?)", [coalicion]); 
                      tx.executeSql("select * from partidos", [], (_, { rows }) =>
                        console.log(JSON.stringify(rows))
                      );
                    },
                    Alert.alert('¡Partido guardado!'),
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