const clock=document.querySelector(".clock")
const time=document.querySelector(".time")
const date=document.querySelector(".date")
const weeks=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

function times(){
const timeNow=new Date();

const hours=String(timeNow.getHours()).padStart(2,"0");
const minutes=String(timeNow.getMinutes()).padStart(2,"0");
const seconds=String(timeNow.getSeconds()).padStart(2,"0");
time.innerText=`${hours}:${minutes}:${seconds}`;

const years=String(timeNow.getFullYear());
const months=String(timeNow.getMonth()+1).padStart(2,"0");
const dates=String(timeNow.getDate()).padStart(2,"0");
const days=weeks[timeNow.getDay()];
date.innerText=`${years}.${months}.${dates}  ${days}`;
}

times();
setInterval(times,1000);
