import { songData } from "../data/songbox.js";

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

  //playbutton
  let play = document.createElement("i");
play.classList.add("ri-play-circle-fill");

imgSong.appendChild(play); 
    
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








songBox.appendChild(songBottom);
right.appendChild(songBox);
});
