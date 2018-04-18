import React,{Component} from 'react';
import { StyleSheet, ScrollView, Image, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'
import {GREEN, WHITE} from '../styles';

export default class ResetPassword extends Component{

    onLogoutPress(){
        Alert.alert(
            'Byta lösenords funktion finns snart här!:)') 

       }

    render(){
    return(
        <View >
        <TouchableOpacity onPress={ () => {this.onLogoutPress()}}> 
        <Text style= {styles.buttonTextStyle}> Byt lösenord </Text> 
        </TouchableOpacity>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    buttonTextStyle: {
        color: WHITE,
        paddingTop: 10,
        paddingBottom: 10,
    },
});