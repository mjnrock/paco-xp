import Lux from "@lespantsfancy/lux";

import Enum from "./../enum/package";
// import Component from "./../component/package";

export default class Entity extends Lux.Node.Struct {
    static Type = Enum.Entity.GENERIC;

    constructor(components = [], { name = null } = {}) {
        super({
            Name: name,
            Components: components,

            Mask: 0
        });

        this.Components.forEach(comp => Lux.Core.Helper.Bitmask.Add(this.Mask, comp.Type));
    }

    $(type, returnState = false) {
        if(typeof type === "number") {
            let [ comp ] = this.Components.filter(c => c.GetType() === type);
    
            if (comp) {
                return returnState ? comp.getState() : comp;
            }
        } else if (typeof type === "string" || type instanceof String) {
            let [ comp ] = this.Components.filter(c => c.GetName() === type);

            if (comp) {
                return returnState ? comp.getState() : comp;
            }
        }
    }

    GetType() {
        return Object.getPrototypeOf(this).constructor.Type;
    }

    Tick(delta) {}
};