//home
import { artistsdata } from "../data/artists.js";
export function home(){
let home=document.querySelector("#home");
home.addEventListener("click" ,()=>{
    window.location.reload();
})


}

// artists



export function artists() {

    let artists = document.querySelector("#artists");
    let right = document.querySelector(".right");

    artists.addEventListener("click", () => {

        right.innerHTML = "";

        // let heading = document.createElement("h1");
        // heading.innerText = "Artists";
        // right.appendChild(heading);

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


            // Right box me add
            right.appendChild(songBox);
        });
    });
}


