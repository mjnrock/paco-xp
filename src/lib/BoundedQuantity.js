import Lux from "@lespantsfancy/lux";

export default class BoundedQuantity extends Lux.Node.Struct {
    constructor(value, { min = null, max = null, name = null } = {}) {
        super({
            Name: name,

            Value: value,
            Min: min,
            Max: max === void 0 ? Number.MAX_SAFE_INTEGER : max
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