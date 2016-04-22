addEventListener('load',initiate);
function initiate(){
var button=document.getElementById('save');
button.addEventListener('click',newitem);
show();

}
function newitem(){
var keyword=document.getElementById('keyword').value;
var value=document.getElementById('text').value;
sessionStorage.setItem(keyword,value);//sessionStorage - суперглобальный объект
show();

}
function show(){

var databox=document.getElementById('databox');

//databox.innerHTML='<div>'+keyword+'-'+value+'</div>';
databox.innerHTML='<input type="button" onclick="removeAll()" value="Удалить все"/>';
for (var f=0;f<sessionStorage.length;f++){
var keyword=sessionStorage.key(f);
var value=sessionStorage.getItem(keyword);
databox.innerHTML+='<div>'+keyword+'-'+value+'<input type="button" onclick="removeItem(\''+keyword+ '\')" value="remove" /></div>';
}
}

function removeItem(keyword){

if (confirm('Вы уверены?')){
sessionStorage.removeItem(keyword);
show();
}
}
function removeAll(){
if(confirm('Вы уверены?')) {
sessionStorage.clear();
show();
}

}