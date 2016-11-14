
class Game {

    constructor(width, height, canvas) {
        this.GAME_WIDTH     = width;
        this.GAME_HEIGHT    = height;
        this.STARTING_POINT = height - 100;
        this.SCROLL_POINT   = height * 0.4;
        this.SCROLL_LENGTH  = 1;
        this.KEY_SPACEBAR   = 32;

        this.canvas = canvas;
        this.cancelGame = false;
        this.isKeyPressed = false;
        this.playerAccelerationLock = false;
        this.currentScore = 0;

        this.shapeFactory = new ShapeFactory();
        this.player = new Player(width / 2, this.STARTING_POINT, ColorMapper.randomColor());
        this.obstacles = this.shapeFactory.generateShapes(this.GAME_WIDTH, this.GAME_HEIGHT, this.player.color, 10);

        this.registerGlobalEvents();
    }

    start() {
        if (this.cancelGame) {
            return;
        }
        this.cancelGame = false;
        this.update();
        this.render();
        requestAnimationFrame(this.start.bind(this));
    }

    stop() {
        this.cancelGame = true;
    }

    update() {
        if (this.player.isCollision(this.canvas)) {
            console.log('Collision');
            this.stop();
        }

        this.player.update();

        if (this.player.y >= this.GAME_HEIGHT) {
            console.log('Player has died');
            this.stop();
        }

        if (this.player.y < this.SCROLL_POINT) {
            for (var index=0;  index < this.obstacles.length; index++) {
                this.obstacles[index].transformations[0].y += this.SCROLL_LENGTH;
            }
            this.currentScore += this.SCROLL_LENGTH;
        }

        this.addMoreShapes(2);
    }

    addMoreShapes(viewLimit) {
        var numberOfShapes = this.countHiddenShapes();
        console.log(numberOfShapes, viewLimit);
        if (numberOfShapes > viewLimit) {
            this.obstacles = this.obstacles.slice(viewLimit);
        } else {
            return;
        }

        this.player.color = ColorMapper.randomColor();
        var newShapes = this.shapeFactory.generateShapes(this.GAME_WIDTH, this.GAME_HEIGHT, this.player.color, viewLimit);
        for (var index=0; index < viewLimit; index++) {
            this.obstacles.push(newShapes);
        }
    }

    countHiddenShapes() {
        var result = 0;
        for (var index=this.obstacles.length - 1; index >= 0; index--) {
            if (this.player.y < this.obstacles[index].transformations[0].y) {
                result++;
            } else {
                break;
            }
        }
        return result;
    }

    render() {
        this.canvas.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);

        this.player.draw(this.canvas);

        for (var index=0; index < this.obstacles.length; index++) {
            this.obstacles[index].draw(this.canvas);
        }

        this.canvas.font = "24px Monospace";
        this.canvas.fillText("Score: " + this.currentScore, 100, 25);
    }

    registerGlobalEvents() {
        document.addEventListener('keydown', this.onPressEvent.bind(this));
        document.addEventListener('touchstart', this.onPressEvent.bind(this), false);

        document.addEventListener('keyup', this.onReleaseEvent.bind(this));
        document.addEventListener('touchend', this.onReleaseEvent.bind(this), false);
    }

    onPressEvent(e) {
        e.preventDefault();

        if (this.isKeyPressed) {
            return;
        }

        if (e.keyCode && this.KEY_SPACEBAR != e.keyCode) {
            return;
        }

        this.player.velocity += Player.VELOCITY_STEP;
        if (this.player.velocity <= Player.MAX_VELOCITY) {
            this.player.velocity = Player.MAX_VELOCITY;
        }

        this.player.startFalling();

        this.isKeyPressed = true;
    }

    onReleaseEvent(e) {
        e.preventDefault();
        if (e.keyCode && this.KEY_SPACEBAR != e.keyCode) {
            return;
        }

        this.isKeyPressed = false;
    }
}

