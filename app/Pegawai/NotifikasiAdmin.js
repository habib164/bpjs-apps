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
    doc,
    updateDoc,
} from "firebase/firestore";
const NotifikasiAdmin = () => {
    const [data, setData] = useState();
    const [isSuccess, setSuccess] = useState(false);
    const requestCollection = collection(db, "request_atk");

    const getData = async () => {
        const q = query(requestCollection);
        const querySnapshot = await getDocs(q);
        const requestData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        // console.log(requestData);
        setData(requestData);
    };

    useEffect(() => {
        getData();
    }, [isSuccess]);

    const handleReject = async (id) => {
        const docRef = doc(db, "request_atk", id);
        try {
            await updateDoc(docRef, { status: "reject" });
            setSuccess(true);
        } catch (error) {
            console.error("Error rejecting request:", error);
        }
    };

    const handleAccept = async (id) => {
        const docRef = doc(db, "request_atk", id);
        try {
            await updateDoc(docRef, { status: "accept" });
            setSuccess(true);
        } catch (error) {
            console.error("Error rejecting request:", error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
                <Image
                    source={require("../../logo-bpjs.png")}
                    style={styles.img}
                />
                <View style={{ paddingHorizontal: 20, gap: 20 }}>
                    {data &&
                        data.map((item, index) => (
                            <View style={styles.cardContainer}>
                                <View style={styles.rowTop}>
                                    <View>
                                        <Text>Nama : {item.nama_pegawai}</Text>
                                        <Text>NPP : {item.npp}</Text>
                                    </View>
                                    <Text>
                                        {" "}
                                        {new Date(
                                            item.tanggal_pengajuan.seconds *
                                                1000
                                        ).toLocaleDateString("id-ID")}
                                    </Text>
                                </View>
                                <View style={styles.underline} />
                                <View style={styles.rowName}>
                                    <Text>{item.nama_barang}</Text>
                                    <Text>{item.jumlah}</Text>
                                </View>
                                <View style={styles.rowBtn}>
                                    {item.status === "pending" && (
                                        <>
                                            <TouchableOpacity
                                                style={styles.btnAcc}
                                                onPress={() =>
                                                    handleAccept(item.id)
                                                }
                                            >
                                                <Text
                                                    style={{ color: "white" }}
                                                >
                                                    Terima
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.btnReject}
                                                onPress={() =>
                                                    handleReject(item.id)
                                                }
                                            >
                                                <Text
                                                    style={{ color: "white" }}
                                                >
                                                    Tolak
                                                </Text>
                                            </TouchableOpacity>
                                        </>
                                    )}
                                </View>
                            </View>
                        ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NotifikasiAdmin;

const styles = StyleSheet.create({
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
