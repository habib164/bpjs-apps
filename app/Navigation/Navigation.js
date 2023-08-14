import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import chooseWho from '../chooseWho';
import loginPegawai from '../Pegawai/loginPegawai'
import pegawaipage from '../Pegawai/pegawaipage'
import Notifikasi from '../Pegawai/Notifikasi';
import pengaduan from '../Pegawai/pengaduan';
import permintaan from '../Pegawai/permintaan';
import tagihanPulsa from '../Pegawai/tagihanPulsa';
import catatanHistori from '../Pegawai/catatanHistori';
import PermintaanATK from '../Pegawai/permintaanATK';
import tiketpesawat from '../Pegawai/tiketpesawat';
import Pengemudi from '../Pegawai/permintaanPengemudi';
import Loginadmin from '../admin/loginadmin'
import Admin from '../admin/admin'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Beranda" component={pegawaipage} />
      <Drawer.Screen name='Notifikasi' component={Notifikasi} />
      <Drawer.Screen name='Pengaduan' component={pengaduan} />
      <Drawer.Screen name='Permintaan' component={permintaan} />
      <Drawer.Screen name='Tagihan Pulsa' component={tagihanPulsa} />
      <Drawer.Screen name='Catatan Histori' component={catatanHistori} />
    </Drawer.Navigator>
  );
};

function AdminPage() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Beranda" component={pegawaipage} />
      <Drawer.Screen name='Notifikasi' component={Notifikasi} />
      <Drawer.Screen name='Daftar Pegawai' component={pengaduan} />
      <Drawer.Screen name='Daftar Pengemudi' component={permintaan} />
      <Drawer.Screen name='Stok ATK' component={tagihanPulsa} />
      <Drawer.Screen name='Catatan Histori' component={catatanHistori} />
    </Drawer.Navigator>
  );
};


function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={chooseWho} />
        <Stack.Screen name="Login" component={loginPegawai} />
        <Stack.Screen name="Pegawai" component={Home} options={{ heeaderShown: false }} />
        <Stack.Screen name="Permintaan ATK" component={PermintaanATK} />
        <Stack.Screen name="Permintaan Tiket Pesawat" component={tiketpesawat} />
        <Stack.Screen name="Permintaan Pengemudi" component={Pengemudi} />
        <Stack.Screen name="Log in Admin" component={Loginadmin} />
        <Stack.Screen name="Admin" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;