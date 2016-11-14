
class Circle extends Polygon {
    constructor(center, radius) {
        super([new Line(center, center)]);

        this.LOWER_LEFT_QUAD  = 0;
        this.LOWER_RIGHT_QUAD = Math.PI * 0.5;
        this.UPPER_RIGHT_QUAD = Math.PI * 1;
        this.UPPER_LEFT_QUAD  = Math.PI * 1.5;

        this.center = center;
        this.radius = radius;
    }

    draw(canvas) {
        canvas.save();

        canvas.lineWidth = 6;

        this.applyTransformations(canvas);

        canvas.strokeStyle = ColorMapper.colors[0].color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.LOWER_LEFT_QUAD, this.LOWER_RIGHT_QUAD);
        canvas.stroke();

        canvas.strokeStyle = ColorMapper.colors[1].color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.LOWER_RIGHT_QUAD, this.UPPER_RIGHT_QUAD);
        canvas.stroke();

        canvas.strokeStyle = ColorMapper.colors[2].color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.UPPER_RIGHT_QUAD, this.UPPER_LEFT_QUAD);
        canvas.stroke();

        canvas.strokeStyle = ColorMapper.colors[3].color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.UPPER_LEFT_QUAD, this.LOWER_LEFT_QUAD);
        canvas.stroke();

        canvas.restore();
    }
}
