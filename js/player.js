import { songData } from "../data/songbox.js";
import { artistsdata } from "../data/artists.js";
import { songplay } from "./songplay.js";





export function artists() {

    let artists = document.querySelector("#artists");
    let right = document.querySelector(".right");
  

   

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
  
linediv.addEventListener("click" ,()=>{
    songplay(e ,playbutton);
})


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



}


