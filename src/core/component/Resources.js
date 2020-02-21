import Component from "./Component";
import Enum from "./../enum/package";
import BoundedQuantity from "./../lib/BoundedQuantity";

export default class Resources extends Component {
    static Type = Enum.Component.RESOURCES;
    static Name = "Resources";

    constructor({ wood = 0, food = 0 } = {}) {
        super({
            Wood: new BoundedQuantity(wood, { min: 0 }),
            Food: new BoundedQuantity(food, { min: 0 })
        });
    }
};