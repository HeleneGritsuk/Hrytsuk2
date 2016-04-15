addEventListener('load',initiate);
function initiate(){
var elem=document.getElementById('canvas');
var canvas=elem.getContext('2d');
canvas.save();
var grad=canvas.createLinearGradient(0,0,500,300);
grad.addColorStop(0.5,'orange');
grad.addColorStop(1,'black');
var radians=Math.PI/180*90;
canvas.arc(60,60,30,0,radians,false);
canvas.stroke();
canvas.fillStyle='grad';
canvas.strokeStyle='gold';

canvas.strokeRect(100,100,120,120);
canvas.fillRect(110,110,100,100);
canvas.clearRect(120,120,80,80);

canvas.fillStyle='white';



canvas.beginPath();

canvas.arc(200,100,50,0,Math.PI*2,false);
canvas.closePath();
canvas.stroke();


canvas.lineWidth=10;
canvas.lineCap='round';
canvas.arc(200,150,30,0,Math.PI*2,false);
canvas.stroke();
canvas.lineWidth=5;
canvas.lineJoin='miter';
canvas.moveTo(195,135);
canvas.lineTo(215,155);
canvas.lineTo(195,155);
canvas.stroke();
canvas.restore();
canvas.save();

canvas.beginPath();
canvas.moveTo(50,50);
canvas.quadraticCurveTo(100,125,50,200);
canvas.moveTo(250,50);
canvas.bezierCurveTo(200,125,300,125,250,200);
canvas.stroke();


canvas.beginPath();
canvas.moveTo(300,100);
canvas.lineTo(400,200);
canvas.lineTo(300,200);
canvas.clip();
for (var f=0; f<300;f=f+10){
canvas.moveTo(0,f);
canvas.lineTo(500,f);
}
canvas.closePath();
canvas.stroke();
canvas.restore();

canvas.font='bold 24px verdana';
canvas.textAlign='start';
canvas.fillText('My Message', 100,100);
canvas.rotate(Math.PI/180*45);
var text='Measure Text';
var size=canvas.measureText(text);

canvas.fillText(text,250,124);
canvas.strokeRect(250,100,size.width,24);


}