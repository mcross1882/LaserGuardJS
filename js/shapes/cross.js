
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

    draw(canvas) {
        var lines = this.getLines();
        canvas.save();

        canvas.lineWidth = 6;

        this.applyTransformations(canvas);

        for (var index=0; index < lines.length; index++) {
            canvas.strokeStyle = lines[index].color.color;
            canvas.beginPath();
            canvas.moveTo(lines[index].start.x, lines[index].start.y);
            canvas.lineTo(lines[index].end.x, lines[index].end.y);
            canvas.stroke();
        }

        canvas.restore();
    }
}
