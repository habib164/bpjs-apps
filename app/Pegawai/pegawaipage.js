import React from "react";
import { Text, SafeAreaView, Image } from "react-native";

const Pegawai = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <Image source={require('../../logo-bpjs.png')} style={{ width: 280, height: 43, margin: 30, padding: 20, marginBottom: 30 }}/>
            <Text>Beranda di sini</Text>
        </SafeAreaView>
    )   
}

export default Pegawai;