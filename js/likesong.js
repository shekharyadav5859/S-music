import { userData } from "./user.js";


export function likesong(){
let logo = document.querySelector(".ri-user-3-line");    
let like = document.querySelector("#likesong");
let right = document.querySelector(".right");

like.addEventListener("click", () => {

   // Login check
    if (logo.style.color !== "green") {
        alert("Please Login or SignUp");
        return;
    }

    
        right.innerHTML = "";
let mdiv = document.createElement("div");
mdiv.classList.add("mdiv");


  let likediv = document.createElement("div");
  likediv.classList.add("likediv");
// heartbox
let liketop = document.createElement("div");
liketop.classList.add("liketop");
//heart
let heart =document.createElement("p");
heart.classList.add("likeheart");
heart.innerText ="♡";
liketop.appendChild(heart);

//text
let liketext  = document.createElement("div");
liketext.classList.add("liketext");
//p
let p = document.createElement("p");
p.classList.add("likep");
p.innerText ="Playlist";
liketext.appendChild(p);
//h like
let h = document.createElement("h1");
h.classList.add("likeh");
h.innerText ="Liked Songs"
liketext.appendChild(h);
//name
 let curr = userData.find(v => v.vist === true);
let n = document.createElement("h1");
n.classList.add("liken");
n.innerHTML =curr.userName;
liketext.appendChild(n);
  
//two div 
likediv.appendChild(liketop);
likediv.appendChild(liketext);


//div no two main file
let likemain = document.createElement("div");
likemain.classList.add("likemain");


curr.like.forEach((e)=>{
    let likes = document.createElement("div");
    likes.classList.add("likes");

    //img
    let likeimg = document.createElement("img");
    likeimg.classList.add("likeimg");
    likeimg.src = e.img;
    likes.appendChild(likeimg);

    //namesong
      let likename = document.createElement("p");
    likename.classList.add("likename");
    likename.innerText = e.songname;
    likes.appendChild(likename);
    console.log(likename.innerText);

      //durestion
      let likelen = document.createElement("p");
    likelen.classList.add("likelen");
    likelen.innerText = e.duration;
    likes.appendChild(likelen);
   
    //button
      let likebut = document.createElement("button");
    likebut.classList.add(
        "likebut",
        "ri-play-circle-fill"
    );
    likes.appendChild(likebut);

    //play




    likemain.appendChild(likes);

})





mdiv.appendChild(likediv);
mdiv.appendChild(likemain);
right.appendChild(mdiv);
});














}

//---------------------------box in heart------------------------------------//
//songBox in heart
export function heartWorking(heart, element) {
let logo = document.querySelector(".ri-user-3-line");
heart.addEventListener("click", () => {

     
    // Login check
        if (logo.style.color !== "green") {
            alert("Please Login or SignUp");
            return;
        }


        // Like
        if (element.like === false) {

            element.like = true;

            heart.classList.remove("ri-heart-line");
            heart.classList.add("ri-heart-fill");
            heart.classList.add("like");

            // Current user
            let curr = userData.find(v => v.vist === true);
            console.log(curr);

            if (curr) {
                curr.like.push(element);

                localStorage.setItem(
                    "userData",
                    JSON.stringify(userData)
                );
            }

        }

        // Unlike
        else {

            element.like = false;

            heart.classList.remove("ri-heart-fill");
            heart.classList.add("ri-heart-line");
            heart.classList.remove("like");

            // Current user
            let curr = userData.find(v => v.vist === true);

            if (curr) {

                curr.like = curr.like.filter(
                    song => song.id !== element.id
                );

                localStorage.setItem(
                    "userData",
                    JSON.stringify(userData)
                );
            }
        }

    });
}