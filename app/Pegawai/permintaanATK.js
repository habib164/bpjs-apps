import React, { useState } from "react";
import {
    TextInput,
    Button,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    ToastAndroid,
} from "react-native";
import { db } from "../../firebaseConfig";
import {
    getFirestore,
    collection,
    getDocs,
    where,
    query,
    getDoc,
    serverTimestamp,
    addDoc,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PermintaanATK = () => {
    const [namaBarang, setNamaBarang] = useState("");
    const [jumlah, setJumlah] = useState();
    const [keterangan, setKeterangan] = useState();
    const [isError, setError] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const atkCollection = collection(db, "atk");
    const requestAtkCollection = collection(db, "request_atk");

    const getStockAtk = async () => {
        const q = query(atkCollection, where("nama_barang", "==", namaBarang));

        const querySnapshot = await getDocs(q);
        let data;
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            data = doc.data();
        });

        if (data) {
            return true;
        } else {
            setError(true);
            setErrMsg(`Barang Tidak Ada`);
            return false;
        }
    };

    const handleSubmit = async () => {
        try {
            const checkStock = getStockAtk();
            if (!checkStock) throw new Error("Gagal");
            const nama_pegawai = await AsyncStorage.getItem("nama_pegawai");
            const npp = await AsyncStorage.getItem("npp");
            const requestAtkCollection = collection(db, "request_atk");
            await addDoc(requestAtkCollection, {
                nama_barang: namaBarang,
                nama_pegawai: nama_pegawai,
                npp: npp,
                jumlah: parseInt(jumlah),
                keterangan: keterangan,
                status: "pending",
                tanggal_pengajuan: serverTimestamp(),
            });
            console.log("Data berhasil ditambahkan!");
            // Reset input fields
            setNamaBarang("");
            setJumlah("");
            setKeterangan("");
            ToastAndroid.show(
                "Pengajual berhasil terkirim!",
                ToastAndroid.LONG
            );
        } catch (error) {
            console.error("Gagal menambahkan data:", error);
        }
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                padding: 23,
                alignItems: "center",
            }}
        >
            <Image
                source={require("../../logo-bpjs.png")}
                style={{
                    width: 280,
                    height: 43,
                    margin: 30,
                    padding: 20,
                    marginBottom: 30,
                }}
            />
            <Text style={{ fontSize: 20, textAlign: "center" }}>
                Selamat datang di Halaman Log in Pegawai!
            </Text>
            <View style={{ width: 250, marginTop: 35 }}>
                <TextInput
                    placeholder="Nama Barang"
                    style={{
                        borderWidth: 0.7,
                        borderRadius: 10,
                        padding: 5,
                        borderColor: "grey",
                    }}
                    onChangeText={(value) => setNamaBarang(value)}
                />
            </View>
            <View
                style={{
                    width: 80,
                    marginTop: 20,
                    alignItems: "baseline",
                    marginRight: 170,
                }}
            >
                <TextInput
                    placeholder="Jumlah"
                    keyboardType="numeric"
                    style={{
                        borderColor: "grey",
                        borderWidth: 0.7,
                        borderRadius: 10,
                        padding: 5,
                    }}
                    onChangeText={(value) => setJumlah(value)}
                />
            </View>
            <View style={{ width: 250, marginTop: 20 }}>
                <TextInput
                    placeholder="Keterangan"
                    style={{
                        borderColor: "grey",
                        borderWidth: 0.7,
                        borderRadius: 10,
                        marginBottom: 20,
                        textAlignVertical: "top",
                        padding: 50,
                    }}
                    multiline={true}
                    onChangeText={(value) => setKeterangan(value)}
                />
            </View>
            {isError && (
                <View style={{ width: 250, marginTop: 0 }}>
                    <Text>{errMsg}</Text>
                </View>
            )}
            <View style={{ width: "50%", margin: 20 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "green",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 20,
                    }}
                    onPress={() => handleSubmit()}
                >
                    <Text style={{ fontSize: 15 }}>Kirim Permitaan</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PermintaanATK;
