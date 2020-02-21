import Component from "./Component";
import Enum from "../enum/package";
import Item from "./../lib/Item";

export default class Inventory extends Component {
    static Type = Enum.Component.INVENTORY;
    static Name = "Inventory";

    constructor(width, height, { items = {}  } = {}) {
        super({
            Width: width,
            Height: height,

            Slots: items
        });
    }

    GetSlot(x, y) {
        return this.Slots[ `${ x }.${ y }` ];
    }
    SetSlot(x, y, item) {
        if(item instanceof Item) {
            this.Slots[ `${ x }.${ y }` ] = item;

            this.trigger("set", {
                x,
                y,
                item
            });
        }

        return this;
    }
    RemoveSlot(x, y) {
        delete this.Slots[ `${ x }.${ y }` ];
    }

    IsEmptySlot(x, y) {
        return !this.GetSlot(x, y);
    }

    SwapSlot(x0, y0, x1, y1) {
        let item0 = this.GetSlot(x0, y0);
        let item1 = this.GetSlot(x1, y1);

        this.SetSlot(x0, y0, item1);
        this.SetSlot(x1, y1, item0);

        this.trigger("swap", [{
            x: x0,
            y: y0
        }, {
            x: x1,
            y: y1
        }]);

        return this;
    }

    AddItem(item) {
        if(item instanceof Item) {
            for(let x = 0; x < this.Width; x++) {
                for(let y = 0; y < this.Height; y++) {
                    if(this.IsEmptySlot(x, y)) {
                        this.SetSlot(x, y, item);

                        return { x, y };
                    }
                }
            }
        }

        return false;
    }

    ToArray() {        
        let entries = [];
        for(let y = 0; y < this.Height; y++) {
            let row = [];
            for(let x = 0; x < this.Width; x++) {
                row.push(this.GetSlot(x, y));
            }

            entries.push(row);
        }

        return entries;
    }
};