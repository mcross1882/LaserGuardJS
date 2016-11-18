
class Square extends Polygon {
    constructor(top, left, bottom, right) {
        super([
            new Line(top, left, ColorMapper.randomColor()),
            new Line(left, bottom, ColorMapper.randomColor()),
            new Line(bottom, right, ColorMapper.randomColor()),
            new Line(right, top, ColorMapper.randomColor())
        ]);
    }
}
