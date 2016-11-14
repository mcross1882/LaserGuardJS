
class Square extends Polygon {
    constructor(top, left, bottom, right) {
        super([
            new Line(top, left, ColorMapper.randomColor()),
            new Line(left, bottom, ColorMapper.randomColor()),
            new Line(bottom, right, ColorMapper.randomColor()),
            new Line(right, top, ColorMapper.randomColor())
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
