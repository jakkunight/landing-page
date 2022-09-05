import React, { useContext } from "react";
import { useWindowDimensions } from "react-native";
import { NativeBaseProvider, Box, Center, Heading, Text, Image, Button, HStack, VStack, ScrollView } from "native-base";
//import Global from "./Global";

const MenuItem = () => {
	return (
		<Box>
			<Button>
				<Text>
					{"Item"}
				</Text>
			</Button>
		</Box>
	);
};

const StickyMenu = ({ children }) => {
	return (
		<HStack w={"100%"} h={"5%"} pos={"sticky"} top={0} left={0} zIndex={2} >
			{ children }
		</HStack>
	);
};

const Banner = () => {
	const { width, height } = useWindowDimensions();
	return (
		<Box>
			<Image source={require("./assets/splash.png")} w={width} h={height} />
		</Box>
	);
};

const ContactBar = () => {};

const Info = () => {
	return (
		<Center size={"100%"} w={"100%"} h={"100%"} >
			<Heading color={"primary.500"} >
				{"Jakku Night"}
			</Heading>
			<Text color={"primary.300"} >
				{"Hello"}
			</Text>
			<Text color={"primary.300"} >
				{"I am Jakku Night"}
			</Text>
			<Text color={"primary.300"} >
				{"And I am going to destroy everything in your LP"}
			</Text>
			<Text color={"primary.300"} >
				{"As a good HACKER"}
			</Text>
			<Text color={"primary.300"} >
				{"Bye!"}
			</Text>
		</Center>
	);
};

const App = () => {
	//const screenSize = useWindowDimensions();
	return (
		<NativeBaseProvider>
			<VStack w={"100%"} h={"100%"} size={"100%"} >
				<StickyMenu>
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
				</StickyMenu>
				<ScrollView>
					<Banner />
					<Info />
				</ScrollView>
			</VStack>
		</NativeBaseProvider>
	);
};

export default App;
