/// <reference path="_reference.js" />

var snakes = (function () {
    var SNAKE_PIECE_SIZE = 20;
    var SNAKE_FOOD_SIZE = SNAKE_PIECE_SIZE;
    var DEFAULT_SNAKE_SIZE = 3;

    var directions = [{
        dx: -1,
        dy: 0
    }, {
        dx: 0,
        dy: -1
    }, {
        dx: +1,
        dy: 0
    }, {
        dx: 0,
        dy: +1
    }];

    function GameObject(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    GameObject.prototype = {
        getPosition: function(){
            return {
                x: this.x,
                y: this.y
            }
        },
        moveTo: function (newX, newY) {
            this.x = newX;
            this.y = newY;
        }
    }

    function Snake(x, y, size) {
        var pieceX,
            pieceY;
        this.pieces = [];
        this.direction = 2;
        size = size || DEFAULT_SNAKE_SIZE;
        GameObject.call(this, x, y, size);

        for (var i = 0; i < size; i++) {
            pieceX = x - i * SNAKE_PIECE_SIZE;
            pieceY = y;
            var snakePiece = new SnakePiece(pieceX, pieceY);
            this.pieces.push(snakePiece);
        }
    }

    Snake.prototype = new GameObject();

    Snake.prototype.head = function () {
        return this.pieces[0];
    }

    Snake.prototype.move = function () {
        for (var i = this.pieces.length - 1; i >= 1; i--) {
            var position = this.pieces[i - 1].getPosition();
            this.pieces[i].moveTo(position.x, position.y);
        }
        var head = this.head();
        var dx = directions[this.direction].dx;
        var dy = directions[this.direction].dy;
        var headPosition = head.getPosition();
        var newHeadPosition = {
            x: headPosition.x + head.size * dx,
            y: headPosition.y + head.size * dy
        };
        head.moveTo(newHeadPosition.x, newHeadPosition.y);
    }

    Snake.prototype.changeDirection = function (newDir) {
        if (newDir >= 0 && newDir < directions.length && (this.direction + newDir) % 2) {
            this.direction = newDir;
        }
    }

    Snake.prototype.getPosition = function () {
        return this.head().getPosition();
    }

    Snake.prototype.changePosition = function (x, y) {
        this.head().moveTo(x, y);
    }

    Snake.prototype.addPiece = function (x, y) {
        this.pieces.push(new SnakePiece(x, y));
    }

    function SnakePiece(x, y) {
        GameObject.call(this, x, y, SNAKE_PIECE_SIZE);
    }

    SnakePiece.prototype = new GameObject();

    function Food(x, y, size) {
        size = size || SNAKE_FOOD_SIZE;
        GameObject.call(this, x, y, size);
    }

    Food.prototype = new GameObject();

    return {
        Snake: Snake,
        Food: Food,
        SnakePiece: SnakePiece
    }
}());