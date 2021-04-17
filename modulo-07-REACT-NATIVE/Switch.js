//Switch - caixinha de seleção
import React, {Component} from 'react';
import{ 
  Text,
  View,
  StyleSheet,
  Switch
 }from 'react-native';


export default class Switch extends Component{  
  constructor(props){
    super(props);
    this.state = {
      valor: false
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Switch
          value={this.state.valor}
          onValueChange={(valorSelecionado)=> this.setState({valor: valorSelecionado})}
          thumbColor = '#ff0000'
        />
        <Text style={styles.texto}>
          {(this.state.valor)? "Ativado":"Desativado"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   marginTop:20,
 },
 texto:{
   fontSize: 30,
   textAlign: 'center'
 }
});
