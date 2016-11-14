
class ShapeFactory {

    generateShapes(gameWidth, gameHeight, playerColor, numberOfShapes) {
        var shape = null;
        var shapeIndex = 1;
        var startingPoint = gameHeight / 2;
        var result = [];

        while (shapeIndex <= numberOfShapes) {
            shape = this.randomShape(gameWidth, gameHeight, playerColor);
            if (Array.isArray(shape)) {
                for (var index=0; index < shape.length; index++) {
                    shape[index].transformations[0].y = startingPoint;
                    result.push(shape[index]);
                }
            } else {
                shape.transformations[0].y = startingPoint;
                result.push(shape);
            }
            shapeIndex++;
            startingPoint -= 250;
        }
        return result;
    }

    randomShape(gameWidth, gameHeight, playerColor) {
        var index = Math.floor(Math.random() * 4);
        var centerX = gameWidth / 2;
        var centerY = gameHeight / 2;

        var shape = null;
        switch (index) {
            case 0:
                shape = this.createSquare(centerX, centerY, 0);
                break
            case 1:
                shape = this.createCircle(centerX, centerY, 75);
                break
            case 2:
                shape = this.createDoubleCircle(centerX, centerY, 40);
                break
            case 3:
                shape = this.createTriangle(centerX, centerY);
                break
        }

        if (Array.isArray(shape)) {
            for (var index=0; index < shape.length; index++) {
                shape[index].getLines()[0].color = playerColor;
            }
        } else {
            shape.getLines()[0].color = playerColor;
        }
        return shape;
    }

    createSquare(x, y, rotation) {
        var square = new Square(
            new Point(-50, -50), new Point(50, -50),
            new Point(50, 50), new Point(-50, 50)
        );

        square.addMatrix(new TranslateMatrix(x, y));
        square.addMatrix(new AnimationRotationMatrix(1, 1));

        return square;
    }

    createCircle(x, y, radius) {
        var circle = new Circle(new Point(0, 0), radius);
        circle.addMatrix(new TranslateMatrix(x, y));
        circle.addMatrix(new AnimationRotationMatrix(1, 1));
        return circle;
    }

    createDoubleCircle(x, y, radius) {
        var smallCircleA = this.createCircle(x-50, y, radius);
        smallCircleA.addMatrix(new RotationMatrix(180));
        smallCircleA.addMatrix(new AnimationRotationMatrix(1, 1));

        var smallCircleB = this.createCircle(x+50, y, radius);
        smallCircleB.addMatrix(new AnimationRotationMatrix(1, 1));
        return [smallCircleA, smallCircleB];
    }

    createTriangle(x, y) {
        var triangle = new Triangle(
            new Point(0, -75),
            new Point(75, 50),
            new Point(-75, 50)
        );
        triangle.addMatrix(new TranslateMatrix(x, y));
        triangle.addMatrix(new AnimationRotationMatrix(1, 1));
        return triangle;
    }
}
