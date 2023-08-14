import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";

const NotifikasiAdmin = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<ScrollView>
				<Image source={require("../../logo-bpjs.png")} style={styles.img} />
				<View style={{ paddingHorizontal: 20 }}>
					<View style={styles.cardContainer}>
						<View style={styles.rowTop}>
							<View>
								<Text>Nama : Gatot</Text>
								<Text>NPP : 1234</Text>
							</View>
							<Text>Tanggal Pengajuan</Text>
						</View>
						<View style={styles.underline} />
						<View style={styles.rowName}>
							<Text>Nama Barang</Text>
							<Text>Jumlah Barang</Text>
						</View>
						<View style={styles.rowBtn}>
							<TouchableOpacity style={styles.btnAcc}>
								<Text style={{ color: "white" }}>Terima</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.btnReject}>
								<Text style={{ color: "white" }}>Tolak</Text>
							</TouchableOpacity>
						</View>
					</View>
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
