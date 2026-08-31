import { songData } from "../data/songbox.js";
import { heartWorking } from "./likesong.js";
import { songplay } from "./songplay.js";
export function home() {

    let home = document.querySelector("#home");

    home.addEventListener("click", () => {

        let right = document.querySelector(".right");

        right.innerHTML = "";


        // Home songs show

       
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
       play.dataset.songId = element.id;
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
       // let addplaylist = document.createElement("p");
       // addplaylist.id = "playList"
       // addplaylist.innerText ="+"
       // songBottom.appendChild(addplaylist);
       // addplaylist.addEventListener("click", () => {
       //     addSongToPlaylist(element);
       // });
       
       
       
       
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
       
            <div class="more-option save">   
             <i class="ri-bookmark-line"></i>     
               <span> save</span>
           </div>
       
             <div class="more-option info">
          <i class="ri-information-line"></i>
               <span> Save</span>
           </div>
       
              <div class="more-option playlist">
         <i class="ri-play-list-add-line"></i>
               <span> Add Playlist</span>
           </div>
           
          `;
       
          
       let palylist = morediv.querySelector(".playlist");
       palylist.addEventListener("click" ,()=>{
           addSongToPlaylist(element);
       }
       
       )
       
        let saves = morediv.querySelector(".save");
       saves.addEventListener("click", () => {
           save(element);
       });
       
       
       songBox.appendChild(morediv);
       
       
       // More button click
       more.addEventListener("click", (e) => {
       
           e.stopPropagation();
       
           morediv.classList.toggle("show");
       
       });
       
       
       
       //backword
       
       songBox.addEventListener("click", ()=>{
           songplay(element,play ,songData);
       })
       
       
       //----------------------------------botttomBox---------------------------------------------------------//
       
        // Canvas
       let canvas = document.createElement("canvas");
       let ctx = canvas.getContext("2d");
       
       img.onload = () => {
       
           canvas.width = img.naturalWidth;
           canvas.height = img.naturalHeight;
       
           ctx.drawImage(
               img,
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
       
            // color save
           songBox.dataset.color = `rgb(${r}, ${g}, ${b})`;
       };
       
       songBox.addEventListener("mouseenter", () => {
       
           let color = songBox.dataset.color;
       
           songBox.style.background = `
               linear-gradient(
                   to bottom,
                   ${color},
                   rgb(41, 40, 40)
               )
           `;
       });
       
       songBox.addEventListener("mouseleave", () => {
       
           songBox.style.background = "";
       });
       
       
       
       
       
       
       
       songBox.appendChild(songBottom);
       right.appendChild(songBox);
       });

    });

}