import React,{Component} from 'react';
import { StyleSheet, ScrollView, Image, Text, View, Button, Alert } from 'react-native';
import { List, ListItem} from 'react-native-elements';
import {ScreenHeader} from '../components/ScreenHeader';
import LogoutButton from '../components/LogoutButton';
import ResetPassword from '../components/ResetPassword';

export default class extends Component {
constructor(props){
  super(props);
}

  render(){
    return(
        <View style={ styles.mainContainer}>
            <ScreenHeader label='Inställningar'/>
            <ResetPassword/>
            <LogoutButton/>
        </View>
 ); }
}
    
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5A6978',
    },
   
  });
