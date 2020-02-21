import Lux from "@lespantsfancy/lux";

export default class Experience extends Lux.Node.Struct {
    constructor({ level = 1, experience = 0 } = {}) {
        super({
            Level: level,
            Experience: experience,

            Meta: {
                RequiredXP: level => level * 1000,
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