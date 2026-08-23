let audio = new Audio();

let currentSong = null;
let currentPlayIcon = null;

let mainplay = document.querySelector(".main-play");
let bottomPlay = document.querySelector("#buttomplay");


function playSong(element) {
    audio.src = element.song;
    audio.play();
}

export function songplay(element, play) {
 
  // Same song play/pause
    if (currentSong === element) {

        if (audio.paused) {
            // paused hai → resume
            audio.play();

            play.classList.remove("ri-play-circle-fill");
            play.classList.add("ri-pause-circle-fill");

            bottomPlay.classList.remove("ri-play-fill");
            bottomPlay.classList.add("ri-pause-fill");

        } else {
            // playing hai → pause
            audio.pause();

            play.classList.remove("ri-pause-circle-fill");
            play.classList.add("ri-play-circle-fill");

            bottomPlay.classList.remove("ri-pause-fill");
            bottomPlay.classList.add("ri-play-fill");
        }

        return;
    }

//songPlay and pause
 if (currentSong && currentSong !== element) {
        audio.pause();

        if (currentPlayIcon) {
            currentPlayIcon.classList.remove("ri-pause-circle-fill");
            currentPlayIcon.classList.add("ri-play-circle-fill");
        }
    }
     currentSong = element;
    currentPlayIcon = play;



    // Naya song play
    playSong(element);

    // Current icon
    play.classList.remove("ri-play-circle-fill");
    play.classList.add("ri-pause-circle-fill");

    bottomPlay.classList.remove("ri-play-fill");
    bottomPlay.classList.add("ri-pause-fill");

    let img = document.querySelector("#bottomimg");
    img.src = element.img;

 //namesong
 
let namebottom = document.querySelector("#bottomname");
namebottom.innerText = element.songname;

//singerbottom

let singerbottom = document.querySelector("#singerbottom");
singerbottom.innerText = element.singer;


//endpoint
let endpoint = document.querySelector("#endpoint");
endpoint.innerText =element.duration;

// duretion

let progressvlaue = document.querySelector(".progress-value");
let progressBar = document.querySelector(".progress-bar");



}






let progressvlaue = document.querySelector(".progress-value");
let progressBar = document.querySelector(".progress-bar");

progressBar.addEventListener("click", (e) => {
    let width = progressBar.clientWidth;
    let clickX = e.offsetX;
   

    audio.currentTime = (clickX / width) * audio.duration;
});

let currenttime = document.querySelector("#startpoint");

audio.addEventListener("timeupdate", () => {
    let percent = (audio.currentTime / audio.duration) * 100;

    progressvlaue.style.width = percent + "%";


     // Current time
    let minutes = Math.floor(audio.currentTime / 60);

    let seconds = Math.floor(audio.currentTime % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    currenttime.innerText = `${minutes}:${seconds}`;
});

//mainplay

    mainplay.addEventListener("click", () => {

    if (!currentSong) return;

    if (audio.paused) {
        audio.play();

        currentPlayIcon.classList.remove("ri-play-circle-fill");
        currentPlayIcon.classList.add("ri-pause-circle-fill");

        bottomPlay.classList.remove("ri-play-fill");
        bottomPlay.classList.add("ri-pause-fill");

    } else {
        audio.pause();

        currentPlayIcon.classList.remove("ri-pause-circle-fill");
        currentPlayIcon.classList.add("ri-play-circle-fill");

        bottomPlay.classList.remove("ri-pause-fill");
        bottomPlay.classList.add("ri-play-fill");
    }
});