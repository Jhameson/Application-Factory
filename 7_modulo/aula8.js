//async grava de forma assicrona

//keyboard.dimiss faz o teclado "sumir" 

import React, {Component} from 'react';
import {
  Text,
  View,
  Button, 
  StyleSheet,
  Modal,
  Platform,
  TextInput, TouchableOpacity, Keyboard
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

class Aula8 extends Component{

  constructor(props){
    super(props);
    this.state={
     input: '',
     nome: ''
    };
    this.gravarNome = this.gravarNome.bind(this);
  }
  //quando o componenete é montado em tela
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value)=>{
      this.setState({nome:value})
    })
  }
  // toda vez que um state é atualizado faz algo
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;
    if(prevState !==nome){
      await AsyncStorage.setItem('nome',nome);
    }
  }

  gravarNome(){
    this.setState({
      nome: this.state.input
    });
    Keyboard.dismiss();
  }

  render(){
    return(
      <View style={styles.container}>
       <View style={styles.viewInput}>
        <TextInput 
          style={styles.input}
          value={this.state.input}
          onChangeText={(text)=>this.setState({input:text})}
         
        />
        <TouchableOpacity onPress={this.gravarNome}>
          <Text style={styles.botao}>
            +
          </Text>
        </TouchableOpacity>
       </View>
       <Text style={styles.nome}>
         {this.state.nome}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },  
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 3
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
 
});

export default Aula8;
