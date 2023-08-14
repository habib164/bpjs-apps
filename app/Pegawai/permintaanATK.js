import React from "react";
import {TextInput, Button, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';

const PermintaanATK = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white', padding: 23, alignItems:'center'}}>
            <Image source={require('../../logo-bpjs.png')} style={{ width: 280, height: 43, margin: 30, padding: 20, marginBottom: 30 }}/>
            <Text style={{ fontSize: 20, textAlign:'center' }}>Selamat datang di Halaman Log in Pegawai!</Text>
            <View style={{width:250, marginTop:35}}>
                <TextInput placeholder="Nama Barang" style={{borderWidth:0.7, borderRadius:10, padding:5, borderColor:'grey'}}/>
            </View>
            <View style={{width:80, marginTop:20, alignItems:'baseline', marginRight:170}}>
                <TextInput placeholder="Jumlah" keyboardType='numeric' style={{borderColor:'grey', borderWidth:0.7, borderRadius:10, padding:5}}/>
            </View>
            <View style={{width:250, marginTop:20}}>
                <TextInput placeholder="Keterangan" style={{ borderColor:'grey', borderWidth:0.7, borderRadius:10, marginBottom:20, textAlignVertical:'top', padding:50}} multiline={ true }/>
            </View>
            <View style={{ width: '50%', margin: 20 }}>
                <TouchableOpacity style={{backgroundColor: 'green', alignItems: 'center', padding: 10, borderRadius: 20 }} onPress={()=>{}}>
                    <Text style={{fontSize:15}}>Kirim Permitaan</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PermintaanATK;