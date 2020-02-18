import Lux from "@lespantsfancy/lux";

export default class BoundedAttribute extends Lux.Node.Struct {
    constructor(name) {
        super({
            Name: name,
            
            Value: 0,
            Min: 0,
            Max: Number.MAX_SAFE_INTEGER
        }, {
            validators: {
                Value: Lux.Core.Enum.RegEx.INTEGER,
                Min: Lux.Core.Enum.RegEx.INTEGER,
                Max: Lux.Core.Enum.RegEx.INTEGER,
            },
            reducers: {
                Value: attr => Lux.Core.Helper.Clamp(attr, this.Min, this.Max)
            }
        });
    }
};