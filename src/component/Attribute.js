import Lux from "@lespantsfancy/lux";

export default class Attribute extends Lux.Node.Struct {
    constructor(name) {
        super({
            Name: name,
            
            Value: 0
        }, {
            validators: {
                Value: Lux.Core.Enum.RegEx.INTEGER
            },
            reducers: {
                Value: attr => Lux.Core.Helper.Clamp(attr, 0)
            }
        });
    }
};