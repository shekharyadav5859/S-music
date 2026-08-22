import { songData } from "../data/songbox.js";
import { artistsdata } from "../data/artists.js";



// artists
function playsong(){
    let audio = new Audio();
    audio.src= e.song;
    audio.play();
}


export function artists() {
 let mainplay = document.querySelector(".main-play");
 let bottomPlay = document.querySelector("#buttomplay");
    let artists = document.querySelector("#artists");
    let right = document.querySelector(".right");
  
let currentSong = null;
let currentPlayIcon = null;

let audio = new Audio();

function playsong(song) {

    audio.src = song.song;

    audio.play();
}
   

    artists.addEventListener("click", () => {

        right.innerHTML = "";

       

           artistsdata.forEach((element) => {

            let songBox = document.createElement("div");
            songBox.classList.add("song-box");

            // Image
            let imgSong = document.createElement("div");
            imgSong.classList.add("imgartists");

            let img = document.createElement("img");
            img.src = element.img;

            imgSong.appendChild(img);
            songBox.appendChild(imgSong);

            // Artist name
            let artistName = document.createElement("div");
            artistName.classList.add("song-title");
            artistName.innerText = element.name;

            songBox.appendChild(artistName);

            //languges
            let languges = document.createElement("div");
            languges.classList.add("languges");
            languges.innerText = element.language;

            songBox.appendChild(languges);

            //bio
            let bio = document.createElement("div");
            bio.classList.add("bio");
            bio.innerText = element.bio;
            songBox.appendChild(bio);



// click artists
songBox.addEventListener("click", () => {

    right.innerHTML = "";

    let maindiv = document.createElement("div");
    maindiv.classList.add("mainDiv");


    // Singer Background
  

    let singerBgDiv = document.createElement("div");
    singerBgDiv.classList.add("singerbgdiv");

    let singerImg = document.createElement("img");
    singerImg.src = element.img;

    singerBgDiv.appendChild(singerImg);


    
    // Singer Info
    

    let singerInfo = document.createElement("div");
    singerInfo.classList.add("singerInfo");

    let namediv = document.createElement("div");
    namediv.classList.add("namediv");
    namediv.innerText = element.name;

    let singerbio = document.createElement("div");
    singerbio.classList.add("singerbio");
    singerbio.innerText = element.bio;

    let singerG = document.createElement("div");
    singerG.classList.add("singerG");
    singerG.innerText = element.genre;

    singerInfo.append(
        namediv,
        singerbio,
        singerG
    );

    singerBgDiv.appendChild(singerInfo);


    // Singer Songs
  

    let singerNameFilter = element.name;

    let result = songData.filter((song) =>
        song.singer
            .toLowerCase()
            .includes(singerNameFilter.toLowerCase())
    );

 //bottombox singer play for song   
let singerbottom = document.createElement("div");
singerbottom.classList.add("singerbottom");
   
//result on forecha



result.forEach((e) => {

    let linediv = document.createElement("div");
    linediv.classList.add("linediv");

     console.log(linediv);

    // IMAGE
  

    let lineimg = document.createElement("img");
    lineimg.classList.add("lineimg");
    lineimg.src = e.img;
    linediv.appendChild(lineimg);


   
    // SONG NAME
   

    let namesong = document.createElement("h3");
    namesong.classList.add("namesong");
    namesong.innerText = e.songname;
    linediv.appendChild(namesong);
    console.log(namesong.innerText);


    // DURATION
  

    let time = document.createElement("p");

    time.classList.add("time");

    time.innerText = e.duration;

    linediv.appendChild(time);


 
    // PLAY BUTTON
  

    let playbutton = document.createElement("button");

    playbutton.classList.add(
        "playbutton",
        "ri-play-circle-fill"
    );

    linediv.appendChild(playbutton);


   
    // SONG CLICK
  

    linediv.addEventListener("click", () => {

        // Bottom image
        let img = document.querySelector("#bottomimg");
        if (img) {
            img.src = e.img;
        }


        // Bottom song name
        let namebottom = document.querySelector("#bottomname");

        if (namebottom) {
            namebottom.innerText = e.songname;
        }


        // Bottom singer
        let singerBottom = document.querySelector("#singerbottom");

        if (singerBottom) {
            singerBottom.innerText = e.singer;
        }


        // Duration
        let endpoint = document.querySelector("#endpoint");

        if (endpoint) {
            endpoint.innerText = e.duration;
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
    
        // SAME SONG
     

        if (currentSong === e) {

            if (audio.paused) {

                audio.play();

                playbutton.classList.remove(
                    "ri-play-circle-fill"
                );

                playbutton.classList.add(
                    "ri-pause-circle-fill"
                );

            } else {

                audio.pause();

                playbutton.classList.remove(
                    "ri-pause-circle-fill"
                );

                playbutton.classList.add(
                    "ri-play-circle-fill"
                );
            }

            return;
        }


       
        // OLD SONG RESET
       

        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-pause-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-play-circle-fill"
            );
        }


       
        // NEW SONG
       

        currentSong = e;

        currentPlayIcon = playbutton;


        audio.src = e.song;

        audio.play();


        playbutton.classList.remove(
            "ri-play-circle-fill"
        );

        playbutton.classList.add(
            "ri-pause-circle-fill"
        );


        // Bottom play button
        let bottomPlay = document.querySelector("#buttomplay");

        if (bottomPlay) {

            bottomPlay.classList.remove(
                "ri-play-fill"
            );

            bottomPlay.classList.add(
                "ri-pause-fill"
            );
        }

    });


  
    // SONG FINISHED
   

    audio.addEventListener("ended", () => {

        if (currentPlayIcon === playbutton) {

            playbutton.classList.remove(
                "ri-pause-circle-fill"
            );

            playbutton.classList.add(
                "ri-play-circle-fill"
            );

            currentSong = null;

            currentPlayIcon = null;
        }

    });


    singerbottom.appendChild(linediv);

});


    //  mainDiv
    maindiv.append(
        singerBgDiv
      ,singerbottom

       
    );

    
    right.appendChild(maindiv);

    
    
    // Canvas
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    singerImg.onload = () => {

        canvas.width = singerImg.naturalWidth;
        canvas.height = singerImg.naturalHeight;

        ctx.drawImage(
            singerImg,
            0,
            0
        );

        let imageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        ).data;

        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;

        for (let i = 0; i < imageData.length; i += 40) {

            r += imageData[i];
            g += imageData[i + 1];
            b += imageData[i + 2];

            count++;
        }

        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);


        singerBgDiv.style.background = `
            linear-gradient(
                to bottom,
                rgba(${r}, ${g}, ${b}, 1),
                rgb(41, 40, 40)
            )
        `;
    };

});

            // Right box me add
            right.appendChild(songBox);
        });
    });


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

}


