import Component from "../component/package";
import Enum from "../enum/package";

export default class Inventory extends System {
    constructor(paco) {
        super(paco, Enum.Component.INVENTORY);
    }

    IsInventory(comp) {
        return comp instanceof Component.Inventory;
    }

    AddItem(entity, item) {
        let comp = this.GetComponent(entity);

        if(this.IsInventory(comp)) {
            comp.AddItem(item);
        }
    }
};