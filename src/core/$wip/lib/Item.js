import Lux from "@lespantsfancy/lux";

import BoundedQuantity from "../../lib/BoundedQuantity";

export default class Item extends Lux.Node.Struct {
    constructor(type, { components = [], qty = 1, name = null } = {}) {
        super({
            Type: type,

            Name: name,
            Quantity: new BoundedQuantity(qty, { min = 0 }),
            Components: components
        });

        this.watch("Quantity", e => {
            let { current, previous } = e.getPayload();

            if(current > previous) {
                this.trigger("increment", this.Quantity);
            } else if(current < previous) {
                this.trigger("decrement", this.Quantity);
            } else if(current === 0) {
                this.trigger("zero");
            }
        });
    }

    Use(amount = 1) {
        for(let i = 0; i < amount; i++) {
            if(this.Quantity > 0) {
                this.Quantity -= 1;

                this.trigger("activate", [ this.Quantity, this.Components ]);
            } else {
                return this;
            }
        }

        return this;
    }
};