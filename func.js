function val()
{
  //window.location.reload(false);
  a=document.getElementById("wgt").value;
  b=document.getElementById("hgt").value;
  let num = a*b*9.8;
  let n = num.toFixed(4);
  document.getElementById("res").innerHTML=n;
}
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 
// physical variables
var g = 1.1; // gravity
var fac = 0.8; // velocity reduction factor per bounce
var radius = 30; // ball radius
var color ="PURPLE"; // ball color
 
// initialise position and velocity of ball
var x = 620;
var y = 50;
var vx = 2;
var vy = 0;
 
// ensure that code does not run before page has loaded
window.onload = init; 
 
function init() {
// set up a timer
    setInterval(update, 1000/60); // 60 frames per second
};
 
function update() {
  x += vx;
  y += vy; 
  if (y > canvas.height - radius){
    y = canvas.height - radius;
    vy *= -fac;
  }
  drawBall();
};
function drawBall() {
    with (context){
        clearRect(3, 3, canvas.width, canvas.height); // clear canvas
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 5, 2*Math.PI, true);
        closePath();
        fill();
    };
};
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
window.onload = init; 
function init() {
setInterval(update, 1000/60); 
};
function update() {
    vy += g;
    y += vy; 
    
    if (y > canvas.height - radius){
    y = canvas.height - radius;
    vy *= -fac;
    }
    drawBall();
    };
    function drawBall() {
        with (context){
        clearRect(0, 0, canvas.width, canvas.height); 
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();
        };
        };