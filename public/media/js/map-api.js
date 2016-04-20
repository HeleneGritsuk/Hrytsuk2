function initiate() {
var get=document.getElementById('getLocation');
get.addEventListener('click',getlocation);
}
addEventListener('load',initiate);
function getlocation(){
navigator.geolocation.getCurrentPosition(showinfo,error,geoconfig);
}
function showinfo(position){
console.log(position.coords);
var location=document.getElementById('location');
var mapurl='http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+'&zoom=20&size=400x400&sensor=false&markers='+position.coords.latitude+','+position.coords.longitude;
var img='<img src="'+mapurl+'"/>';
data=img;
//var data='';
data+='Широта '+position.coords.latitude+'<br/>';
data+='Долгота '+position.coords.longitude+'<br/>';
data+='Точность '+position.coords.accuracy+'<br/>';
location.innerHTML=data;

}
function error (er){
alert('Ошибка'+error.code+' '+error.message);

}

var geoconfig={ //Json
enableHightAccuracy:true,
timeout:1000,
maximumAge:60000
}