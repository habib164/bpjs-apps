import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { db } from "../../firebaseConfig";
import {
    getFirestore,
    collection,
    getDocs,
    where,
    query,
    getDoc,
    addDoc,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Notifikasi = () => {
    const [data, setData] = useState();
    const requestCollection = collection(db, "request_atk");
    const getData = async () => {
        const name = await AsyncStorage.getItem("nama_pegawai");
        const npp = await AsyncStorage.getItem("npp");

        const q = query(
            requestCollection,
            where("nama_pegawai", "==", name),
            where("npp", "==", npp)
        );
        const querySnapshot = await getDocs(q);
        const requestData = querySnapshot.docs.map((doc) => doc.data());
        console.log(requestData);
        setData(requestData);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
                <Image
                    source={require("../../logo-bpjs.png")}
                    style={styles.img}
                />
                <View style={{ paddingHorizontal: 20, gap: 20 }}>
                    {data &&
                        data.map((request, index) => (
                            <View key={index} style={styles.cardContainer}>
                                <View style={styles.rowTop}>
                                    <Text>{request.nama_barang}</Text>
                                    <Text>
                                        {request.nama_pegawai}
                                        {new Date(
                                            request.tanggal_pengajuan.seconds *
                                                1000
                                        ).toLocaleDateString("id-ID")}
                                    </Text>
                                </View>
                                <View style={styles.underline} />
                                <View style={styles.rowName}>
                                    <Text>{request.jumlah}</Text>
                                    <Text
                                        style={
                                            request.status === "accept"
                                                ? styles.acc
                                                : request.status === "reject"
                                                ? styles.reject
                                                : styles.pending
                                        }
                                    >
                                        {request.status}
                                    </Text>
                                </View>
                            </View>
                        ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifikasi;

const styles = StyleSheet.create({
    acc: {
        color: "#22C55E",
    },
    pending: {
        color: "#EAB308",
    },
    reject: {
        color: "#EF4444",
    },
    img: {
        width: 280,
        height: 43,
        margin: 30,
        marginBottom: 30,
        alignSelf: "center",
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: "#CBD5E1",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 5,
    },
    rowTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    underline: {
        borderWidth: 0.8,
        borderColor: "#CBD5E1",
        marginVertical: 5,
    },
    rowBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    btnAcc: {
        padding: 10,
        backgroundColor: "#22C55E",
        borderRadius: 10,
        alignItems: "center",
        width: "46%",
    },
    btnReject: {
        padding: 10,
        backgroundColor: "#EF4444",
        borderRadius: 10,
        alignItems: "center",
        width: "46%",
    },
    rowName: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
