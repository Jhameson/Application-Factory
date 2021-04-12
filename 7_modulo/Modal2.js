import React, {Component} from 'react';
import {
  Text,
  View,
  Button, 
  StyleSheet,
  Modal,
  Platform
} from 'react-native';

class Modal2 extends Component{

  
  
  sair(visible){
    this.setState({modalVisible:visible})
  }

  render(){
    return(
     
      
          <View style={styles.viewModal}>
            <Text>
              Seja bem vindo!
            </Text>
            <Button title="Sair" onPress={this.props.fechar}/>
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

export default Modal2;

