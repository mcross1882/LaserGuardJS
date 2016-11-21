
class Circle extends Polygon {
    constructor(center, radius) {
        super([
            new Line(center, center, ColorMapper.randomTransparentColor()),
            new Line(center, center, ColorMapper.randomTransparentColor()),
            new Line(center, center, ColorMapper.randomTransparentColor()),
            new Line(center, center, ColorMapper.randomTransparentColor()),
        ]);

        this.LOWER_LEFT_QUAD  = 0;
        this.LOWER_RIGHT_QUAD = Math.PI * 0.5;
        this.UPPER_RIGHT_QUAD = Math.PI * 1;
        this.UPPER_LEFT_QUAD  = Math.PI * 1.5;

        this.center = center;
        this.radius = radius;
    }

    draw(canvas) {
        canvas.save();

        this.applyTransformations(canvas);

        var lines = this.getLines();
        canvas.strokeStyle = lines[0].color.color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.LOWER_LEFT_QUAD, this.LOWER_RIGHT_QUAD);
        canvas.stroke();

        canvas.strokeStyle = lines[1].color.color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.LOWER_RIGHT_QUAD, this.UPPER_RIGHT_QUAD);
        canvas.stroke();

        canvas.strokeStyle = lines[2].color.color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.UPPER_RIGHT_QUAD, this.UPPER_LEFT_QUAD);
        canvas.stroke();

        canvas.strokeStyle = lines[3].color.color;
        canvas.beginPath();
        canvas.arc(this.center.x, this.center.y, this.radius, this.UPPER_LEFT_QUAD, this.LOWER_LEFT_QUAD);
        canvas.stroke();

        canvas.restore();
    }
}
