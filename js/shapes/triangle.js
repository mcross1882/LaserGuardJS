
class Triangle extends Polygon {
    constructor(top, left, right) {
        super([
            new Line(top, left, ColorMapper.randomColor()),
            new Line(left, right, ColorMapper.randomColor()),
            new Line(right, top, ColorMapper.randomColor()),
        ]);
    }
}
