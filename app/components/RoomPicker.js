import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert, Picker } from 'react-native';
import {TABBAR_GREY,GREEN, WHITE, GREY1, BACKGROUND_GREY} from '../styles';
import BookingCalendar from '../components/BookingCalendar';

export default class RoomPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      room: '',
    }
  }
  
    render() {
      const room = this.props.room;

      return (
        <View style = {styles.container}>
        <Picker
          itemTextStyle = {styles.picker}
          selectedValue={this.state.room}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({room: itemValue});}}>
          <Picker.Item label="Konferensrummet" value="konferensrummet" />
          <Picker.Item label="Spelrummet" value="spelrummet" />
          <Picker.Item label="Skrubben" value="skrubben" />
        </Picker>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BACKGROUND_GREY,
    },
    picker:{
      fontSize: 18, 
      color: WHITE,
    }
  });