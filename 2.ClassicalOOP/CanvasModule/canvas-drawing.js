var drawingModule = (function () {
    var canvas = document.getElementById('the-canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#AAA';
    ctx.strokeStyle = '#444';

    function drawRect(x, y, width, height) {
        ctx.beginPath();
        ctx.fillRect(x, y, width, height);
    }

    function drawCircle(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    return {
        rect: drawRect,
        circle: drawCircle,
        line: drawLine
    }
}());

drawingModule.rect(10, 10, 100, 50);
drawingModule.circle(150, 150, 100);
drawingModule.line(20, 100, 100, 150);