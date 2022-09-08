import React, { useContext } from "react";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import Home from "./routes/Home.js";

const Stack = createNativeStackNavigator(); // Creates the stack navigator.

const App = () => {
	const { height, width } = useWindowDimensions();
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Stack>
					<Stack.Screen name={"name"} component={Home} />
				<Stack>
			</NavigationContainer>
		</NativeBaseProvider>
	);
};

export default App;
