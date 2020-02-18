import Lux from "@lespantsfancy/lux";

export default class Experience extends Lux.Node.Struct {
    constructor(name) {
        super({
            Name: name,

            Level: 1,
            Experience: 0,

            Meta: {
                RequiredXP: level => level * (level + 1) * 500
            }
        });

        this.watch("Experience", this.LevelUp.bind(this));
    }

    LevelUp() {
        if(this.Experience >= this.Meta.RequiredXP(this.Level + 1)) {
            this.Level += 1;            
            this.Experience = Lux.Core.Helper.Clamp(this.Experience - this.Meta.RequiredXP(this.Level - 1), 0);
        }
    }
};