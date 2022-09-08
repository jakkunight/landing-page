import React, { useContext } from "react";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import Home from "./routes/Home.js";
import Test from "./routes/Test.js";

const Stack = createNativeStackNavigator(); // Creates the stack navigator.

const App = () => {
	const { height, width } = useWindowDimensions();
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Stack>
					<Stack.Screen name={"Home"} component={Home} />
					<Stack.Screen name={"Test"} component={Test} >
				<Stack>
			</NavigationContainer>
		</NativeBaseProvider>
	);
};

export default App;
