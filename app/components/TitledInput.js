import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry, icon }) => {

    const { inputStyle, labelStyle} = styles;

    return (
        
            <TextInput
                autoCapitalize= 'none'
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor= '#8190A5'
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
    );
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#FFFFFF',
        fontSize: 10,
        height: 40
    },
};

export { TitledInput };