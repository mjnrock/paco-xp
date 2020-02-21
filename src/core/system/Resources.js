import Component from "../component/package";
import Enum from "../enum/package";

export default class Resources extends System {
    constructor(paco) {
        super(paco, Enum.Component.RESOURCES);
    }

    IsResource(comp) {
        return comp instanceof Component.Resource;
    }

    Spend(entity, resource, amount) {
        let comp = this.GetComponent(entity);
    }
};