import Lux from "@lespantsfancy/lux";

export default class Grid extends Lux.Entry.Entry {
    constructor(width, height, { entries = {}, populator = null, keyFunction = null } = {}) {
        this.meta("Width", width >>> 0);
        this.meta("Height", height >>> 0);

        if(typeof keyFunction === "function") {
            this.meta("KeyFunction", keyFunction);
        } else {
            this.meta("KeyFunction", (x, y) => `${ x }.${ y }`);
        }

        let entrySeed = {};
        if(typeof populator === "function") {
            entrySeed = populator(width, height, entries);
        } else {
            for(let y = 0; y < height; y++) {
                for(let x = 0; x < width; x++) {
                    entrySeed[ this.meta("KeyFunction")(x, y) ] = null;
                }
            }
        }

        this.prop("Entries", entrySeed);        
    }

    IsWithinRange(x, y) {
        return x >= 0 && x < this.meta("Width") && y >= 0 && y < this.meta("Height");
    }

    GetEntry(x, y) {
        if(this.IsWithinRange(x, y)) {
            return this.oprop("Entries", this.meta("KeyFunction")(x, y));
        }

        return false;
    }
    SetEntry(x, y, entry) {
        if(this.IsWithinRange(x, y)) {
            this.oprop("Entries", this.meta("KeyFunction")(x, y), entry);
        }

        return false;
    }

    GetRect(x0, y0, x1, y1, performUnsafely = false) {
        let Entries = this.prop("Entries"),
            entries = {};

        if(performUnsafely === true) {
            // This will ignore valid ranges and only register entries when the coordinates have a corresponding key
            for(let y = y0; y < x1; y++) {
                for(let x = x0; x < x1; x++) {
                    let entry = Entries[ this.meta("KeyFunction")(x, y) ];

                    if(entry) {
                        entries[ this.meta("KeyFunction")(x, y) ] = entry;
                    }
                }
            }

            return entries;
        } else if(this.IsWithinRange(x0, y0) && this.IsWithinRange(x1, y1)) {
            for(let y = y0; y < x1; y++) {
                for(let x = x0; x < x1; x++) {
                    entries[ this.meta("KeyFunction")(x, y) ] = Entries[ this.meta("KeyFunction")(x, y) ];
                }
            }

            return entries;
        }

        return false;
    }
    GetCircle(x0, y0, r) {
        if(this.IsWithinRange(x0, y0)) {
            let Entries = this.prop("Entries"),
                entries = {};

            let top = Math.max(0, y0 - r),
                bottom = Math.min(this.meta("Height"), y0 + r);

            for(let y = top; y <= bottom; y++) {
                let dy = y - y0,
                    dx = parseInt(Math.floor(Math.sqrt(r * r - dy * dy)));

                let left = Math.max(0, x0 - dx),
                    right = Math.min(this.meta("Width"), x0 + dx);

                for(let x = left; x <= right; x++) {
                    entries[ this.meta("KeyFunction")(x, y) ] = Entries[ this.meta("KeyFunction")(x, y) ];
                }
            }

            return entries;
        }

        return false;
    }


    ToArray() {
        let entries = [];
        for(let y = 0; y < this.prop("Height"); y++) {
            let row = [];
            for(let x = 0; x < this.prop("Width"); x++) {
                row.push(Entries[ this.meta("KeyFunction")(x, y) ]);
            }

            entries.push(row);
        }

        return entries;
    }
};