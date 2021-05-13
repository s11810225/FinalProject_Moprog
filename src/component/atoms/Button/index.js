import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = ({title, color = '#182547', textColor = '#FEFCFC' , onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container(color)}>
            <Text style={styles.text(textColor)}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: color => ({
        height: 33,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    }),
        text: textColor => ({ 
            fontSize: 15,
            fontFamily: 'Roboto-Regular',
            color: textColor,
    }),
});