import Lux from "@lespantsfancy/lux";

export default class Loop extends Lux.Core.Struct {
    constructor(fps = 24) {
        super({
            Tick: 0,
            LastTime: null,

            FPS: fps,
            SPF: 1000 / fps,
            
            Timer: null,
        });
    }

    Start() {
        this.Timer = setInterval(this.Tick, this.SPF);

        return this;
    }
    Stop() {
        clearInterval(this.Timer);

        return this;
    }

    Tick() {
        let now = Date.now(),
            delta = now - this.LastTime;

        this.trigger("tick", delta);

        this.LastTime = now;
        this.Tick += 1;
    }
};