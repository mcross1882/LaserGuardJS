
class ColorChangingLine extends Polygon {
    constructor(length) {
        super([
            new Line(new Point(-length, 0), new Point(length, 0), ColorMapper.randomColor())
        ]);
        this.MAX_ITERATIONS = 120;
        this.iteration = 0;
    }

    draw(canvas) {
        if (this.iteration > this.MAX_ITERATIONS) {
            this.iteration = 1;
            this.lines[0].color = ColorMapper.randomColor();
        }
        this.iteration++;

        super.draw(canvas);
    }
}
