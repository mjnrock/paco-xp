import React from "react";
import Lux from "@lespantsfancy/lux";

import Paco from "./core/package";

const Raccoon = new Paco.Entity.Raccoon();

// console.log(Raccoon.$(Paco.Enum.Component.ATTRIBUTES).Strength.Value);
console.log(Raccoon.$("Attributes"));
console.log(Raccoon.$("Attributes").GetName());
console.log(Raccoon.$("Attributes").GetType());
console.log(Raccoon);
console.log(Raccoon.GetType());
console.log(Object.getPrototypeOf(Raccoon));

export default class App extends Lux.React.ObserverComponent {
    render() {
        return (
            <div>
                <pre className="b">{ Lux.Core.Helper.StringifyCyclic(Raccoon.$("Attributes"), 2) }</pre>
            </div>
        );
    }
};