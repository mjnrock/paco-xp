// import Lux from "@lespantsfancy/lux";

import Enum from "./../enum/package";
import Component from "./../component/package";
import Entity from "./Entity";

export default class Raccoon extends Entity {
    static Type = Enum.Entity.RACCOON;

    constructor(components = [], { name = null, attributes = {}, energy = {} } = {}) {
        super([
                new Component.Attributes({
                    str: 1,
                    agi: 4,
                    int: 2,
                    wis: 1
                }),
                new Component.Energy({
                    health: 10,
                    mana: 10,
                }),
                // new Component.Energy(energy),
                ...components
        ], {
            name
        });
    }

    Tick(delta) {}
};