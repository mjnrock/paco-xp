import Lux from "@lespantsfancy/lux";

import Enum from "../enum/package";
import BoundedQuantity from "../lib/BoundedQuantity";

export default class Location extends Lux.Node.Struct {
    constructor(map, x, y) {
        super({
            Map: map,
            X: new BoundedQuantity(x, 0),
            Y: new BoundedQuantity(y, 0),
            // X: new BoundedQuantity(x, 0, map.Width),
            // Y: new BoundedQuantity(x, 0, map.Height),

            Type: Enum.Component.LOCATION
        });
    }
};