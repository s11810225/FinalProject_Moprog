import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Perpanjang } from '..';
import { Button, Gap, TextInput } from '../../component';
import firebase from '../../config/Firebase';

const Perpanjang = ({navigation}) => {
    const [namabuku, setNamaBuku] = useState('');
    const [jenisbuku, setJenisBuku] = useState('');
    const [nomor_buku, setNomorBuku] = useState('');
    const [namabuku_dua, setNamaBuku_dua] = useState('');
    const [jenisbuku_dua, setJenisBuku_dua] = useState('');
    const [nomor_buku_dua, setNomorBuku_dua] = useState('');
    const [lama_pinjam, setLamaPinjam] = useState('');

    const onSubmit =() => {
        firebase.auth()
        .Pinjaman(namabuku, jenisbuku, nomor_buku, namabuku_dua, 
            jenisbuku_dua, nomor_buku_dua, lama_pinjam)
        .then(res => navigation.navigate('Terimakasih'))
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
            <TextInput title="Nama Buku 1" placeholder="" value={email}
            onChangeText={value => setNamaBuku(value)} />
            <TextInput title="Jenis Buku" placeholder="" value={password}
            onChangeText={value => setJenisBuku(value)} />
            <TextInput title="Nomor Buku" placeholder="" value={password}
            onChangeText={value => setNomorBuku(value)} />
            <TextInput title="Nama Buku 2" placeholder="" value={password}
            onChangeText={value => setNamaBuku_dua(value)} />
            <TextInput title="Jenis Buku" placeholder="" value={password}
            onChangeText={value => setJenisBuku_dua(value)} />
            <TextInput title="Nomor Buku" placeholder="" value={password}
            onChangeText={value => setNomorBuku_dua(value)} />
            <TextInput title="Lama Pinjam " placeholder="" value={password}
            onChangeText={value => setLamaPinjam(value)} />
            <TextInput title="Hari " placeholder="" value={password}/>
            
                <View style={styles.buttonPerpanjang}>
                    <Gap height={33}/>
                    <Button  title = "Perpanjang" onPress={onSubmit}/>
                </View>
                <View style={styles.buttonKembali}>
                    <Gap height={33}/>
                    <Button  title = "Kembali" onPress={onSubmit}/>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Perpanjang;

const styles = StyleSheet.create({
    contentWrapper: {
        paddingHorizontal: 37,
        paddingRight: 33,
    },
    buttonPerpanjang: {
        paddingBottom: 20,
        paddingLeft: 81,
        paddingRight: 70,
    },
    buttonKembali: {
        paddingBottom: 20,
        paddingLeft: 81,
        paddingRight: 70,
    },
});
