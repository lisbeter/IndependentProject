import React, { Component } from 'react';
import {withNavigation} from 'react-navigation';
import { View, Text, Button,KeyboardAvoidingView } from 'react-native';
import firebase from 'react-native-firebase';
import {TitledInput} from './TitledInput'; 
import {SignedIn} from '../config/router';
import Spinner from './Spinner';
import { onSignIn } from "../auth";
import Ionicons from "react-native-vector-icons/Ionicons";

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }
        
    onLoginPress() {

        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(() => { this.onSignIn();
                        })
            .catch((error) => { alert(error.toString());         
            });

        this.setState({ loading: false });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return  <Spinner/>;
        }
        return (    <View style = {styles.buttonContainer}>
                        <Button  onPress={this.onLoginPress.bind(this)} 
                            title='Logga in'
                            color="#FFFFFF"/> 
                    </View>);    
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.formContainer}>
            <View position='absolute' style= {{paddingTop:10, paddingLeft:15}}><Ionicons name='ios-contact' size={20} color='#8190A5'/> </View>
                    <TitledInput 
                        placeholder= 'användarnamn'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
            </View>
            <View style={styles.formContainer}>
            <View position='absolute' style= {{paddingTop:10, paddingLeft:15}}> <Ionicons name='ios-key' size={20} color='#8190A5' /> </View>
                    <TitledInput
                        autoCorrect={false}
                        placeholder='lösenord'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    </View>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrSpinner()}
            </KeyboardAvoidingView>
        );
    }
}

const styles = {
    container:{
        flex: 1
    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonContainer: {
        backgroundColor: '#3DCC90',
        margin: 10,
        borderRadius: 20,
        width: 250,
        padding: 1,
      },
    formContainer:{
        alignSelf: 'center',
        borderRadius: 20,
        margin: 5,
        borderColor: '#8190A5',
        borderWidth: 0.5,
        width: 250,
        paddingLeft: 40, 
    },
};

export default withNavigation(LoginForm);