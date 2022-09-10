import React, {  } from "react";
import { useWindowDimensions } from "react-native";
import { Box, VStack, ScrollView, Heading, Text, Button } from "native-base";

const Test = ({ navigation }) => {
	const { height, width } = useWindowDimensions();
	const { navigate } = navigation;
	return (
		<Box w={"100%"} h={"100%"} size={"100%"} bgColor={"black"} >
			{
				// Here goes the "StickyMenu":
			}
			<ScrollView h={height} pos={"fixed"} top={0} left={0} >
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
		</Box>
	);
};

export default Test;
