
class AnimationTranslateMatrix {

    constructor(x, y, deltaX, deltaY) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX || 0;
        this.deltaY = deltaY || 0;
    }

    transform(canvas) {
        canvas.translate(this.x += this.deltaX, this.y += this.deltaY);
    }
}

