import { songData } from "../data/songbox.js";
import { userData } from "./user.js";
import { usercheck } from "./likesong.js";
import { songplay } from "./songplay.js";

export function playlist(){
 let playlist = document.querySelector("#playlist");
   playlist.addEventListener("click" ,()=>{

  //login check    
 if(usercheck() === false){
        return;
      }
     showPlaylists();
})
}


//---------------add song in playlist-------------------------//
export function addSongToPlaylist(element) {
//login check    
   if(usercheck() === false){
        return;
      }
// login user 
let curr = userData.find(v=>v.vist === true)
console.log(curr);
//song push
if(curr){
  if(curr.playlist.some(song => song.id === element.id)){
   alert("already add in playlist");
}else{
  curr.playlist.push(element);
   localStorage.setItem("userData",JSON.stringify(userData) );
}
}
}




//--------------------------show playlist right --------------------------------//
function showPlaylists() {
   let right = document.querySelector(".right");
    right.innerHTML = " ";


let curr = userData.find(v => v.vist === true);
//maindiv
let creatadiv = document.createElement("div");
//headingtop
let playlistheading = document.createElement("div");
playlistheading.classList.add("playlist-header");
playlistheading.innerText = "My Playlists";
creatadiv.appendChild(playlistheading);

if (curr && curr.playlist) {
    curr.playlist.forEach((e) => {
    let linediv = document.createElement("div");
    linediv.classList.add("playlistline");

    

    // IMAGE
  

    let lineimg = document.createElement("img");
    lineimg.classList.add("playlistimg");
    lineimg.src = e.img;
    linediv.appendChild(lineimg);


   
    // SONG NAME
   

    let namesong = document.createElement("h3");
    namesong.classList.add("playlistnamesong");
    namesong.innerText = e.songname;
    linediv.appendChild(namesong);
    console.log(namesong.innerText);


    // DURATION
  

    let time = document.createElement("p");
    time.classList.add("playtime");
    time.innerText = e.duration;
    linediv.appendChild(time);


 
    // PLAY BUTTON
let listbutton = document.createElement("button");
listbutton.classList.add(  "listbutton",
    "ri-play-circle-fill");

linediv.appendChild(listbutton);
  
//linediv
linediv.addEventListener("click" ,()=>{
   
    songplay(e,listbutton);
})


  

   
    //livediv append maindiv 
   creatadiv.appendChild(linediv);

   
}

)}

    right.appendChild(creatadiv);
}
   
    




    



