
class RotationMatrix {

    constructor(degrees) {
        while (degrees > 360) {
            degrees -= 360;
        }
        this.degrees = degrees;
        this.radians = degrees * (Math.PI / 180);
    }

    transform(canvas) {
        canvas.rotate(this.radians);
    }
}

