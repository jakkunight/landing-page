import React, {  } from "react";
import { useWindowDimensions } from "react-native";
import { Box, VStack, ScrollView ,Heading} from "native-base";

const Home = ({ navigation }) => {
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
						{"Landing Page"}
					</Heading>
				</VStack>
			</ScrollView>
		</Box>
	);
};

export default Home;
