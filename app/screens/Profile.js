import React from 'react';
import firebase, {firestore} from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';
import {ScreenHeader} from '../components/ScreenHeader';
import { USER_KEY, updateUserKey} from '../auth';
import Ionicons from "react-native-vector-icons/Ionicons";
import {GREEN, WHITE} from '../styles';
import Spinner from '../components/Spinner';
import ProfileAgenda from '../components/ProfileAgenda';


export default class Profile extends React.Component {
  constructor(){
    super();
        this.unsubscribe = null;
        this.state = {
          loading: true,
          firstname: '',
          lastname: '',
          email: '',
          uid: firebase.auth().currentUser.uid,
        };
        this.ref = firebase.firestore().collection('Users').doc(this.state.uid);
  }

  componentDidMount() {
    this.getUserInformation(); 
  }

  componentWillUnmount(){
    //this.unsubscribe();
  }
  

  getUserInformation() {
    this.ref.get().then((res) =>  {
      // check and do something with the data here.
      if (res.empty) {
        alert('no documents found');
      } else {// do something with the data
        this.setState({loading:false});
        this.setState({
          firstname: res.get('firstname'),
          lastname: res.get('lastname'),
          email: res.get('email'),
        });
      }
    });
  }

  renderInfoOrSpinner() {
    if (this.state.loading) {
        return  <Spinner/>;
    }
    return (   
                <Text style= {styles.userText}> {this.state.firstname} {this.state.lastname} </Text>
              ); 
  }
    render() {
      
      return (
        <View style={ styles.mainContainer}>
        <ScreenHeader label='Dina bokningar'/>
        <Ionicons name='ios-contact-outline' size={80} color={WHITE} /> 
        {this.renderInfoOrSpinner()}
        <View style={ styles.agendaContainer}>
        </View>
        </View>  
    );
  }
    
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5A6978',
    },
    agendaContainer: {
      alignSelf: 'stretch',
      height: 200,
      marginBottom: 2,
    },
    userText: {
      fontSize: 16,
      color: WHITE,
    },
  });