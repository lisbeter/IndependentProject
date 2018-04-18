import React from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';



export default class BookingDetails extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <View style={ styles.mainContainer}>
         <Text> andra sidan </Text> 
         <View style={ styles.buttonContainer}>
         <Button
          title='Boka'
          color="#FFFFFF"
          onPress={() => this.props.navigation.navigate('BookingOverview')}
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
      alignItems: 'center',

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