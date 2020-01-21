import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Alert, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");


export default class NuevaEncuesta extends Component {

  static navigationOptions = {
    title: 'Nueva encuesta',
    headerStyle: {
      backgroundColor: '#00B6B9',
    }
  };

  state = {
    entidad: '',
    sexo: '',
    credencial: '',
    inicio_gobierno: '',
    problema_municipio: '', 
    trabajo_presidente: '', 
    proximo_presidente: '',
    caracteristica_proximo_presidente: '',
    posible_candidato: '',
    coptions: [],
    poptions: []
  }
  
 
  componentDidMount() {
    db.transaction(tx => {
      // tx.executeSql('DROP TABLE IF EXISTS encuestas');
      tx.executeSql(
        "create table if not exists encuestas (id integer primary key not null, entidad text, sexo text, credencial text, inicio_gobierno text, problema_municipio text, trabajo_presidente text, proximo_presidente text, caracteristica_proximo_presidente text, posible_candidato text);"
      );
    });

    db.transaction(tx => {
            
    tx.executeSql('select * from candidatos', [], (_, { rows }) => {
      const templateData = rows._array;
      this.setState({ coptions: templateData, isLoading: false }, () => console.log(this.state.coptions))
    });
    },
      error => {
        alert('El catalogo de candidatos o partidos esta vacio!');
      },
      () => console.log(this.state.coptions)
    );

    db.transaction(tx => {
            
      tx.executeSql('select * from partidos', [], (_, { rows }) => {
        const templateData = rows._array;
        this.setState({ poptions: templateData, isLoading: false }, () => console.log(this.state.poptions))
      });
      },
        error => {
          alert('El catalogo de candidatos o partidos esta vacio!');
        },
        () => console.log(this.state.poptions)
      );

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ScrollView>
        
          <View style={styles.container}>
            <Text style={styles.text}>Entidad</Text>
            <View  style={styles.input}>
            
              <Picker 
                selectedValue={this.state.entidad}
                onValueChange={
                (itemValue, itemIndex) => this.setState({
                    entidad: itemValue, 
                    choosenindex:itemIndex})
                }
                > 
                <Picker.Item label = "Selecciona una respuesta" value = "" />
                  {
                    this.state.poptions.map(poption =>
                <Picker.Item key={poption.id} label = {poption.coalicion}  value = {poption.coalicion} />
                    )
                  }
              </Picker>
          
            </View>
  
            
            {/* <Text style={styles.text}>Entidad</Text>
            <View  style={styles.input}>
              <Picker 
                selectedValue={this.state.entidad}
                onValueChange={
                (itemValue, itemIndex) => this.setState({
                    entidad: itemValue, 
                    choosenindex:itemIndex})
                }> 
                <Picker.Item label = "Selecciona una respuesta" value = "" />
                <Picker.Item label = "Catemaco" value = "Catemaco" />
                <Picker.Item label = "La victoria" value = "La victoria" />
                <Picker.Item label = "Zapopan" value = "Zapopan" />
                <Picker.Item label = "Sontecomapan" value = "Sontecomapan" />
                <Picker.Item label = "San juan seco de valencia" value = "San juan seco de valencia" />
              </Picker>
            </View> */}

            <Text style={styles.text}>Sexo</Text>
            <View  style={styles.input}>
              <Picker 
                selectedValue={this.state.sexo}
                onValueChange={
                (itemValue, itemIndex) => this.setState({
                    sexo: itemValue, 
                    choosenindex:itemIndex})
                }>
                <Picker.Item label = "Selecciona una respuesta" value = "" />
                <Picker.Item label = "Hombre" value = "Hombre" />
                <Picker.Item label = "Mujer" value = "Mujer" />
              </Picker>
            </View>

            <Text style={styles.text}>¿Actualmente cuenta con credencial para votar?</Text>
            <View  style={styles.input}>
              <Picker 
            
                selectedValue={this.state.credencial}
                onValueChange={
                (itemValue, itemIndex) => this.setState({
                    credencial: itemValue, 
                    choosenindex:itemIndex})
                }>
                <Picker.Item label = "Selecciona una respuesta" value = "" />
                <Picker.Item label = "Si" value = "Si" />
                <Picker.Item label = "No" value = "No" />
              </Picker>
            </View>

            <Text style={styles.text}>¿Cómo considera el inicio del Gobierno de Variable1 ?</Text>
            <View  style={styles.input}>
              <Picker 
             
                selectedValue={this.state.inicio_gobierno}
                onValueChange={
                (itemValue, itemIndex) => this.setState({
                    inicio_gobierno: itemValue, 
                    choosenindex:itemIndex})
                }>
                <Picker.Item label = "Selecciona una respuesta" value = "" />
                <Picker.Item label = "Muy bueno" value = "Muy bueno" />
                <Picker.Item label = "Regular" value = "Regular" />
                <Picker.Item label = "Malo" value = "Malo" />
                <Picker.Item label = "NC/NS" value = "NC/NS" />
              </Picker>
            </View>

            <Text style={styles.text}>¿Cuál considera que es el principal problema que enfrentan en el Municipio?</Text>
            <View  style={styles.input}>
              <Picker 
            
                selectedValue={this.state.problema_municipio}
                onValueChange={
                (itemValue, itemIndex) => this.setState({
                  problema_municipio: itemValue, 
                    choosenindex:itemIndex})
                }>
                <Picker.Item label = "Selecciona una respuesta" value = "" />
                <Picker.Item label = "Corrupción" value = "Corrupcion" />
                <Picker.Item label = "Violencia" value = "Violencia" />
              </Picker>
            </View>
            
            <Text style={styles.text}>¿Cómo califica el trabajo que desarrolla su Presidente Municipal variable2 ?</Text>
            <View  style={styles.input}>
              <Picker 
              
              selectedValue={this.state.trabajo_presidente}
              onValueChange={
              (itemValue, itemIndex) => this.setState({
                  trabajo_presidente: itemValue, 
                  choosenindex:itemIndex})
              }>
              <Picker.Item label = "Selecciona una respuesta" value = "" />
              <Picker.Item label = "Muy bueno" value = "Muy bueno" />
              <Picker.Item label = "Regular" value = "Regular" />
              <Picker.Item label = "Malo" value = "Malo" />
              <Picker.Item label = "NC/NS" value = "NC/NS" />
            </Picker>
            </View>

            <Text style={styles.text}>¿A usted quién le gustaría que fuera el próximo Presidente Municipal de variable3 ?</Text>
            <View  style={styles.input}>
              <TextInput
               
                onChangeText={proximo_presidente => this.setState({proximo_presidente})}
                value={this.state.proximo_presidente}
              />
            </View>

            <Text style={styles.text}>¿Cuál es la principal característica que considera usted, debe tener el próximo Presidente Municipal Variable3?</Text>
            <View style={styles.input}>
              <TextInput
                
                onChangeText={caracteristica_proximo_presidente => this.setState({caracteristica_proximo_presidente})}
                value={this.state.caracteristica_proximo_presidente}
              />
            </View>

            <Text style={styles.text}>¿Usted votaría por el posible Candidato independiente variable4 ?</Text>
            <View  style={styles.input}>
              <Picker 
             
              selectedValue={this.state.posible_candidato}
              onValueChange={
              (itemValue, itemIndex) => this.setState({
                posible_candidato: itemValue, 
                  choosenindex:itemIndex})
              }>
              <Picker.Item label = "Selecciona una respuesta" value = "" />
              <Picker.Item label = "Si votaría" value = "Si votaría" />
              <Picker.Item label = "Nunca Votaría" value = "Nunca Votaría" />
              <Picker.Item label = "Probablemente" value = "Probablemente" />
              <Picker.Item label = "NC/NS" value = "NC/NS" />
            </Picker>  
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="Guardar"
                color="#00B6B9"
                onPress={ e => {
                  e.preventDefault();
                  navigate('Encuesta_Inicio');
                  const {entidad, sexo, credencial, inicio_gobierno, problema_municipio, trabajo_presidente, proximo_presidente, caracteristica_proximo_presidente, posible_candidato} = this.state;
                  // const anio = Number(this.state.anio);
                  // const edad = Number(this.state.edad);

                  db.transaction(
                    tx => {
                      tx.executeSql("insert into encuestas (entidad, sexo, credencial, inicio_gobierno, problema_municipio, trabajo_presidente, proximo_presidente, caracteristica_proximo_presidente, posible_candidato) values (?, ?, ?, ?, ?, ?, ?, ?, ?)", [entidad, sexo, credencial, inicio_gobierno, problema_municipio, trabajo_presidente, proximo_presidente, caracteristica_proximo_presidente, posible_candidato ]); 
                      tx.executeSql("select * from encuestas", [], (_, { rows }) =>
                        console.log(JSON.stringify(rows))
                      );
                    },
                    Alert.alert('¡Encuesta guardada!'),
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