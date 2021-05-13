import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Gap, TextInput } from '../../component';
import firebase from '../../config/Firebase';

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =() => {
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => navigation.navigate('Beranda'))
        .catch(error =>
            showMessage({
                message: error.message,
                type: 'default',
                backgroudColor: '#D9435E', 
                color: 'white',
            }),
        );
    };
    
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.contentWrapper}> 
                <Gap height={235}/>
            <TextInput title="Email" placeholder="" value={email}
            onChangeText={value => setEmail(value)} />
            <TextInput title="Password" placeholder="" value={password}
            onChangeText={value => setPassword(value)} />
                <View style={styles.buttonLogin1}>
                    <Gap height={33}/>
                    <Button  title = "LOGIN" onPress={onSubmit}/>
                </View>
                <View style={styles.buttonLogin2}>
                    <Button title = "LOGIN WITH GOOGLE" 
                    color="#FDFDFE" textColor="black"/>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    contentWrapper: {
        paddingHorizontal: 37,
        paddingRight: 33,
    },
    buttonLogin1: {
        paddingBottom: 20,
        paddingLeft: 81,
        paddingRight: 70,
    },
    buttonLogin2: {
        paddingTop: 0,
        paddingLeft: 81,
        paddingRight: 70,
    },
});
