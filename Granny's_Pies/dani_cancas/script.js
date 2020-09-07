var canvas = document.getElementById('mycanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var kas = canvas.getContext("2d");

//kas.beginpath();
//will draw line
kas.moveTo(50, 50);
kas.lineTo(50, 400);
kas.strokeStyle = "red";
kas.stroke();
//draw rectangle
kas.fillRect(50, 50, 800, 400);
kas.font = "30px Arial";
kas.fillText("simple class project ball bounce game", 100, 46);
kas.stroke();
//draw circle
kas.beginPath();
kas.arc(95, 400, 40, 0, 2 * Math.PI);
kas.stroke();