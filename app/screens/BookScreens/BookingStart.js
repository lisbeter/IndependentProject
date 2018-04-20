import React from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';
import {TABBAR_GREY,GREEN, WHITE, GREY1} from '../../styles';
import {InfoButton} from '../../components/Buttons/InfoButton';
import {BookingNavigator} from '../../config/router';
import {Divider } from 'react-native-elements';
import AccordionList from '../../components/AccordionList';
import ProfileAgenda from '../../components/ProfileAgenda';



export default class BookingStart extends React.Component {
    constructor(props){
        super(props); 
       
    }
  
    render() {
      return (
        <View style={ styles.mainContainer}> 
        <AccordionList />
        <Divider style={{ backgroundColor: GREEN }} />
         <View style={ styles.buttonContainer}>
         <Button
          title='Vidare'
          color="#FFFFFF"
          onPress={() => this.props.navigation.navigate('BookingDetails')}
        />
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#5A6978',
      justifyContent: 'space-around',
      alignItems: 'stretch',

    },
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: '#3DCC90',
        margin: 10,
        borderRadius: 20,
        width: 250,
        padding: 1,
      },
  });