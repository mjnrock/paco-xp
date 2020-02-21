import Lux from "@lespantsfancy/lux";

import Component from "./../component/package";
import Enum from "./../enum/package";
import Entity from "../entity/Entity";

export default class Inventory {
    constructor(paco) {
        super({
            Paco: paco,

            Type: Enum.Component.INVENTORY
        });
    }

    GetComponent(entity) {
        if(entity instanceof Entity) {
            return entity.$(this.Type);
        }

        return false;
    }

    AddItem(entity, item) {
        let comp = this.GetComponent(entity);

        if(comp instanceof Component.Inventory) {
            comp.AddItem(item);
        }
    }
};