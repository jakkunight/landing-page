// General info about compossing UI:
// Import createContext():
import { useContext } from "react";

// Define some constants:
const constants = {
	commonAspectRatios: [16 / 9, 16 / 10, 4 / 3],
	genericAspectRatio: 512 / 135,
	defaultBackgroundColor: "#000000",
	defaultSlug: "Jakku Night",
	defautHomePage: "https://jakkunight.github.io/landing-page",
	
};

// Create and export the context:
const Global = useContext(constants);

export default Global;
