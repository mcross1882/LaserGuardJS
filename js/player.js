
class Player extends Point {
    constructor(x, y, color) {
        super(x, y);

        this.CIRCLE_ARC = 2 * Math.PI;

      	this.radius = 10;
        this.velocity = 0;
        this.color = color;
        this.playerAccelerationLock = false;
    }

    update() {
        this.y += this.velocity;
    }

    draw(canvas) {
        canvas.save();
        canvas.fillStyle = this.color.color;
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, this.CIRCLE_ARC, true);
        canvas.fill();
        canvas.restore();
    }

    startFalling() {
        var that = this;
        clearInterval(this.playerAccelerationLock);
        this.playerAccelerationLock = setInterval(function() {
            that.velocity += 1;
            if (that.velocity >= Player.DEFAULT_VELOCITY) {
                clearInterval(that.playerAccelerationLock);
            }
        }, 150);
    }

    isCollision(canvas) {
        return !this.isSameColor(canvas, this.x, this.y - this.radius)
            || !this.isSameColor(canvas, this.x, this.y + this.radius)
            || !this.isSameColor(canvas, this.x - this.radius, this.y)
            || !this.isSameColor(canvas, this.x + this.radius, this.y);
    }

    isSameColor(canvas, x, y) {
        var color = canvas.getImageData(x, y, 1, 1).data.slice(-4);
        if (ColorMapper.isBackground(color)) {
            return true;
        }

        for (var index=0; index < this.color.bytes.length - 1; index++) {
            if (this.color.bytes[index] != color[index]) {
                return false;
            }
        }
        return true;
    }
}

Player.MAX_VELOCITY = -2;

Player.DEFAULT_VELOCITY = 4;

Player.VELOCITY_STEP = -2;


