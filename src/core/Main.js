import Paco from "./package";

export default class Main {
    constructor() {
        this.Game = {
            Loop: new Paco.Game.Loop(12),
            Managers: {}
        };

        this.Game.Managers = {
            Entity: new Paco.Game.EntityManager(this)
        };

        this.Game.Loop.setHandler("tick", this.Tick.bind(this));
        this.Game.Loop.Start();
    }

    Tick(delta) {
        Object.values(this.Game.Managers).forEach(m => m.Tick(delta));
    }
};