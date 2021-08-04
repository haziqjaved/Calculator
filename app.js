function inpVal(i){
    var O=0;
    var a=i
    if(a==='='){
        document.getElementById("input").value=eval(document.getElementById("input").value);
    }
    else if(a==='C'){
        document.getElementById("input").value='';
    }
    else if(a==='+'|| a==='-'|| a==='*'|| a==='/'){
        document.getElementById("input").value+=i;
    }
    else if(a==='x^2'){
        document.getElementById("input").value=Math.pow(document.getElementById("input").value,2);
    }
    else{
        document.getElementById("input").value+=i;
    }
}