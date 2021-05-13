import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Gap, TextInput } from '../../component';
import firebase from '../../config/Firebase';

const SignUp = ({navigation}) => {
    const [fullname, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [faculty, setFaculty] = useState('');
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =() => {
        firebase.auth()
        .signUp(fullname, address, faculty, nim, password, re_pasword)
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
            <TextInput title="FULL NAME" placeholder="" value={email}
            onChangeText={value => setFullName(value)} />
            <TextInput title="ADDRESS" placeholder="" value={password}
            onChangeText={value => setAddress(value)} />
            <TextInput title="FACULTY" placeholder="" value={password}
            onChangeText={value => setFaculty(value)} />
            <TextInput title="NIM" placeholder="" value={password}
            onChangeText={value => setNim(value)} />
            <TextInput title="PASSWORD" placeholder="" value={password}
            onChangeText={value => setPassword(value)} />
            <TextInput title="NIM" placeholder="" value={password}
            onChangeText={value => set(value)} />
                <View style={styles.buttonCreate}>
                    <Gap height={33}/>
                    <Button  title = "CREATE" onPress={onSubmit}/>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    contentWrapper: {
        paddingHorizontal: 37,
        paddingRight: 33,
    },
    buttonCreate: {
        paddingBottom: 20,
        paddingLeft: 81,
        paddingRight: 70,
    },
});
