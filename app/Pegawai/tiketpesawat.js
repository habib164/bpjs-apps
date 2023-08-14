import React from "react";
import { TextInput, Button, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

const Tiketpesawat = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <Image source={require('../../logo-bpjs.png')} style={{ width: 280, height: 43, margin: 30, padding: 20, marginBottom: 30 }} />
            <ScrollView>
                <View style={{ alignItems: 'center', width: 250, marginTop: 10 }}>
                    <Text style={{ fontSize: 20 }}>Data Diri</Text>
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Nama Lengkap" style={{ borderWidth: 0.7, borderRadius: 10, padding: 5, borderColor: 'grey' }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="NPP" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Bidang" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Bagasi (Dalam Kg)" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ alignItems: 'center', width: 250, marginTop: 70 }}>
                    <Text style={{ fontSize: 20 }}>Jadwal Keberangkatan</Text>
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Nama Maskapai" style={{ borderWidth: 0.7, borderRadius: 10, padding: 5, borderColor: 'grey' }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Tanggal Keberangkatan" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Pukul" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Catatan (Opsional)" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 35 }} multiline={true}/>
                </View>
                <View style={{ alignItems: 'center', width: 250, marginTop: 70 }}>
                    <Text style={{ fontSize: 20 }}>Jadwal Kepulangan</Text>
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Nama Maskapai" style={{ borderWidth: 0.7, borderRadius: 10, padding: 5, borderColor: 'grey' }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Tanggal Kepulangan" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Pukul" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Catatan (Opsional)" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 35 }} multiline={true}/>
                </View>
                <View style={{ alignItems: 'center', width: 250, marginTop: 70 }}>
                    <Text style={{ fontSize: 20 }}>Rincian Kegiatan</Text>
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Nama Kegiatan" style={{ borderWidth: 0.7, borderRadius: 10, padding: 5, borderColor: 'grey' }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Kode Program" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Nama Program" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Kode Akun" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{ width: 250, marginTop: 15 }}>
                    <TextInput placeholder="Nama Akun" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                </View>
                <View style={{marginTop:50, marginBottom:50, margin:70, backgroundColor:'#228b22'}}>
                    <Button title="Kirim" onPress={()=>{}}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Tiketpesawat;