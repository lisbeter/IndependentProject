import React, {Component} from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { List, ListItem, Header } from 'react-native-elements';


const ScreenHeader = ({ label,rightComponent }) => {

    const { outerContainer, innerContainer} = styles;
    return (
            <Header 
                placement="center"
                statusBarProps={{ barStyle: 'light-content' }}
                outerContainerStyles ={styles.outerContainer} 
                centerComponent={<Text style = {styles.label}> {label} </Text>}
                rightComponent= {<View style= {styles.right }> {rightComponent} </View> }
                innerContainerStyles = {styles.innerContainer}
            />
   
    );
};

const styles = {
      outerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#5A6978',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        padding: 10,
        height: 70,
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between',
      },
      label: {
          color: '#FFFFFF',
          fontSize: 20,
      },
};

export { ScreenHeader };