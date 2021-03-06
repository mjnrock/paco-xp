import Enum from "./Enum";

export default class Component extends Enum {
    constructor() {
        super({
            ATTRIBUTES: 2 << 0,
            RESOURCES: 2 << 1,
            ENERGY: 2 << 2,
            LOCATION: 2 << 3,
            INVENTORY: 2 << 4,
        });
    }
};