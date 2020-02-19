import React from "react";
import ReactDom from "react-dom";
import Lux from "@lespantsfancy/lux";

import App from "./App";

Lux.React.Context.Observer.setSubject(new Lux.Node.Struct({
    fish: 1
}));

ReactDom.render(
	<App />,
	document.getElementById("root")
);