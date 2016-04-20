addEventListener('load',initiate);
function initiate (){
//source1=document.getElementById('image');
//source1.addEventListener('dragstart',dragged);
var images=document.querySelectorAll('#picturesbox>img');
for(var i=0;i<images.length;i++)
 {images[i].addEventListener('dragstart',dragged);}

drop=document.getElementById('canvas');
canvas=drop.getContext('2d');
drop.addEventListener('dragenter',dragenter);
drop.addEventListener('dragover',dragover);
drop.addEventListener('drop',dropped);
}
function dragenter(e){
e.preventDefault();//отмена действия по умолчанию
drop.style.background='green';
}
function dragover(e){
e.preventDefault();
drop.style.background='yellow';
}
function dragged(e){
//var code='<img src="'+source1.getAttribute('src')+'"/>';
//e.dataTransfer.setData('Text',code);
//drop.style.background='white';
elem=e.target;//аналог this
e.dataTransfer.setData('Text',elem.getAttribute('id'));
e.dataTransfer.setDragImage(elem,0,0);

}
function dropped(e){
e.preventDefault();

var id=e.dataTransfer.getData('Text');
var src=document.getElementById(id).src;
//var img='<img src="'+src+'"/>';

//drop.innerHTML='';
//drop.innerHTML+=img;//добавляет к хтмл коду очередное изображение
//drop.innerHTML=e.dataTransfer.getData('Text');//перехватили данные
//drop.style.background='black';

posx=e.pageX-drop.offsetLeft;
posy=e.pageY-drop.offsetTop;
//canvas.drawImage(img,posx,posy);


var img=document.createElement('img');
img.setAttribute('src',src);
img.addEventListener('load',function(){
canvas.drawImage(img,posx,posy);
});
}
