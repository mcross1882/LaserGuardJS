
class Line {
    constructor(start, end, color) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.slope = (end.y - start.y) / (end.x - start.x);
        this.intercept = start.y - (this.slope * start.x);
    }

    draw(canvas) {
        canvas.save();
        canvas.strokeStyle = this.color.color;
        canvas.beginPath();
        canvas.moveTo(this.start.x, this.start.y);
        canvas.lineTo(this.end.x, this.end.y);
        canvas.stroke();
        canvas.restore();
    }
}
