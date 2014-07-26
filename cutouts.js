function init() {

    var canvas = document.getElementById("canvas"),
        c = canvas.getContext('2d');

    c.fillStyle = 'gray';

    c.beginPath();
    //Rect - CW
    c.rect(0, 0, canvas.width, canvas.height);

    //Circle - ccw
    c.arc(500, 500, 200, 0, 2 * Math.PI, true);

    //Triangle - CCW
    c.moveTo(800, 800);
    c.lineTo(800, 600);
    c.lineTo(600, 800);

    //Triangle - CCW
    c.moveTo(300, 300);
    c.lineTo(300, 100);
    c.lineTo(100, 300);

    //Bezier curve - CCW
    c.moveTo(400,300);
    c.bezierCurveTo(600, 100, 400, 100, 600, 300);

    c.fill();


}

window.addEventListener('load', init, false);
