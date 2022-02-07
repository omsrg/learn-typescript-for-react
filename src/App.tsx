import React from "react";
import "./App.css";
import EpsOne from "./01-properties/01-props";
import EpsTwo from "./02-hooks/02-hooks";
import EpsThree from "./03-advanced-properties/03-props";
import EpsFour from "./04-custom-hooks/customHooks";

function App() {
	return (
		<div className="App">
			<EpsOne />
			<EpsTwo />
			<EpsThree />
			<EpsFour />
		</div>
	);
}

export default App;
