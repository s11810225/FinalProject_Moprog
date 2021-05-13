import React from 'react';
import { StyleSheet, Text, View , TextInput as TextInputRN} from 'react-native';

const TextInput = ({title, placeholder}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder}/>
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'Roboto-Black',
        marginBottom: 6,
        marginTop: 16,
        paddingHorizontal: 3,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,

    },
});
