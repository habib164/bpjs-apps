import React from "react";
import {TextInput, TouchableOpacity, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';

const Pengemudi = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <Image source={require('../../logo-bpjs.png')} style={{ width: 280, height: 43, margin: 30, padding: 20, marginBottom: 30 }} />
                <ScrollView>
                    <View style={{ width: 250, marginTop: 15 }}>
                        <TextInput placeholder="Tanggal Kebutuhan" style={{ borderWidth: 0.7, borderRadius: 10, padding: 5, borderColor: 'grey' }} />
                    </View>
                    <View style={{ width: 250, marginTop: 15 }}>
                        <TextInput placeholder="Tujuan" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                    </View>
                    <View style={{ alignItems: 'center', width: 250, marginTop: 50 }}>
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
                        <TextInput placeholder="Kode Program" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                    </View>
                    <View style={{ width: 250, marginTop: 15 }}>
                        <TextInput placeholder="Nama Program" style={{ borderColor: 'grey', borderWidth: 0.7, borderRadius: 10, padding: 5 }} />
                    </View>
                    <View style={{ width: '70%', margin: 20, alignItems:'center', marginLeft:40, marginTop:50, marginBottom:50 }}>
                        <TouchableOpacity style={{backgroundColor: 'green', alignItems: 'center', padding: 10, borderRadius: 20 }} onPress={()=>{}}>
                            <Text style={{fontSize:15}}>Kirim Permitaan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
}

export default Pengemudi;