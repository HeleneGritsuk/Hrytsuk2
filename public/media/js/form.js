addEventListener('load',initiate);


function initiate(){
name1=document.getElementById('firstname');
name2=document.getElementById('lastname');
name3=document.getElementById('otpravka');
name4=document.getElementById('form');
 

name1.addEventListener('input', validation);
name2.addEventListener('input', validation);
name3.addEventListener('click',validation);

name1.style.background='white';
name2.style.background='white';
}
function validation() {
if(name1.value==''&&name2.value==''){
name1.setCustomValidity('Заполните хотя бы одно поле');
name1.style.background='red';
name2.style.background='red';

}
else {
name1.setCustomValidity('');
name1.style.background='white';
name2.style.background='white';
name4.submit();
}

}