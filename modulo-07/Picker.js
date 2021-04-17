//Picker -> items para selecionar
// instalar: npm install @react-native-picker/picker​ na pasta do projeto

import React, {Component} from 'react';
import{ 
  Text,
  View,
  StyleSheet
 }from 'react-native';

//import picker
import {Picker} from '@react-native-picker/picker';

export default class Picker extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome:"Calabresa", valor: 30.9},
        {key: 2, nome:"Carne", valor: 32},
        {key: 3, nome:"Queijo", valor: 36},
        {key: 4, nome:"Mista", valor: 35},
        {key: 5, nome:"Portuguesa", valor: 10},
        {key: 6, nome:"Baiana", valor: 20},
      ]
    };
  };
  
  render(){
    //acessar de forma dinâmica a lista de pizzas
    let pizzaItem = this.state.pizzas.map((v,k)=> {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        
        <Picker
          selectedValue = {this.state.pizza}
          onValueChange = {(itemValue, intemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzaItem}
        </Picker>

        <Text style={styles.pizzas}>Você esscolheu: Pizza {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>Valor: R${this.state.pizzas[this.state.pizza].valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
  },
  logo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pizzas:{
    marginTop:15,
    fontSize:20,
  }
});
