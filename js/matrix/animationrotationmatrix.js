
class AnimationRotationMatrix {

    constructor(startAngle, rotation) {
        this.startAngle = startAngle * (Math.PI / 180);
        this.rotation = rotation * (Math.PI / 180);
    }

    transform(canvas) {
        canvas.rotate(this.startAngle += this.rotation);
    }
}

