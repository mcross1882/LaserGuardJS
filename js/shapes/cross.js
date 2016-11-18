
class Cross extends Polygon {
    constructor(length) {
        var center = new Point(0, 0)
        super([
            new Line(center, new Point(0, length), ColorMapper.randomColor()),
            new Line(center, new Point(length, 0), ColorMapper.randomColor()),
            new Line(center, new Point(0, -length), ColorMapper.randomColor()),
            new Line(center, new Point(-length, 0), ColorMapper.randomColor())
        ]);
    }
}
