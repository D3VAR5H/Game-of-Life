import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import GameOfLife from "./components/GameOfLife";

ReactDOM.render(
	<StrictMode>
		<GameOfLife />
	</StrictMode>,
	document.getElementById("root")
);
