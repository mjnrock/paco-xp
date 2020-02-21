import Lux from "@lespantsfancy/lux";

export default class Quantity extends Lux.Node.Struct {
    constructor(value) {
        super({            
            Value: value
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