import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";


const Page = ({navigation}) => {
  return (
  
     <SafeAreaView style={styles.container}>
          <Image source={require('../logo-bpjs.png')} style={{ width: 280, height: 43, margin: 30, padding: 20, marginBottom: 30 }} />
          <Text style={styles.subtitle}>Siapakah Anda?</Text>
          <View style={{ width: '90%', margin: 20 }} >
              <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center', padding: 20, borderRadius: 20 }} onPress={() => navigation.navigate('Login')}>
                  <Text style={{ fontSize: 20, fontWeight:'bold' }}>Pegawai</Text>
              </TouchableOpacity>
          </View>
          <View style={{ width: '90%', margin: 20 }}>
              <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center', padding: 20, borderRadius: 20 }} onPress={() => navigation.navigate('Log in Admin')}>
                  <Text style={{ fontSize: 20, fontWeight:'bold' }}>Admin</Text>
              </TouchableOpacity>
          </View>
          <View style={{ width: '90%', margin: 20 }}>
             <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center', padding: 20, borderRadius: 20 }}>
                  <Text style={{ fontSize: 20, fontWeight:'bold' }}>Pengemudi</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 23,
    backgroundColor: 'white'
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 690,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 30,
    color: "#38434D",
  },
  buttonStyle: {
    borderRadius: 50,
    color: 'green',
    marginBottom:100,
    justifyContent: 'center',
  },
})