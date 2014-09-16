/// <reference path="_reference.js" />

var render = (function () {
    function CanvasRenderer(selector) {
        this.canvas = document.querySelector(selector);
    }

    CanvasRenderer.prototype = {
        draw: function (obj) {
            if (obj instanceof snakes.Snake) {
                drawSnake(this.canvas, obj);
            }
            else if (obj instanceof snakes.SnakePiece) {
                drawSnakePiece(this.canvas, obj);
            }
            else if (obj instanceof snakes.Food) {
                drawFood(this.canvas, obj);
            }
        },
        clear: function () {
            var ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        getDimensions: function () {
            return {
                minWidth: 0,
                maxWidth: this.canvas.width,
                minHeight: 0,
                maxHeight: this.canvas.height
            };
        },
        gameOver: function (score) {
            var ctx = this.canvas.getContext('2d');
            ctx.fillStyle = 'brown';
            ctx.strokeStyle = 'white';
            ctx.beginPath();
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.font = '40px san-serif';
            ctx.strokeText('GAME OVER! Result: ' + score , this.canvas.offsetWidth / 5, this.canvas.offsetHeight / 2);
        }
    }

    function drawSnake(canvas, snake) {
        for (var i = 0; i < snake.pieces.length; i++) {
            drawSnakePiece(canvas ,snake.pieces[i]);
        }
    }

    function drawSnakePiece(canvas, snakePiece) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'yellowgreen';
        ctx.strokeStyle = 'grey';
        var position = snakePiece.getPosition();
        ctx.fillRect(position.x, position.y, snakePiece.size, snakePiece.size);
        ctx.strokeRect(position.x, position.y, snakePiece.size, snakePiece.size);
    }

    function drawFood(canvas, food) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'darkred';
        ctx.strokeStyle = 'orange';
        var position = food.getPosition();
        ctx.fillRect(position.x, position.y, food.size, food.size);
        ctx.strokeRect(position.x, position.y, food.size, food.size);
    }

    return {
        CanvasRenderer: function (selector) {
            return new CanvasRenderer(selector);
        }
    }
}());