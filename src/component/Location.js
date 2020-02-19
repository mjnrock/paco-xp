import Component from "./Component";
import Enum from "../enum/package";
import BoundedQuantity from "../lib/BoundedQuantity";

export default class Location extends Component {
    static Type = Enum.Component.LOCATION;
    static Name = "Location";

    constructor({ map = null, x = 0, y = 0 } = {}) {
        super({
            Map: map,
            X: new BoundedQuantity(x, 0),
            Y: new BoundedQuantity(y, 0),
            // X: new BoundedQuantity(x, 0, map.Width),
            // Y: new BoundedQuantity(x, 0, map.Height)
        });
    }
};