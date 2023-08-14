import React from 'react';
import { Text, View, SafeAreaView,TouchableOpacity, TextInput, Image } from 'react-native';

const LoginAdmin = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white', padding: 23, alignItems:'center'}}>
            <Image source={require('../../logo-bpjs.png')} style={{ width: 280, height: 43, margin: 30, padding: 20, marginBottom: 30 }}/>
            <Text style={{ fontSize: 20, textAlign:'center' }}>Silahkan Masuk Admin</Text>
            <View style={{width:250, marginTop:35}}>
                <TextInput placeholder="Nama Lengkap" style={{borderWidth:0.7, borderRadius:10, padding:5, borderColor:'grey'}}/>
            </View>
            <View style={{width:250, marginTop:50}}>
                <TextInput placeholder="NPP" style={{borderColor:'grey', borderWidth:0.7, borderRadius:10, padding:5}}/>
            </View>
            <View style={{ width: '50%', margin: 70 }}>
                <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center', padding: 20, borderRadius: 20 }} onPress={()=>navigation.navigate('Admin')}>
                    <Text style={{fontSize:20}}>Masuk</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
    )
}

export default LoginAdmin