import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../component';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [faculty, setFaculty] = useState('');
  const [nim, setNim] = useState('');

  const onSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const data = {
          fullname: fullname,
          email: email,
          faculty: faculty,
          nim: nim,
        };

        firebase.database().ref(`users/${res.user.uid}`).set(data);
        setFullName('');
        setEmail.trim('');
        setPassword.trim('');
        setFaculty('');
        setNim('');
        navigation.navigate('Beranda');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#D9435E', // background color
          color: 'white', // text color
        });
      });
  }

  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <TouchableOpacity>
            <Gap height={10} />
            <TextInput
              title="FULL NAME"
              placeholder=""
              value={fullname}
              onChangeText={value => setFullName(value)}
            />

            <TextInput
              title="EMAIL ADDRESS"
              placeholder=""
              value={email}
              onChangeText={value => setEmail(value)}
            />

            <TextInput
              title="PASSWORD"
              placeholder=""
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry
            />

            <TextInput
              title="FACULTY"
              placeholder=""
              value={faculty}
              onChangeText={value => setFaculty(value)}
            />

            <TextInput
              title="NIM"
              placeholder=""
              value={nim}
              onChangeText={value => setNim(value)}
            />
            <View style={styles.buttonCreate}>
              <Gap height={33} />
              <Button title="CREATE ACCOUNT" onPress={onSubmit} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 0,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 37,
    paddingRight: 33,
  },
  buttonCreate: {
    paddingBottom: 100,
    paddingLeft: 81,
    paddingRight: 70,
  },
});
