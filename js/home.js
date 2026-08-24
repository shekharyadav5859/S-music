import { songData } from "../data/songbox.js";
import { heartWorking } from "./likesong.js";
import { songplay } from "./songplay.js";
export function home() {

    let home = document.querySelector("#home");

    home.addEventListener("click", () => {

        let right = document.querySelector(".right");

        right.innerHTML = "";


        // Home ke songs show karo

        songData.forEach((element) => {

            let songBox = document.createElement("div");
            songBox.classList.add("song-box");


            // Image

            let imgSong = document.createElement("div");
            imgSong.classList.add("imgsong");

            let img = document.createElement("img");
            img.src = element.img;

            imgSong.appendChild(img);
            songBox.appendChild(imgSong);


            // Play button

            let play = document.createElement("i");

            play.classList.add(
                "listbutton",
                "ri-play-circle-fill"
            );

            play.dataset.songId = element.id;

            imgSong.appendChild(play);


            // Song title

            let songtittle =
                document.createElement("div");

            songtittle.classList.add("song-title");
            songtittle.innerText = element.songname;

            songBox.appendChild(songtittle);


            // Artist

            let artistname =
                document.createElement("div");

            artistname.classList.add("artist-name");
            artistname.innerText = element.singer;

            songBox.appendChild(artistname);


            // Bottom

            let songBottom =
                document.createElement("div");

            songBottom.classList.add("song-bottom");


            // Heart

            let heart =
                document.createElement("i");

            heart.classList.add("ri-heart-line");

            songBottom.appendChild(heart);

            heartWorking(
                heart,
                element
            );


            // Playlist

            let addplaylist =
                document.createElement("p");

            addplaylist.id = "playList";
            addplaylist.innerText = "+";

            songBottom.appendChild(addplaylist);


            addplaylist.addEventListener(
                "click",
                (e) => {

                    e.stopPropagation();

                    addSongToPlaylist(element);

                }
            );


            // More

            let more =
                document.createElement("i");

            more.classList.add(
                "ri-more-2-fill"
            );

            songBottom.appendChild(more);


            let morediv =
                document.createElement("div");

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


            more.addEventListener(
                "click",
                (e) => {

                    e.stopPropagation();

                    morediv.classList.toggle("show");

                }
            );


            // Song play

            songBox.addEventListener(
                "click",
                (e) => {

                    e.stopPropagation();

                    songplay(
                        element,
                        play,
                        songData
                    );

                }
            );


            songBox.appendChild(
                songBottom
            );

            right.appendChild(
                songBox
            );

        });

    });

}