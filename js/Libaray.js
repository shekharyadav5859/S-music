import { usercheck } from "./likesong.js";
import { songplay } from "./songplay.js";
import { userData } from "./user.js";

 let librarys =document.querySelector("#Libaray");

export function library(elemet){
 // let curr = userData.find(v=>v.vist === true);
librarys.addEventListener("click" ,()=>{
     //login check    
     if(usercheck() === false){
            return;
          }
  let curr = userData.find(v=>v.vist === true);
    if(!curr){
        return;
    }
    if(curr){
       showlibaray(curr);
    }
})
    

} 

//show libaray
function showlibaray(curr){
      let right = document.querySelector(".right");
    right.innerHTML = " ";

    let creatadiv = document.createElement("div");
//headingtop
let playlistheading = document.createElement("div");
playlistheading.classList.add("playlist-header");
playlistheading.innerText = "My Libaray";
creatadiv.appendChild(playlistheading);

  curr.save.forEach((e) => {
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

)
 right.appendChild(creatadiv);
}