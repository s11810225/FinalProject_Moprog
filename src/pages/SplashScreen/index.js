import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Logo2 } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 3000);
    }, []);


    return (
        <View style = {styles.page}>
            <Logo2/>
            <Text style={styles.text}>PERPUSTAKAAN</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#948F78',
        alignItems: 'center',
        justifyContent: 'center',

},
text: {
    fontSize: 14,
    paddingVertical: 33,
    fontFamily: 'GoblinOne-Regular',
}
});
