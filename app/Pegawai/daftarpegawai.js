import React, { useEffect, useState } from "react";
import {
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    ToastAndroid,
} from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
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

const DaftarPegawai = () => {
    const [headTable, setHeadTable] = useState(["No", "Nama", "NPP"]);
    const [dataTable, setDataTable] = useState([]);
    const [nama, setNama] = useState("");
    const [npp, setNpp] = useState("");
    const [isSuccess, setSuccess] = useState(false);

    const usersCollection = collection(db, "users");

    const getUser = async () => {
        const data = await getDocs(usersCollection);
        const userList = data.docs.map((doc) => doc.data());
        console.log(userList);

        const transformedData = userList.map((user, index) => [
            (index + 1).toString(),
            user.name,
            user.npp,
        ]);
        setDataTable(transformedData);
    };

    useEffect(() => {
        getUser();
    }, [isSuccess]);

    const handleSubmit = async () => {
        try {
            console.log(nama);
            console.log(npp);
            await addDoc(usersCollection, {
                name: nama,
                npp: npp,
                role: "pegawai",
            });
            console.log("Data berhasil ditambahkan!");
            // Reset input fields
            setNama("");
            setNpp("");
            ToastAndroid.show(
                "Pegawai Berhasil Ditambahkan",
                ToastAndroid.LONG
            );
            setSuccess(true);
        } catch (error) {
            ToastAndroid.show(
                `Pegawai Gagal Ditambahkan ${error.message}`,
                ToastAndroid.LONG
            );
            setSuccess(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    source={require("../../logo-bpjs.png")}
                    style={styles.img}
                />
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                        Nama
                    </Text>
                    <TextInput
                        placeholder="Masukkan Nama"
                        keyboardType="default"
                        style={styles.txtInput}
                        value={nama}
                        onChangeText={(value) => setNama(value)}
                    />
                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                        NPP
                    </Text>
                    <TextInput
                        placeholder="Masukkan NPP"
                        keyboardType="number-pad"
                        style={styles.txtInput}
                        value={npp}
                        onChangeText={(value) => setNpp(value)}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={styles.txtButton}>Simpan</Text>
                    </TouchableOpacity>

                    <View style={{ marginVertical: 40 }}>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: "grey",
                            }}
                        >
                            <Row
                                data={headTable}
                                style={styles.headRow}
                                textStyle={styles.txtHeadTable}
                            />
                            <Rows data={dataTable} textStyle={styles.txtRows} />
                        </Table>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DaftarPegawai;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    img: {
        width: 280,
        height: 43,
        margin: 30,
        padding: 20,
        marginBottom: 30,
    },
    txtInput: {
        marginTop: 7,
        marginBottom: 15,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 15,
    },
    button: {
        backgroundColor: "#22C55E",
        paddingVertical: 20,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10,
    },
    txtButton: {
        fontSize: 13,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    headRow: {
        alignContent: "center",
        backgroundColor: "darkgrey",
    },
    txtHeadTable: {
        fontSize: 13,
        paddingVertical: 6,
        fontWeight: "bold",
        textAlign: "center",
    },
    txtRows: {
        fontSize: 12,
        paddingVertical: 3,
        textAlign: "center",
    },
});
