import Lux from "@lespantsfancy/lux";

// import Component from "./../component/package";

export default class Entity extends Lux.Node.Struct {
    constructor(type, components = [], { name = null } = {}) {
        super({
            Name: name,
            Components: components,

            Type: type,
            Mask: 0
        });

        this.Components.forEach(comp => Lux.Core.Helper.Bitmask.Add(this.Mask, comp.Type));
    }
};