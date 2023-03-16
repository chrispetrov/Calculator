const buttons=document.querySelectorAll('.numbers>button');
for(let i of buttons){
    
    i.setAttribute('onclick','addNumberToString(this)');
    
}
let strInput=document.getElementById('input');

function addNumberToString(num){
    if(parseInt(strInput.value)===goal){
        console.log(goal);
        strInput.value='';}
    strInput.value+=num.innerText;
    arrNum=parseInt(strInput.value);
    console.log(arrNum);
}

let add=function(a,b){
    return a+b;
};
let sub=function(a,b){
    return a-b;
};
let mult=function(a,b){
    return a*b;
};
let div=function(a,b){
    if(b===0){
        alert("NOOOOOO NOT LIKE THIS!");
        return;
    }
    return a/b;
};

let operate=function(op,a,b){
    switch(op){
        case '+': return add(a,b);
        case '-': return sub(a,b);
        case '×': return mult(a,b);
        case '/': return div(a,b);
    }
};
let arrNum;
let operator;
let goal;
let saveNum=function (zn){
    if(zn.innerText==='='){
        if(goal===undefined){return;}
        goal=operate(operator,goal,arrNum);
        console.log('assss1   ' +goal)
        strInput.value=goal;
        arrNum=goal;
        goal=undefined;
        
        return;
    }
    if(goal===undefined){
        goal=arrNum;
        strInput.value='';               //goal=1
    }
    else if(zn.innerText!=='='){
        goal=operate(operator,goal,arrNum);
        
        strInput.value=goal;
    }
    operator=zn.innerText; 
}

function clearIt(){
    arrNum=null;
    
    operator=undefined;
    goal=undefined;
    strInput.value=' ';
}