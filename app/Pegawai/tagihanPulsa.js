import React, { useState } from "react";
import {
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	View,
	TextInput,
	StyleSheet,
	ScrollView,
} from "react-native";
import { Row, Rows, Table } from "react-native-table-component";

const TagihanPulsa = () => {
	const [headTable, setHeadTable] = useState(["Nama Barang", "Jumlah"]);
	const [dataTable, setDataTable] = useState([
		["Kertas", "5"],
		["Pulpen", "5"],
		["Spidol", "5"],
		["Paper Clip", "5"],
	]);

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
					/>
					<Text style={{ fontSize: 13, fontWeight: "bold" }}>Jumlah</Text>
					<TextInput
						placeholder="Masukkan Jumlah"
						keyboardType="number-pad"
						style={styles.txtInput}
					/>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.txtButton}>Simpan</Text>
					</TouchableOpacity>

					<View style={{ marginVertical: 40 }}>
						<Table borderStyle={{ borderWidth: 1, borderColor: "grey" }}>
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

export default TagihanPulsa;

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
