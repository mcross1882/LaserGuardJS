
class ColorChangingLine extends Polygon {
    constructor(length) {
        super([new Line(new Point(-length, 0), new Point(length, 0))]);
        this.MAX_ITERATIONS = 120;
        this.iteration = 0;
        this.currentColor = ColorMapper.randomColor().color;
    }

    draw(canvas) {
        if (this.iteration > this.MAX_ITERATIONS) {
            this.iteration = 1;
            this.currentColor = ColorMapper.randomColor().color;
        }
        this.iteration++;

        super.draw(canvas);
    }
}
