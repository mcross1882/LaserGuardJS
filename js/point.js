
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isEqual(other) {
        return this.x === other.x && this.y === other.y;
    }

    add(other) {
        return new Point(this.x + other.x, this.y + other.y);
    }

    subtract(other) {
        return new Point(this.x - other.x, this.y - other.y);
    }

    crossProduct(other) {
        return (this.x * other.y) - (this.y - other.x);
    }
}

