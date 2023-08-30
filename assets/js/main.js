let hour=document.getElementById('hour');
let minutes=document.getElementById('minutes');
let Second=document.getElementById('Second');

function displayTime(){
  
let date = new Date();
let hou = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hourRotation = 30*hou + min/2;
let minutesRotation = 6*min;
let SecondRotation = 6*sec;

hour.style.transform =`rotate(${hourRotation}deg)`;
minutes.style.transform =`rotate(${minutesRotation}deg)`;
Second.style.transform =`rotate(${SecondRotation}deg)`;
}

setInterval(displayTime,1000);

var date = new Date();
var day = date.getDate();
var dateString =day;
document.getElementById("Date").textContent=dateString;