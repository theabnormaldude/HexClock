var clock=document.getElementById("clock");
var hexcolor=document.getElementById("hexcolor")

function time()
{
    var date= new Date();
    var hour=date.getHours().toString();
    var min=date.getMinutes().toString();
    var sec=date.getSeconds().toString();

    if(hour.length<2)
    {
        hour="0"+hour
    }
    if(min.length<2)
    {
        min="0"+min
    }
    if(sec.length<2)
    {
        sec="0"+sec
    }
    var clockstr=hour+":"+min+":"+sec;
    var hexstr="#"+hour+min+sec

    clock.textContent=clockstr;
    hexcolor.textContent=hexstr;
    document.body.style.backgroundColor=hexstr;
}
time();
setInterval(time, 1000);