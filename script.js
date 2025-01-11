let dropdown=document.querySelector('.dropdown');
dropdown.onclick=function(){
  dropdown.classList.toggle('active');
}
function show(text){
document.querySelector('.dropdown-text').value=text;
}