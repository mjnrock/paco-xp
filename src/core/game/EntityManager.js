import Manager from "./Manager";

export default class EntityManager extends Manager {
    GetEntity(uuidOrName) {
        if(this.Registry[ uuidOrName ]) {
            return this.Registry[ uuidOrName ];
        } else {
            let entities = Object.values(this.Registry).filter(ent => ent.Name === uuidOrName);

            if(entities.length) {
                return entities;
            }
        }

        return false;
    }

    Tick(delta) {
        Object.values(this.Registry).forEach(ent => ent.Tick(delta));
    }
}