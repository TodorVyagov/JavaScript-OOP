var movingShapes = (function () {
    function addShape(shape) {
        generateDiv(shape);
    }

    var x = 200;
    var y = 200;
    var radius = 100;
    var angle = 0;
    var xMove = 0;
    var yMove = 0;
    var xDirection = 1;
    var yDirection = 0;
    rotateDivs();

    function rotateDivs() {
        var divs = document.getElementsByClassName('moving-div');
        var currentX;
        var currentY;
        for (var i = 0, addedAngle = 0, len = divs.length; i < len; i += 1, addedAngle += 360 / len) {
            var currentDiv = divs[i];

            if (currentDiv.getAttribute('class') === 'moving-div ellipse') {
                currentX = Math.cos((angle + addedAngle) * Math.PI / 180) * radius + x;
                currentY = Math.sin((angle + addedAngle) * Math.PI / 180) * radius + y;
            }
            else if (currentDiv.getAttribute('class') === 'moving-div rect') {
                currentX = xMove + x;
                currentY = yMove + y;
            }
            
            currentDiv.style.left = currentX*2 + 'px';
            currentDiv.style.top = currentY + 'px';
        }

        angle += 1;
        if (angle > 360) {
            angle -= 360;
        }

        xMove += xDirection;
        yMove += yDirection;

        if (xMove > 200) {
            xMove--;
            xDirection = 0;
            yDirection = 1;
        }
        else if (xMove < 0) {
            xMove++;
            xDirection = 0
            yDirection = -1;
        }

        else if (yMove > 200) {
            yMove--;
            xDirection = -1;
            yDirection = 0;
        }
        else if (yMove < 0) {
            yMove++;
            xDirection = 1;
            yDirection = 0;
        }

        //setTimeout(rotateDivs, 30);
        requestAnimationFrame(rotateDivs);
    };

    function generateDiv(type) {
        var divElement = document.createElement('div');
        divElement.innerHTML = 'div';
        if (type === 'rect') {
            divElement.className = 'moving-div rect';
        }
        else if (type === 'ellipse') {
            divElement.className = 'moving-div ellipse';
            divElement.style.borderRadius = '100px/50px';
        }

        divElement.style.backgroundColor = getRandomColor();
        divElement.style.color = getRandomColor();
        var borderColor = getRandomColor();
        divElement.style.border = '2px solid ' + borderColor;
        divElement.style.width = '80px';
        divElement.style.height = '40px';
        divElement.style.textAlign = 'center';
        divElement.style.lineHeight = '40px';
        divElement.style.position = 'absolute';
        divElement.style.top = '50px';
        divElement.style.left = '200px';

        document.body.appendChild(divElement);

        // max number is not included so if we want random number between 0 and 5, max has to be max=6
        function getRandomNumber(max, min) {
            min = min || 0;
            max = max || 21;
            var randomNnumber = Math.floor(Math.random() * (max - min)) + min;

            return randomNnumber;
        }

        function getRandomColor() {
            var R = getRandomNumber(256);
            var G = getRandomNumber(256);
            var B = getRandomNumber(256);

            var color = 'rgb(' + R + ', ' + G + ', ' + B + ')';
            return color;
        }
    }

    return {
        add: addShape
    };
}());

var addElipseButton = document.getElementById('add-ellipse-button');
addElipseButton.addEventListener('click', function () {
    movingShapes.add('ellipse');
});

var addRectangleButton = document.getElementById('add-rectangle-button');
addRectangleButton.addEventListener('click', function () {
    movingShapes.add('rect');
});