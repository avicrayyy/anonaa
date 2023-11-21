import { Button, StyleSheet } from "react-native";
import { useState } from "react";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TextInput } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function TabOneScreen() {
	const [searchInput, setSearchInput] = useState<string>("");

	const handleSearch = (): void => {
		console.log("this is the search input", searchInput);
		router.push("/choosePlaces/choosePlaces");
	};

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text style={styles.title}>What do you want to do?</Text>
			{/* <View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<EditScreenInfo path="app/(tabs)/index.tsx" /> */}
			<View className="space-x-2 bg-gray-200 p-3">
				<TextInput
					placeholder="I want to eat hamburgers"
					keyboardType="default"
					onChangeText={setSearchInput} // Added to update searchInput state
					value={searchInput} // Added to control the inpu
				/>
			</View>
			<Button title="Search" onPress={handleSearch} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
