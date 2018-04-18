import React from 'react';
import firebase from 'react-native-firebase';
import { Console, FlatList, Button, View, Text, TextInput, Alert } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
//import BookingList from './BookingList'; 

class ListOfBookings extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('Bookings');
        this.unsubscribe = null;
        this.state = {
            text: '',
            loading: true,
            listOfBookings: [],
            matchList: [],
        };
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
    const listOfBookings = [];
    querySnapshot.forEach((doc) => {
        const { title, complete } = doc.data();
        listOfBookings.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        complete,
        });
    });
    this.setState({ 
    listOfBookings,
    matchList: listOfBookings,
    loading: false,
    });
    }
      
      renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
              marginLeft: "14%"
            }}
          />
        );
      };

      updateTextInput(value) {
        this.setState({ textInput: value });
    }

      renderFooter = () => {
        if (!this.state.loading) return null;
    
        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
    }

    searchText(text){
        this.setState({text : text})
        //let inputText = text.toLowerCase();
        const copyList = this.state.listOfBookings;
        for (var index=0 ; index < copyList.length; index++ ){
          if (copyList[index].title === text){
            this.setState({
              matchList : [copyList[index]]
            })
          }
        }
        if (!text){
          this.setState({matchList : copyList})}
      }
     
render() {
    if (this.state.loading) {
        return null; // or render a loading icon
      }

    return (
    <List
        containerStyle = {{ borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: '#5A6978'}}>
        <SearchBar placeholder="Sök rum" lightTheme round value={this.state.text} onChangeText = {(text) => {this.searchText(text) }} />
        <FlatList style = {styles.flatList}
            data={this.state.matchList}
            renderItem={({ item }) =>  <ListItem
                        title={`${item.title}`}
                        containerStyle={{ borderBottomWidth: 0 }}
          />}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
        />
        
    </List> 
    )
}
};

//ListHeaderComponent={this.renderHeader}
const styles = {
    flatList: {
        //flex: 1,
        //width: 380,
        //marginTop: 100,
        marginBottom: 100,
    },
}

export default ListOfBookings;