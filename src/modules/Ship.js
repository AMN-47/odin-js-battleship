export default class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.hitPositions = new Set();
    }
    hit(position) {
        if (!this.hitPositions.has(position)) {
            
        }
    }
}