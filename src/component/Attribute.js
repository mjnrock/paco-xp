import Lux from "@lespantsfancy/lux";

export default class Attribute extends Lux.Node.Struct {
    constructor() {
        super({
            Strength: 1,
            Agility: 1,
            Intelligence: 1,
            Wisdom: 1
        }, {
            validators: {
                Strength: Lux.Core.Enum.RegEx.INTEGER,
                Agility: Lux.Core.Enum.RegEx.INTEGER,
                Intelligence: Lux.Core.Enum.RegEx.INTEGER,
                Wisdom: Lux.Core.Enum.RegEx.INTEGER,
            },
            reducers: {
                Strength: attr => Lux.Core.Helper.Clamp(attr, 1),
                Agility: attr => Lux.Core.Helper.Clamp(attr, 1),
                Intelligence: attr => Lux.Core.Helper.Clamp(attr, 1),
                Wisdom: attr => Lux.Core.Helper.Clamp(attr, 1),
            }
        })
    }
};