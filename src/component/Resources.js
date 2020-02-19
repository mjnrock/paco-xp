import Lux from "@lespantsfancy/lux";

import Enum from "./../enum/package";
import BoundedQuantity from "./../lib/BoundedQuantity";

export default class Resources extends Lux.Node.Struct {
    constructor({ wood = 0, food = 0 } = {}) {
        super({
            Wood: new BoundedQuantity(wood, { min: 0 }),
            Food: new BoundedQuantity(food, { min: 0 }),

            Type: Enum.Component.RESOURCES
        });
    }
};