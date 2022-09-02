import React, {} from "react";
import { useWindowDimensions } from "react-native";
import { NativeBaseProvider, Center, Heading, Text } from "native-base";

const App = () => {
	const screenSize = useWindowDimensions();
	return (
		<NativeBaseProvider>
			<Center h={screenSize.height} w={screenSize.width} size={"100%"} bgColor={"black"} >
				<Heading color={"white"} >
					{"Hello Doumo App!!!"}
				</Heading>
				<Text color={"#AAAAAA"} >
					{"Hello Doumo!"}
				</Text>
			</Center>
		</NativeBaseProvider>
	);
};

export default App;
