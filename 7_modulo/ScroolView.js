//<ScroolView> renderiza toda a lista, mesmo o que ainda não foi visto

//props -> 
//showVerticalScrollIndicator /Horizontal oculta ou não a barra de rolagem
// horizontal pode deixar a lista de lado

import React, {Component} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'

class ScroolView extends Component{
    render(){
        return(
            <View>
                <ScroolView showVerticalScrollIndicator={false}>
                    <View style={styles.box1}></View>
                    <View style={styles.box2}></View>
                    <View style={styles.box3}></View>
                    <View style={styles.box4}></View>
                    <View style={styles.box5}></View>
                    <View style={styles.box6}></View>
                    <View style={styles.box7}></View>
                </ScroolView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box1:{
        backgroundColor: 'yellow',
        height: 250,
        width: 150
    },
    box2:{
        backgroundColor: 'yellow',
        height: 250,
        width: 150
    },
    box3:{
        backgroundColor: 'white',
        height: 250,
        width: 150
    },
    box4:{
        backgroundColor: 'yellow',
        height: 250,
        width: 150

    },
    box5:{
        backgroundColor: 'red',
        height: 250,
        width: 150

    },
    box6:{
        backgroundColor: 'blue',
        height: 250,
        width: 150

    },
    box7:{
        backgroundColor: 'green',
        height: 250,
        width: 150

    },
});

export default ScroolView;