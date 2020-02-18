import Lux from "@lespantsfancy/lux";

export default class ExperienceAttribute extends Lux.Node.Struct {
    constructor(name) {
        super({
            Name: name,

            Value: 0,
            Min: 0,
            Max: Number.MAX_SAFE_INTEGER,

            Level: 1,
            Experience: 0,

            Meta: {
                RequiredXP: level => level * (level + 1) * 500,
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

        this.subscribe(e => {
            console.log(2222);
            if(e.getType() === "change") {
                console.log(2222);
            }
        });
    }

    LevelUp() {
        if(this.Experience >= this.Meta.RequiredXP(this.Level + 1)) {
            this.Level += 1;
            this.Experience = Lux.Core.Helper.Clamp(this.Experience - this.Meta.RequiredXP(this.Level - 1), 0);

            this.Max += this.Meta.GainsPerLevel.Max;
            this.Min += this.Meta.GainsPerLevel.Min;
            this.Value += this.Meta.GainsPerLevel.Value;
        }
    }
};