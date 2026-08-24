import { userData } from "./user.js";
import {  songplay } from "./songplay.js";

export function usercheck(){
      // Login check
      let logo = document.querySelector(".ri-user-3-line");
        if (logo.style.color !== "green") {
            alert("Please Login or SignUp");
          
            return false;
        }
}


export function likesong() {
    let logo = document.querySelector(".ri-user-3-line");
    let like = document.querySelector("#likesong");
    let right = document.querySelector(".right");
    let bottomPlay = document.querySelector("#buttomplay");

   

   

    like.addEventListener("click", () => {
        if (logo.style.color !== "green") {
            alert("Please Login or SignUp");
            return;
        }

        right.innerHTML = "";

        let mdiv = document.createElement("div");
        mdiv.classList.add("mdiv");

        let likediv = document.createElement("div");
        likediv.classList.add("likediv");

        let liketop = document.createElement("div");
        liketop.classList.add("liketop");

        let heart = document.createElement("p");
        heart.classList.add("likeheart");
        heart.innerText = "♡";
        liketop.appendChild(heart);

        let liketext = document.createElement("div");
        liketext.classList.add("liketext");

        let p = document.createElement("p");
        p.classList.add("likep");
        p.innerText = "Playlist";
        liketext.appendChild(p);

        let h = document.createElement("h1");
        h.classList.add("likeh");
        h.innerText = "Liked Songs";
        liketext.appendChild(h);

        let curr = userData.find(v => v.vist === true);

        if (!curr) {
            console.log("Current user not found");
            alert("Please login again");
            return;
        }

        if (!curr.like) {
            curr.like = [];
        }

        let n = document.createElement("h1");
        n.classList.add("liken");
        n.innerText = curr.userName;
        liketext.appendChild(n);

        likediv.appendChild(liketop);
        likediv.appendChild(liketext);

        let likemain = document.createElement("div");
        likemain.classList.add("likemain");

        curr.like.forEach((song) => {
            let likes = document.createElement("div");
            likes.classList.add("likes");

            let likeimg = document.createElement("img");
            likeimg.classList.add("likeimg");
            likeimg.src = song.img;
            likes.appendChild(likeimg);

            let likename = document.createElement("p");
            likename.classList.add("likename");
            likename.innerText = song.songname;
            likes.appendChild(likename);

            let likelen = document.createElement("p");
            likelen.classList.add("likelen");
            likelen.innerText = song.duration;
            likes.appendChild(likelen);

            let likebut = document.createElement("button");
            likebut.classList.add(
                "likebut",
                "ri-play-circle-fill"
            );
            likes.appendChild(likebut);

        likes.addEventListener("click",()=>{
          songplay(song, likebut, curr.like);
            
        })
            
           
     
            likemain.appendChild(likes);
        });

        mdiv.appendChild(likediv);
        mdiv.appendChild(likemain);
        right.appendChild(mdiv);
    });
}
//---------------------------box in heart------------------------------------//
//songBox in heart
export function heartWorking(heart, element) {

heart.addEventListener("click", () => {

     
    // Login check
    usercheck();
     


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
                if (!curr.like.some(song => song.id === element.id)) {
    curr.like.push(element);
}

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