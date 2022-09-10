import React, {} from "react";
import { useWindowDimensions } from "react-native";
import { ScrollView, VStack, Box, Text, Heading } from "native-base";
import {} from "@expo/vector-icons";

const IndexItem = ({ textLabel }) => {
	return (
		<Box>
			<Text>
				{textLabel}
			</Text>
		</Box>
	);
};

const Index = ({ itemList }) => {
	const { width, height } = useWindowDimensions();
	return (
		<ScrollView>
			<VStack w={ width * 10 / 100 } h={ height } bgColor={"primary.400"} >
				{
					itemList.map((element) => {
						return (
							<IndexItem textLabel={ element } />
						);
					})
				}
			</VStack>
		</ScrollView>
	);
};

export default Index;
