import { Block } from "./block";

export class Square extends Block {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }
    area(): number {
        return this.side * this.side;
    }
    circumference(): number {
        return this.side * 4;
    }
}
