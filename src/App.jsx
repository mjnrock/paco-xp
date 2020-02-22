import React from "react";
import Lux from "@lespantsfancy/lux";

import Paco from "./core/package";

const PacoGame = new Paco.Main();

// for(let i = 0; i < 400; i++) {
//     let Raccoon = new Paco.Entity.Raccoon();
//     PacoGame.Game.Managers.Entity.Register(Raccoon.UUID(), Raccoon);
// }
let Raccoon = new Paco.Entity.Raccoon();
PacoGame.Game.Managers.Entity.Register(Raccoon.UUID(), Raccoon);

export default class App extends Lux.React.ObserverComponent {
    // componentDidMount() {
    //     PacoGame.Game.Loop.subscribe(e => {
    //         if(e.getType() === "tick") {
    //             this.forceUpdate();
    //         }
    //     });
    // }

    render() {
        return (
            <div>
                <div>
                    <h2>Attributes</h2>
                    <ul>
                        { Object.values(Raccoon.$("Attributes", true)).map(attr => (
                            <li key={ attr.UUID() }>{ attr.Value }</li>
                        )) }
                    </ul>
                </div>
                <div>
                    <h2>Energy</h2>
                    <ul>
                        { Object.values(Raccoon.$("Energy", true)).map(attr => (
                            <li key={ attr.UUID() }>{ attr.Value } / { attr.Max }</li>
                        )) }
                    </ul>
                </div>
            </div>
        );
    }
};