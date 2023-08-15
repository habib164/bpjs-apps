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

import {
	getFirestore,
	collection,
	getDocs,
	where,
	query,
	getDoc,
	addDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
const StokATK = () => {
	const [namaBarang, setNamaBarang] = useState("");
	const [jumlah, setJumlah] = useState("");
	const [headTable, setHeadTable] = useState(["Nama Barang", "Jumlah"]);
	const [isSuccess, setSuccess] = useState(false);
	const [dataTable, setDataTable] = useState([
		["Kertas", "5"],
		["Pulpen", "5"],
		["Spidol", "5"],
		["Paper Clip", "5"],
	]);

	const atkCollection = collection(db, "atk");

	const getAtk = async () => {
		const data = await getDocs(atkCollection);
		const atkList = data.docs.map((doc) => doc.data());
		console.log(atkList);

		const transformedData = atkList.map((item, index) => [
			item.nama_barang,
			item.jumlah,
		]);
		setDataTable(transformedData);
	};

	useEffect(() => {
		getAtk();
	}, [isSuccess]);

	const handleSubmit = async () => {
		try {
			console.log(namaBarang);
			console.log(jumlah);
			await addDoc(atkCollection, {
				nama_barang: namaBarang,
				jumlah: parseInt(jumlah),
			});
			console.log("Data berhasil ditambahkan!");
			// Reset input fields
			setNamaBarang("");
			setJumlah("");
			ToastAndroid.show("Data Berhasil Ditambahkan", ToastAndroid.LONG);
			setSuccess(true);
		} catch (error) {
			ToastAndroid.show(
				`Data Gagal Ditambahkan ${error.message}`,
				ToastAndroid.LONG
			);
			setSuccess(false);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Image source={require("../../logo-bpjs.png")} style={styles.img} />
				<View style={{ paddingHorizontal: 20 }}>
					<Text style={{ fontSize: 13, fontWeight: "bold" }}>Nama Barang</Text>
					<TextInput
						placeholder="Masukkan Nama Barang"
						keyboardType="default"
						style={styles.txtInput}
						value={namaBarang}
						onChangeText={(value) => setNamaBarang(value)}
					/>
					<Text style={{ fontSize: 13, fontWeight: "bold" }}>Jumlah</Text>
					<TextInput
						placeholder="Masukkan Jumlah"
						keyboardType="number-pad"
						style={styles.txtInput}
						value={jumlah}
						onChangeText={(value) => setJumlah(value)}
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

export default StokATK;

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
