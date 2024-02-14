import { Block } from "./block";

export class Rectangle extends Block {
    sideA: number;
    sideB: number;
    constructor(sideA: number, sideB: number) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
    }
    area(): number {
        return this.sideA * this.sideB;
    }
    circumference(): number {
        return this.sideA * 2 + this.sideB * 2;
    }
}
