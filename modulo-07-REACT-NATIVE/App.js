
import React, {Component} from 'react';
import{ 
  Text,
  View,
  StyleSheet
 }from 'react-native';


export default class App extends Component{  
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   marginTop:20,
 }
});
