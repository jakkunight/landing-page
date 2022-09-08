import React, {  } from "react";
import { useWindowDimensions } from "react-native";
import { Box, VStack, ScrollView } from "native-base";

const Home = () => {
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
				</VStack>
			</ScrollView>
		</Box>
	);
};

export default Home;
