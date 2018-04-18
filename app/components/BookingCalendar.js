import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {GREEN, GREY1, WHITE, TABBAR_GREY, BACKGROUND_GREY} from '../styles';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
          displayLoadingIndicator
          firstDay={1} //week starts on monday instead of sunday

          theme={{
            calendarBackground: BACKGROUND_GREY,
            textSectionTitleColor: GREEN,
            dayTextColor: WHITE,
            todayTextColor: GREEN,
            selectedDayTextColor: 'white',
            monthTextColor: 'white',
            selectedDayBackgroundColor: GREEN,
            arrowColor: 'white',
            // textDisabledColor: 'red',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }}
        />
      
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 'auto',
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 5,
    backgroundColor: '#eee'
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'gray'
  // }
});