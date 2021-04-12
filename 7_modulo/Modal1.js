import React, {Component} from 'react';
import {
  Text,
  View,
  Button, 
  StyleSheet,
  Modal,
  Platform
} from 'react-native';

import Modal2 from './Modal2';

class Modal1 extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible: false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(){
    this.setState({modalVisible:true});
  }
  sair(visible){
    this.setState({modalVisible:visible})
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Modal</Text>
        <Button title="Entrar" onPress={this.entrar}/>
        <Modal animationType="fade" visible={this.state.modalVisible}>
         <Modal2 fechar={()=>this.sair(false)}/>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },  
  titulo:{
    textAlign: 'center',
    fontSize: 40
  },
  viewModal:{
    backgroundColor: '#ffd9d9',
    flex: 1
  }
});

export default Modal1;

