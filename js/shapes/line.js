
class Line {
    constructor(start, end, color) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.slope = (end.y - start.y) / (end.x - start.x);
        this.intercept = start.y - (this.slope * start.x);
    }
}
