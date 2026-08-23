import { songData } from "../data/songbox.js";
import { artists  } from "./player.js";
import { home } from "./home.js";
import { input } from "./serach.js";
import { setting } from "./setting.js";
import { user } from "./user.js";
import { heartWorking } from "./likesong.js";
import { likesong } from "./likesong.js";
import { playlist } from "./playlist.js";
import { addSongToPlaylist } from "./playlist.js";
   
import { songplay } from "./songplay.js";



artists();
home();
input();
user();
likesong();
playlist();




//rightBox

 let right = document.querySelector(".right");



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





    //playButton



let play = document.createElement("i");

play.classList.add( "listbutton",
    "ri-play-circle-fill");

imgSong.appendChild(play);

 


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
heartWorking(heart ,element);

//addplaylist
let addplaylist = document.createElement("p");
addplaylist.id = "playList"
addplaylist.innerText ="+"
songBottom.appendChild(addplaylist);
addplaylist.addEventListener("click", () => {
    addSongToPlaylist(element);
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




songBox.addEventListener("click", ()=>{
    songplay(element,play);
})


//----------------------------------botttomBox---------------------------------------------------------//











songBox.appendChild(songBottom);
right.appendChild(songBox);
});




        



//---------------------------------bottomBox-----------------------------------------//

 