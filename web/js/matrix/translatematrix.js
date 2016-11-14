
class TranslateMatrix {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    transform(canvas) {
        canvas.translate(this.x, this.y);
    }
}

