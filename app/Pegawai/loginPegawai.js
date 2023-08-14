import React, { useState } from "react";
import {
    TextInput,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    Image,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { db } from "../../firebaseConfig";
import {
    getFirestore,
    collection,
    getDocs,
    where,
    query,
    getDoc,
} from "firebase/firestore";

const LoginPegawai = ({ navigation }) => {
    const usersCollection = collection(db, "users");
    const [name, setName] = useState("");
    const [npp, setNpp] = useState("");

    async function login() {
        const q = query(
            usersCollection,
            where("name", "==", name),
            where("npp", "==", npp),
            where("role", "==", "pegawai")
        );

        const querySnapshot = await getDocs(q);
        let user;
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            user = doc.data();
        });

        if (user) {
            console.log("masuk", user);
            navigation.navigate("Pegawai");
        } else {
            console.log("error");
        }
    }

    const handleSubmit = async () => {
        console.log(name);
        console.log(npp);
        await login();
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
                    placeholder="Nama Lengkap"
                    style={{
                        borderWidth: 0.7,
                        borderRadius: 10,
                        padding: 5,
                        borderColor: "grey",
                    }}
                    onChangeText={(value) => setName(value)}
                />
            </View>
            <View style={{ width: 250, marginTop: 50 }}>
                <TextInput
                    placeholder="NPP"
                    style={{
                        borderColor: "grey",
                        borderWidth: 0.7,
                        borderRadius: 10,
                        padding: 5,
                    }}
                    onChangeText={(value) => setNpp(value)}
                />
            </View>
            <View style={{ width: "50%", margin: 70 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "green",
                        alignItems: "center",
                        padding: 20,
                        borderRadius: 20,
                    }}
                    onPress={() => handleSubmit()}
                >
                    <Text style={{ fontSize: 20 }}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginPegawai;
