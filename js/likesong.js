import { userData } from "./user.js";




export function likesong() {
    let logo = document.querySelector(".ri-user-3-line");
    let like = document.querySelector("#likesong");
    let right = document.querySelector(".right");
    let bottomPlay = document.querySelector("#buttomplay");

    let currentSong = null;
    let currentPlayIcon = null;
    let audio = new Audio();

    if (bottomPlay) {
        bottomPlay.addEventListener("click", () => {
            if (!currentSong) return;

            if (audio.paused) {
                audio.play();

                bottomPlay.classList.remove("ri-play-fill");
                bottomPlay.classList.add("ri-pause-fill");

                if (currentPlayIcon) {
                    currentPlayIcon.classList.remove("ri-play-circle-fill");
                    currentPlayIcon.classList.add("ri-pause-circle-fill");
                }
            } else {
                audio.pause();

                bottomPlay.classList.remove("ri-pause-fill");
                bottomPlay.classList.add("ri-play-fill");

                if (currentPlayIcon) {
                    currentPlayIcon.classList.remove("ri-pause-circle-fill");
                    currentPlayIcon.classList.add("ri-play-circle-fill");
                }
            }
        });
    }

    let progressValue = document.querySelector(".progress-value");
    let progressBar = document.querySelector(".progress-bar");
    let currentTime = document.querySelector("#startpoint");

    if (progressBar) {
        progressBar.addEventListener("click", (event) => {
            if (!audio.duration) return;

            let width = progressBar.clientWidth;
            let clickX = event.offsetX;

            audio.currentTime = (clickX / width) * audio.duration;
        });
    }

    audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;

        let percent = (audio.currentTime / audio.duration) * 100;

        if (progressValue) {
            progressValue.style.width = percent + "%";
        }

        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (currentTime) {
            currentTime.innerText = `${minutes}:${seconds}`;
        }
    });

    audio.addEventListener("ended", () => {
        if (bottomPlay) {
            bottomPlay.classList.remove("ri-pause-fill");
            bottomPlay.classList.add("ri-play-fill");
        }

        if (currentPlayIcon) {
            currentPlayIcon.classList.remove("ri-pause-circle-fill");
            currentPlayIcon.classList.add("ri-play-circle-fill");
        }
    });

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

            likes.addEventListener("click", () => {
                let img = document.querySelector("#bottomimg");

                if (img) {
                    img.src = song.img;
                }

                let nameBottom = document.querySelector("#bottomname");

                if (nameBottom) {
                    nameBottom.innerText = song.songname;
                }

                let singerBottom = document.querySelector("#singerbottom");

                if (singerBottom) {
                    singerBottom.innerText = song.singer;
                }

                let endpoint = document.querySelector("#endpoint");

                if (endpoint) {
                    endpoint.innerText = song.duration;
                }

                if (currentSong === song) {
                    if (audio.paused) {
                        audio.play();

                        likebut.classList.remove("ri-play-circle-fill");
                        likebut.classList.add("ri-pause-circle-fill");

                        if (bottomPlay) {
                            bottomPlay.classList.remove("ri-play-fill");
                            bottomPlay.classList.add("ri-pause-fill");
                        }
                    } else {
                        audio.pause();

                        likebut.classList.remove("ri-pause-circle-fill");
                        likebut.classList.add("ri-play-circle-fill");

                        if (bottomPlay) {
                            bottomPlay.classList.remove("ri-pause-fill");
                            bottomPlay.classList.add("ri-play-fill");
                        }
                    }

                    return;
                }

                if (currentPlayIcon) {
                    currentPlayIcon.classList.remove("ri-pause-circle-fill");
                    currentPlayIcon.classList.add("ri-play-circle-fill");
                }

                currentSong = song;
                currentPlayIcon = likebut;

                audio.src = song.song;
                audio.play();

                likebut.classList.remove("ri-play-circle-fill");
                likebut.classList.add("ri-pause-circle-fill");

                if (bottomPlay) {
                    bottomPlay.classList.remove("ri-play-fill");
                    bottomPlay.classList.add("ri-pause-fill");
                }
            });

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