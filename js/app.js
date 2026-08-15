import { songData } from "../data/songbox.js";
import { rightInbox } from "./player.js";
import { click } from "./player.js";


//rightBox

let right = document.querySelector(".right");
let songcheck = false;

// bottombutton
let mainplay = document.querySelector(".main-play");
let bottomPlay = document.querySelector("#buttomplay");



songData.forEach((element) => {
//songBox
    let songBox = document.createElement("div");
    songBox.classList.add("song-box");



//imgCreta
    let imgSong = document.createElement("div");
    imgSong.classList.add("imgsong");
    let img = document.createElement("img");
    img.src = element.img;
    imgSong.appendChild(img);
    songBox.appendChild(imgSong);

//audio
let audio = new Audio();

function playSong(element) {
    audio.src = element.song;
    audio.play();
}



    //playButton



let play = document.createElement("i");

play.classList.add("ri-play-circle-fill");

imgSong.appendChild(play);

play.addEventListener("click", ()=>{

    let alreadyPlaying = false;

for (let i = 0; i < songData.length; i++) {

    if (songData[i].play === true) {

        alreadyPlaying = true;

        songData[i].play = false;

        audio.pause();

        // Purane song ka icon play karo
        play.classList.remove("ri-pause-circle-fill");
        play.classList.add("ri-play-circle-fill");

        bottomPlay.classList.remove("ri-pause-fill");
        bottomPlay.classList.add("ri-play-fill");
    }
}

// Ab current song play karo
if (alreadyPlaying || !element.play) {

    element.play = true;

    play.classList.remove("ri-play-circle-fill");
    play.classList.add("ri-pause-circle-fill");

    bottomPlay.classList.remove("ri-play-fill");
    bottomPlay.classList.add("ri-pause-fill");

    playSong(element);
}
})
   
//     if(play.classList.contains("ri-play-circle-fill")){
       
//         play.classList.remove("ri-play-circle-fill");
//         bottomPlay.classList.remove("ri-play-fill");
//         play.classList.add("ri-pause-circle-fill");
//         bottomPlay.classList.add("ri-pause-fill");
//  playSong(element);
//      element.play =true;


//     }
    // else{
    //     play.classList.remove("ri-pause-circle-fill");
    //     bottomPlay.classList.remove("ri-pause-fill");
    //     play.classList.add("ri-play-circle-fill");
    //      bottomPlay.classList.add("ri-play-fill");
    //   audio.pause();
      
    // }




    
// songName

let songtittle = document.createElement("div");
songtittle.classList.add("song-title");
songtittle.innerText = element.songname;
songBox.appendChild(songtittle);

//artistName
let artistname = document.createElement("div");
artistname.classList.add("artist-name");
artistname.innerText = element.singer;
songBox.appendChild(artistname);

//songBottom
let songBottom = document.createElement("div");
songBottom.classList.add("song-bottom");
//heart in songBottom
let heart = document.createElement("i");
heart.classList.add("ri-heart-line");
songBottom.appendChild(heart);

// heartworking

heart.addEventListener("click", () => {

   if (element.like === false) {
    element.like = true;

    heart.classList.remove("ri-heart-line");
    heart.classList.add("ri-heart-fill");
    heart.classList.add("like");

} else {
    element.like = false;

    heart.classList.remove("ri-heart-fill");
    heart.classList.add("ri-heart-line");
    heart.classList.remove("like");
}

});


// More icon
let more = document.createElement("i");
more.classList.add("ri-more-2-fill");

songBottom.appendChild(more);


// More menu
let morediv = document.createElement("div");
morediv.classList.add("morediv");

morediv.innerHTML = `
    <div class="more-option download">
        <i class="ri-download-2-line"></i>
        <span>Download</span>
    </div>

    <div class="more-option info">
        <i class="ri-information-line"></i>
        <span>Song Info</span>
    </div>
`;

songBox.appendChild(morediv);


// More button click
more.addEventListener("click", (e) => {

    e.stopPropagation();

    morediv.classList.toggle("show");

});



//-----------------------------------playsongbox-------------------------------------------------------------//
// songBox.addEventListener("click", () => {

//     right.appendChild(rightInbox);

//     click(element);

// });




//----------------------------------botttomBox---------------------------------------------------------//

songBox.addEventListener("click",()=>{
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

//durestion
let progressvlaue =document.querySelector(".progress-bar");
let progressBar = document.querySelector(".progress-bar");
progressBar.addEventListener("click", (e) => {
    let width = progressBar.clientWidth;
    let clickX = e.offsetX;

    audio.currentTime = (clickX / width) * audio.duration;
});




mainplay.addEventListener("click", () => {
    if(songcheck ===false){


         play.classList.remove("ri-play-circle-fill");
         bottomPlay.classList.remove("ri-play-fill");
         play.classList.add("ri-pause-circle-fill");
         bottomPlay.classList.add("ri-pause-fill");
           playSong(element);
           songcheck = true
    }
    else{
        play.classList.remove("ri-pause-circle-fill");
        bottomPlay.classList.remove("ri-pause-fill");
         play.classList.add("ri-play-circle-fill");
         bottomPlay.classList.add("ri-play-fill");
          audio.pause();
          songcheck=false;

    }
});

})






songBox.appendChild(songBottom);
right.appendChild(songBox);
});



//---------------------------------bottomBox-----------------------------------------//
