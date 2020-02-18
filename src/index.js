import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Lux from "@lespantsfancy/lux";

Lux.React.Context.Observer.setSubject(new Lux.Node.Struct());

ReactDom.render(
	<App />,
	document.getElementById("root")
);