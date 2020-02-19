import Lux from "@lespantsfancy/lux";

import Enum from "./../enum/package";
import Quantity from "./../lib/Quantity";

export default class Attributes extends Lux.Node.Struct {
    constructor({ str = 0, agi = 0, int = 0, wis = 0 } = {}) {
        super({
            Strength: new Quantity(str),
            Agility: new Quantity(agi),
            Intelligence: new Quantity(int),
            Wisdom: new Quantity(wis),

            Type: Enum.Component.ATTRIBUTES
        });
    }
};