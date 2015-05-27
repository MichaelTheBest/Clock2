


function getTime()
{
var d = new Date();
var time = "";
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
m=checkTime(m);
s=checkTime(s);
time = h+":"+m+":"+s;
document.getElementById("test").innerHTML = time;
setTimeout(function(){getTime()},1000);
}
getTime();
function checkTime(i)
{

if(i<10)
i="0" + i;
return i;

}