import Lux from "@lespantsfancy/lux";

export default class Loop extends Lux.Node.Struct {
    constructor(fps = 24) {
        super({
            Ticks: 0,
            LastTime: null,

            FPS: fps,
            SPF: 1000 / fps,
            
            Timer: null,
        });
    }

    Start() {
        this.Timer = setInterval(() => this.Tick(), this.SPF);

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
        this.Ticks += 1;
    }
};