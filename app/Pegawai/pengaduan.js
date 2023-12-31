import React from "react";
import {
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	View,
	TextInput,
} from "react-native";

const Pengaduan = () => {
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
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
			<View style={{ alignItems: "center", width: 250, marginTop: 10 }}>
				<Text style={{ fontSize: 20 }}>Catatan Pengaduan</Text>
			</View>
			<View style={{ width: 250, marginTop: 15 }}>
				<TextInput
					placeholder="Kategori"
					style={{
						borderWidth: 0.7,
						borderRadius: 10,
						padding: 5,
						borderColor: "grey",
					}}
				/>
			</View>
			<View style={{ width: 250, marginTop: 15 }}>
				<TextInput
					placeholder="Keterangan"
					style={{
						borderColor: "grey",
						borderWidth: 0.7,
						borderRadius: 10,
						padding: 30,
					}}
				/>
			</View>
			<View
				style={{
					width: "70%",
					margin: 20,
					alignItems: "center",
					marginLeft: 40,
					marginTop: 50,
					marginBottom: 50,
				}}
			>
				<TouchableOpacity
					style={{
						backgroundColor: "green",
						alignItems: "center",
						padding: 20,
						borderRadius: 20,
					}}
					onPress={() => {}}
				>
					<Text style={{ fontSize: 15 }}>Kirim</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Pengaduan;
