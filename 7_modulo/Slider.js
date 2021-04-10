//Slider
//props -> minimumValue={0}
//          maximumValue={100}

import React, {Component} from 'react';
import{ 
  Text,
  View,
  StyleSheet
 }from 'react-native';

//import Slider
import Slider from '@react-native-community/slider';


export default class Slider extends Component{  
  constructor(props){
    super(props);
    this.state = {
      valor: 50,
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange ={(valorSelecionado)=> this.setState({valor:valorSelecionado})}
          value = {this.state.valor}
          minimumTrackTintColor = 'green'
          maximumTrackTintColor = 'red'
          thumbTintColor = 'black'
        />
        <Text style={styles.textoSlider}>Valor: {this.state.valor.toFixed(0)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   marginTop:20,
 },
 textoSlider:{
   textAlign:'center',
   fontSize: 30,
   color: 'blue',
 }
});
