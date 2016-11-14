
class Polygon {
    constructor(lines) {
        this.lines = lines || [];
        this.transformations = [];
    }

    addLine(line) {
        this.lines.push(line);
    }

    getLines() {
        return this.lines;
    }

    addMatrix(matrix) {
        this.transformations.push(matrix);
    }

    applyTransformations(canvas) {
        for (var index=0; index < this.transformations.length; index++) {
            this.transformations[index].transform(canvas);
        }
    }
}

