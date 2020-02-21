import Lux from "@lespantsfancy/lux";

export default class Component extends Lux.Node.Struct {
    static Type = null;
    static Name = null;

    constructor(state, { validators = {}, reducers = {} } = {}) {
        super(state, { validators, reducers });
    }

    GetType() {
        return Object.getPrototypeOf(this).constructor.Type;
    }
    GetName() {
        return Object.getPrototypeOf(this).constructor.Name;
    }
};