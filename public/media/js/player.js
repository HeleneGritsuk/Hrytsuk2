addEventListener ('load',initiate);
function initiate () {
	maxim=400;
	media=document.getElementById('media');
	play=document.getElementById('play');
	progress=document.getElementById('progress');
	mute=document.getElementById('mute');
	volume=document.getElementById('volume');
	bar=document.getElementById('bar');
	play.addEventListener('click',push);
	mute.addEventListener('click',sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change',level);
	


}
function push() {
if(!media.paused&&!media.ended){
media.pause();
play.value='Play';
clearInterval(loop);
}
else {
media.play();
play.value='Pause';
loop=setInterval(status,1000);
}
}

function status() {

if(!media.ended){
var size=parseInt(media.currentTime*maxim/media.duration)
progress.style.width=size+'px';
}
else {
progress.style.width='0';
play.innerHTML='Play';
clearInterval(loop);
}
}
function sound () {
if(mute.value=='Mute'){
media.muted=true;
mute.value="Sound";
}
else {
media.muted=false;
mute.value="Mute";
}
}

function move(e) {
var mouseX=e.pageX-bar.offsetLeft;
var newTime=mouseX*media.duration/maxim;
media.currentTime=newTime;
progress.style.width=mouseX+'px';

}

function level() {
media.volume=volume.value;

}
