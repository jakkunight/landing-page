import React, {  } from "react";
import { useWindowDimensions } from "react-native";
import { Box, VStack, ScrollView, Heading, Text, Button, HStack } from "native-base";
import Index from "../components/Index.js";

const fakeData = [
	"Introduction",
	"Topic 1",
	"Topic 2",
	"Topic 3",
	"Conclusion"
];

const Test = ({ navigation }) => {
	const { height, width } = useWindowDimensions();
	const { navigate } = navigation;
	return (
		<HStack w={"100%"} h={"100%"} size={"100%"} bgColor={"black"} >
			{
				// Here goes the "StickyMenu":
			}
			<Index itemList={ fakeData } />
			<ScrollView h={height} pos={"fixed"} top={0} w={"100%"} >
				<VStack>
					{
						// Here goes the remainder components:
					}
					<Heading color={"primary.200"} >
						{"Test Page"}
					</Heading>
					<Button onPress={() => { navigate("Home") }} >
						<Text>
							{"Home"}
						</Text>
					</Button>
				</VStack>
			</ScrollView>
		</HStack>
	);
};

export default Test;
