
class ScaleMatrix {

    constructor(xScale, yScale) {
        this.xScale = xScale;
        this.yScale = yScale;
    }

    transform(canvas) {
        canvas.scale(this.xScale, this.yScale);
    }
}

