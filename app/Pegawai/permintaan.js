import React from "react";
import { Text, SafeAreaView, View, TouchableOpacity, Image } from "react-native";

const Permintaan = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white', alignItems:'center', padding:10}}>
            <Image source={require('../../logo-bpjs.png')} style={{ width: 280, height: 43, margin: 30, padding: 20, marginBottom: 30 }}/>
            <View style={{ width: '70%', margin: 20 }}>
                <TouchableOpacity style={{alignItems:'center', backgroundColor:'green', padding:20, borderRadius:70}} onPress={()=>navigation.navigate('Permintaan ATK')}>
                    <Text>Permintaan Alat Tulis Kantor</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '70%', margin: 20}}>
                <TouchableOpacity style={{alignItems:'center', backgroundColor:'green', padding:20, borderRadius:70}} onPress={()=>navigation.navigate('Permintaan Tiket Pesawat')}>
                    <Text>Permintaan Tiket Pesawat</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '70%', margin: 20}}>
                <TouchableOpacity style={{alignItems:'center', backgroundColor:'green', padding:20, borderRadius:70}} onPress={()=>navigation.navigate('Permintaan Pengemudi')}>
                    <Text>Permintaan Pengemudi</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )   
}

export default Permintaan;