export default class Enum {
    constructor(state = {}) {
        this._state = state;

        return new Proxy(this, {
            get: (obj, prop) => {
                if (obj._state[ prop ] !== void 0) {    // Allow proxy to look into state as a first priority, else return the native prop
                    return obj._state[ prop ];
                }

                return obj[ prop ];
            },
            set: (obj, prop, value) => {
                return true;
            }
        });
    }

    hasValue(value) {
        return Object.values(this._state).includes(value);
    }

    getKey(value) {
        Object.entries(this._state).forEach(v => {
            let [ key, val ] = v;

            if(val === value) {
                return key;
            }
        });

        return;
    }
};