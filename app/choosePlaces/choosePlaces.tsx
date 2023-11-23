import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
	{
		Title: "Jollibee",
		Description: "Glendale, Los Angeles, CA",
		Distance: 1.3,
		ImgUrl:
			"https://www.sgvtribune.com/wp-content/uploads/2022/05/SGV-L-DINE-JOLLIBEE-0527-01-1.jpg?w=620",
	},
	{
		Title: "Chowking",
		Description: "Glendale, Los Angeles, CA",
		Distance: 1.1,
		ImgUrl:
			"https://www.chowkingusa.com/cdn/shop/files/locations.jpg?v=1633734248&width=1080",
	},
	{
		Title: "Red Ribbon",
		Description: "Glendale, Los Angeles, CA",
		Distance: 0.4,
		ImgUrl:
			"https://s.hdnux.com/photos/01/33/02/00/23863341/3/ratio3x2_700.jpg",
	},
];

export default function ChoosePlaces() {
	return (
		<View className="flex-1 bg-white">
			<View className="flex-1 -mt-6">
				<Swiper
					containerStyle={{ backgroundColor: "transparent" }}
					cards={DUMMY_DATA}
					stackSize={5}
					cardIndex={0}
					animateCardOpacity
					renderCard={(card) => (
						<View className="bg-red-600 h-3/4 rounded-xl">
							<Image
								className="absolute top-0 h-full w-full rounded-xl"
								source={{ uri: card.ImgUrl }}
							/>
							<View className="absolute bottom-0 bg-white mx-2 my-2 p-2 flex-row justify-between items-center ">
								<View>
									<Text className="text-lg font-bold">{card.Title}</Text>
									<Text className="text-sm">{card.Description}</Text>
								</View>
								<Text className="text-2xl font-bold">{card.Distance} Mi</Text>
							</View>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

//
