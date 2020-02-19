import Lux from "@lespantsfancy/lux";

import BoundedQuantity from "./BoundedQuantity";

export default class Item extends Lux.Node.Struct {
    constructor(type, { components = [], qty = 1, name = null } = {}) {
        super({
            Type: type,

            Name: name,
            Quantity: new BoundedQuantity(qty, { min = 0 }),
            Components: components,

            onActivate: null,

            onIncrement: null,
            onDecrement: null,
            onZero: null,
        });

        this.watch("Quantity", e => {
            let { current, previous } = e.getPayload();

            if(current > previous && typeof this.onIncrement === "function") {
                this.onIncrement(this);
            } else if(current < previous && typeof this.onDecrement === "function") {
                this.onDecrement(this);
            } else if(current === 0 && typeof this.onZero === "function") {
                this.onZero(this);
            }
        });
    }

    Use() {
        if(typeof this.onActivate === "function") {
            this.onActivate(this);
        }

        this.Quantity -= 1;
    }
};