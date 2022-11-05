const container = document.querySelector(".container");
const time = document.querySelector(".time");
const hour = document.querySelector(".hour");
const colon = document.querySelector(".colon");
const min = document.querySelector(".minute");
const meridian = document.querySelector(".meridian");
const btn = document.querySelector('.btn')

hour.innerHTML = new Date().getHours();
min.innerHTML = new Date().getMinutes();

 let meridianTime;

const date = new Date();

if (date.getMinutes() < 10) {
    min.innerHTML = "0" + date.getMinutes();
}

if (date.getHours() < 10) {
    hour.innerHTML = "0" + date.getHours();
}


setInterval(() => {
  // hour.innerHTML = date.getHours();
  // min.innerHTML = date.getMinutes();
  // console.log(hour.innerHTML, min.innerHTML)

  min.innerHTML = date.getMinutes()
  if (date.getMinutes() < 10) {
    min.innerHTML = "0" + date.getMinutes();
  } 
  
hour.innerHTML = date.getHours();
  if (date.getHours() < 10) {
    hour.innerHTML = "0" + date.getHours();
  } else if (date.getHours() > 12) {
    hour.innerHTML = date.getHours() - 12;
  } 
  

  if(date.getHours() >= 12) {
   meridian.innerHTML = 'PM';
   meridianTime = 'PM';
   console.log(meridianTime)
  } 
}, 1000);

//clock telling time

let time1 = date.getHours();
if(date.getHours() > 12) {
  time1 = time1 - 12
}

let time2 = date.getMinutes();
if(date.getMinutes() < 10) {
  time2 = 'oh ' + time2; 
}
let text = time1;

let speech = new SpeechSynthesisUtterance();

function textTospeech() {

  if(date.getHours() >= 12) {
   meridianTime = 'PM';
   console.log(meridianTime)
  } 

  speech.text = `the time is ${text} ${time2} ${meridianTime}`;
  speech.rate = 1;
  speech.volume = 2;
  speech.pitch = 1;
  speech.language = 'en-us';
  speechSynthesis.speak(speech);

//the code below is so the clock can only be seen on a scren of 1000px or wider
  if(window.innerWidth < 750) {
  document.body.innerHTML = '<h1>Use a bigger screen</h1>';
  speechSynthesis.cancel()
  throw new Error('use a bigger device');
  }
}

textTospeech();

btn.onclick = () => {
  textTospeech();
  window.location.reload()
}
