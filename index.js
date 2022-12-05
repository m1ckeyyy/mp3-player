let interval;
const play = document.querySelector("#play");
const audio = document.querySelector("#audio");
const playPauseIcon = document.querySelector("#play > i");
const myVideo = document.querySelector("#myVideo");
const volumeSlider = document.querySelector("#volume-slider");

const wojak = document.querySelector("#cover");
const wojakSad = document.createElement("img");
const wojakHappy = document.createElement("img");
wojakSad.src = "img/wojaksad.png";
wojakHappy.src = "img/wojak.png";
// console.log(audio)
play.onclick = function () {
  let audioDuration = audio.duration;
  let min = Math.floor(audioDuration / 60);
  let sec = audioDuration % 60;
  stateChange();
};

//state pause
let first = false;
const stateChange = function () {
  //if currently stop.
  if (playPauseIcon.classList.contains("fa-play")) {
    playPauseIcon.classList.add("fa-pause");
    playPauseIcon.classList.remove("fa-play");
    audio.play();
    if (!first) {
      interval = setInterval(() => {
        // title.innerHTML='';
        // document.body.style..src = 'img/rain.gif'
        // document.body.style.backgroundImage='linear-gradient(to bottom, rgba(129,118,118,0) 0%,rgba(179,157,157,0.01) 1%,rgba(0,0,0,1) 100%)';
        // document.body.style.backgroundImage =
        // "linear-gradient(to bottom, rgba(129,118,118,0) 0%,rgba(179,157,157,0.01) 1%,rgba(0,0,0,1) 100%)";
        myVideo.style.visibility = "visible";
        wojak.src = wojakSad.src;
        first = true;
      }, 4100); //4150
    }
    if (first) {
      myVideo.style.visibility = "visible";
      wojak.src = wojakSad.src;
    }
  }
  //if currently playing
  else {
    playPauseIcon.classList.add("fa-play");
    playPauseIcon.classList.remove("fa-pause");
    // document.body.style.backgroundImage =
    // "linear-gradient(to bottom, rgba(130,160,194,0) 0%,rgba(126,197,45,0.01) 1%,rgba(126,197,45,1) 100%)";
    myVideo.style.visibility = "hidden";
    wojak.src = wojakHappy.src;
    clearInterval(interval);
    audio.pause();
  }
};
audio.volume = 0.8;
volumeSlider.oninput = function () {
  audio.volume = volumeSlider.value / 100;
};
