import Lux from "@lespantsfancy/lux";

import Enum from "../enum/package";
import BoundedQuantity from "../lib/BoundedQuantity";

export default class Energy extends Lux.Node.Struct {
    constructor({ health = 0, mana = 0 } = {}) {
        super({
            Health: new BoundedQuantity(health, { min: 0, max: health }),
            Mana: new BoundedQuantity(mana, { min: 0, max: mana }),

            Type: Enum.Component.ENERGY
        });
    }
};