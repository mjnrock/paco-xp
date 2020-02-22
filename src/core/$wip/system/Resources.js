import Component from "../component/package";
import Enum from "../enum/package";
import BoundedQuantity from "../lib/BoundedQuantity";

export default class Resources extends System {
    constructor(paco) {
        super(paco, Enum.Component.RESOURCES);
    }

    IsResource(comp) {
        return comp instanceof Component.Resources;
    }

    CheckAddResource(entity, resource, amount) {
        let comp = this.GetComponent(entity);

        if(this.IsResource(comp) && comp[ resource ] instanceof BoundedQuantity) {
            return comp[ resource ].Test.AddAmount(amount);
        }

        return false;
    }

    Spend(entity, resource, amount) {
        if(amount > 0 && this.CheckAddResource(entity, resource, amount)) {
            let comp = this.GetComponent(entity);

            comp[ resource ].Value -= amount;

            return true;
        }

        return false;
    }
    Gain(entity, resource, amount) {
        if(amount > 0 && this.CheckAddResource(entity, resource, amount)) {
            let comp = this.GetComponent(entity);

            comp[ resource ].Value += amount;

            return true;
        }

        return false;
    }
};