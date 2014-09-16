/// <reference path="_reference.js" />

var Game = (function () {
    function animationFrame() {
        var snakePosition = theGame.snake.getPosition();
        var foodPosition = theGame.food.getPosition();
        var isAtFood = false;

        if (snakePosition.x === foodPosition.x && snakePosition.y === foodPosition.y) {
            theGame.generateFood();
            isAtFood = true;
        }

        var outOfField = snakePosition.x < dimensions.minWidth || dimensions.maxWidth < snakePosition.x
            || snakePosition.y < dimensions.minHeight || dimensions.maxHeight < snakePosition.y;
        var snakeLength = theGame.snake.pieces.length;

        for (var i = 1; i < snakeLength; i++) {
            var piecePosition = theGame.snake.pieces[i].getPosition();
            
            if ((snakePosition.x === piecePosition.x && snakePosition.y === piecePosition.y) || outOfField) {
                theGame.renderer.gameOver(theGame.snake.pieces.length - 3);
                return;
            }
        }

        theGame.renderer.clear();
        theGame.snake.move();
        if (isAtFood) {
            var lastPiecePosition = theGame.snake.pieces[snakeLength - 1].getPosition();
            theGame.snake.addPiece(lastPiecePosition.x, lastPiecePosition.y);
            isAtFood = false;
        }
        theGame.renderer.draw(theGame.food)
        theGame.renderer.draw(theGame.snake);

        setTimeout(animationFrame, 150);
    }

    function SnakeGame(renderer) {
        this.renderer = renderer;
        this.attachKeyCommands();
        this.snake = new snakes.Snake(60, 0);
        this.food = new snakes.Food(100, 0);
    }

    SnakeGame.prototype = {
        start: function () {
            theGame = this;
            dimensions = this.renderer.getDimensions();
            animationFrame();
        },
        attachKeyCommands: function () {
            var self = this;
            document.body.addEventListener('keydown', function move(e) {
                var key = e.which || e.keyCode;
                if (37 <= key && key <= 40) {
                    self.snake.changeDirection(key - 37);
                }
            });
        },
        generateFood: function () {
            dimensions = this.renderer.getDimensions();
            var pieceSize = this.snake.pieces[0].size;
            var foodX = Math.floor(Math.random() * (dimensions.maxWidth / pieceSize)) * pieceSize;
            var foodY = Math.floor(Math.random() * (dimensions.maxHeight / pieceSize)) * pieceSize;

            for (var i = 0, len = theGame.snake.pieces.length; i < len; i++) {
                var piecePosition = theGame.snake.pieces[i].getPosition();

                if (piecePosition.x === foodX || piecePosition.y === foodY) {
                    this.generateFood();
                }
            }

            this.food.moveTo(foodX, foodY);
        }
    }

    return {
        SnakeGame: function (renderer) {
            return new SnakeGame(renderer);
        }
    }
}());

