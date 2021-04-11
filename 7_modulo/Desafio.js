
import React, {Component} from 'react';
import{ 
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity
 }from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class Desafio extends Component{  
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {key: 1, nomeSexo: 'Feminino'},
        {key: 2, nomeSexo: 'Masculino'}
      ],
      estudante: false,
      renda: 0
    };
    //as funções criadas devem "ter" um bind
      this.enviarDados = this.enviarDados.bind(this);

  }

//função chamada ao clicar no botão de cadastrar conta
  enviarDados(){
    if(this.state.nome === '' || this.state.idade === ''){
      alert('Por favor preencha todos os campos!');
      return;
    }

    alert("Nome: "+this.state.nome+"\nIdade: "+this.state.idade+" anos. Sexo: "+this.state.sexos[this.state.sexo].nomeSexo+
    "\nRenda: R$"+this.state.renda+
    "\nBenefício de estudante: "+((this.state.estudante? "Aplicado":"Negativo")));
  }


  render(){

    //função responsável por exibir os itens do PICKER
    let sexoItens = this.state.sexos.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.nomeSexo}/>
    });

    return(
      <View style={styles.container}>
          <View style = {styles.containerLogo}>
            <Text style = {styles.logo}>Banco React</Text>
          </View>

          <Text style = {styles.txtInfos}>Digite seu Nome Completo:</Text>
          <TextInput style = {styles.txtInput} 
                      placeholder="Ex.: João Lucas Alves"
                      onChangeText={(texto)=>this.setState({nome:texto})}/>

          <Text style = {styles.txtInfos}>Digite sua Idade:</Text>
          <TextInput style = {styles.txtInput} 
                      placeholder="Ex.: 22"
                      onChangeText={(texto)=>this.setState({idade:texto})}
                      keyboardType="numeric"/>

          <Text style = {styles.txtInfos}>Selecione seu Sexo:</Text>
          <View style={styles.areaSexo}>  
            <Picker selectedValue ={this.state.sexo}
                    onValueChange ={(itemValue, itemIndex)=>this.setState({sexo:itemValue})}>
              {sexoItens}
            </Picker>
          </View>


          <Text style = {styles.txtInfos}>Informe sua renda mensal: </Text>
          <Slider
            minimumValue= {0}
            maximumValue={5000}
            onValueChange = {(valor)=> this.setState({renda:valor})}
          />
          <Text style = {[styles.txtInfos, {textAlign: 'center'}]}>R${this.state.renda.toFixed(2)}</Text>
         
          <View style={styles.areaEstudante}>
            <Text style = {styles.txtInfos}>Estudante: </Text>
            <Switch value={this.state.estudante}
                    style={styles.swt}
                    onValueChange={(valorEstudante)=>this.setState({estudante:valorEstudante})}/>
          </View>

          <TouchableOpacity style={styles.botao} onPress={this.enviarDados} underlayColor="#000000">
              <Text style={styles.botaoTexto}>Abrir Conta</Text>
          </TouchableOpacity>

        <Text style={styles.desc}>J.Lucas Dev</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   margin: 4,
   backgroundColor: '#FF7F24'
 },
 containerLogo:{
   margin: 4,
   backgroundColor: '#FF7F24'
 },
 logo:{
   textAlign: 'center',
   fontSize: 40,
   color: '#000',
   fontStyle: 'italic',
   fontWeight: 'bold',
   marginTop: 10,
   marginBottom: 30
 },
 txtInfos:{
   marginTop: 9,
   marginLeft: 8,
   marginRight: 8,
   marginBottom: 5,
   fontSize: 19
 },
 txtInput:{
  marginTop: 2,
  marginLeft: 8,
  marginRight: 8,
  marginBottom: 5,
  borderColor: '#999999',
  backgroundColor: '#EEEEEE',
  height: 40,
  borderRadius: 9,
  fontSize: 18,
  borderWidth: 1,
 },
 botao:{
   
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 150,
  margin: 20
 },
 botaoTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
 },
 desc:{
   fontSize:12,
   textAlign: 'right', 
   marginTop: 94,
   marginRight: 8
 },
 areaSexo:{
  borderColor: '#Fff',
  borderWidth: 1,
  marginTop: 2,
  marginLeft: 8,
  marginRight: 8,
  marginBottom: 5,
  borderRadius: 9,
  fontSize: 18,
  
},
areaEstudante:{
  marginTop: 20,
  flexDirection: 'row', 
  alignItems: 'center'
},
swt:{
  marginTop: 11,
  marginLeft: 220
}
});
