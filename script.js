const buttons=document.querySelectorAll('.numbers>button');
for(var i in buttons){
    console.log(i);
    buttons[i].setAttribute('onclick','addNumberToString()');
    console.log(buttons[i]);
}

function addNumberToString(){
    console.log('hey');
}