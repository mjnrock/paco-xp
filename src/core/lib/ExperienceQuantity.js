import Lux from "@lespantsfancy/lux";

export default class ExperienceQuantity extends Lux.Node.Struct {
    constructor(value, { level = 1, experience = 0, min = null, max = null } = {}) {
        super({
            Value: value,
            Min: min,
            Max: max === void 0 ? Number.MAX_SAFE_INTEGER : max,

            Level: level,
            Experience: experience,

            Meta: {
                RequiredXP: level => level * 1000,
                GainsPerLevel: {
                    Value: 1,
                    Min: 0,
                    Max: 1
                }
            }
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

        this.watch("Experience", this.LevelUp.bind(this));
    }

    LevelUp() {
        if(this.Experience >= this.Meta.RequiredXP(this.Level + 1)) {
            this.Level += 1;

            if(this.Max < Math.MAX_SAFE_INTEGER) {
                this.Max += this.Meta.GainsPerLevel.Max;
            }

            this.Min += this.Meta.GainsPerLevel.Min;
            this.Value += this.Meta.GainsPerLevel.Value;
            
            this.Experience = Lux.Core.Helper.Clamp(this.Experience - this.Meta.RequiredXP(this.Level - 1), 0);
        }
    }
};