// import Lux from "@lespantsfancy/lux";

import Enum from "./../enum/package";
import Component from "./../component/package";
import Entity from "./Entity";

export default class Raccoon extends Entity {
    constructor(components = [], { name = null, attributes = {}, energy = {} } = {}) {
        super(
            Enum.Entity.RACCOON,
            [
                new Component.Attributes(attributes),
                new Component.Energy(energy),
                ...components
            ],
            { name }
        );
    }
};