var O=0;
function inputVal(i)
{
    var a=i;
    if(a==='=')
    {
        document.getElementById('input').value=eval(document.getElementById('input').value)
    }
    else if(a==='c')
    {
        document.getElementById('input').value='';
    }
    else if(a==='+'|| a==='-'|| a=='*'|| a==='/'){
        if(O==0)
        {
            document.getElementById('input').value+=i;
            O=1;
        }
    }
    else if(a==='sqrt')
    {
        document.getElementById('input').value=Math.sqrt(document.getElementById('input').value);
    }
    else if(a==='x^2')    {
        document.getElementById('input').value=Math.pow(document.getElementById('input').value,2);
    }
    else{
        document.getElementById('input').value+=i;
        O=0;
    }
}