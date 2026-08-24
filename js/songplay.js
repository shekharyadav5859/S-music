export let audio = new Audio();

let currentSong = null;
let currentPlayIcon = null;
let currentSongs = [];

let mainplay = document.querySelector(".main-play");
let bottomPlay = document.querySelector("#buttomplay");



// audio play

function playSong(element) {

    audio.pause();

    audio.src = element.song;

    audio.play().catch(err => {
        console.log("Play error:", err);
    });
}


// song play

export function songplay(element, play, songs) {

    // current song ki list
    if (songs) {
        currentSongs = songs;
    }


    // same song

    if (currentSong === element) {

        if (audio.paused) {

            audio.play().catch(err => {
                console.log(err);
            });

            if (play) {

                play.classList.remove(
                    "ri-play-circle-fill"
                );

                play.classList.add(
                    "ri-pause-circle-fill"
                );

            }

            bottomPlay.classList.remove(
                "ri-play-fill"
            );

            bottomPlay.classList.add(
                "ri-pause-fill"
            );

        }

        else {

            audio.pause();

            if (play) {

                play.classList.remove(
                    "ri-pause-circle-fill"
                );

                play.classList.add(
                    "ri-play-circle-fill"
                );

            }

            bottomPlay.classList.remove(
                "ri-pause-fill"
            );

            bottomPlay.classList.add(
                "ri-play-fill"
            );
        }

        return;
    }


    // old song pause

    if (currentSong) {

        audio.pause();

        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-pause-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-play-circle-fill"
            );
        }
    }


    // current song

    currentSong = element;

    currentPlayIcon = play;


    // new song

    playSong(element);


    // play icon

    if (play) {

        play.classList.remove(
            "ri-play-circle-fill"
        );

        play.classList.add(
            "ri-pause-circle-fill"
        );
    }


    // bottom play

    bottomPlay.classList.remove(
        "ri-play-fill"
    );

    bottomPlay.classList.add(
        "ri-pause-fill"
    );


    // bottom player

    document.querySelector("#bottomimg").src =
        element.img;

    document.querySelector("#bottomname").innerText =
        element.songname;

    document.querySelector("#singerbottom").innerText =
        element.singer;

    document.querySelector("#endpoint").innerText =
        element.duration;
}



// progress bar

let progressvlaue =
    document.querySelector(".progress-value");

let progressBar =
    document.querySelector(".progress-bar");


progressBar.addEventListener("click", (e) => {

    if (!audio.duration) {
        return;
    }

    let width = progressBar.clientWidth;

    let clickX = e.offsetX;

    audio.currentTime =
        (clickX / width) * audio.duration;

});


// current time

let currenttime = document.querySelector("#startpoint");


audio.addEventListener("timeupdate", () => {

    if (!audio.duration) {
        return;
    }

    let percent =
        (audio.currentTime / audio.duration) * 100;

    progressvlaue.style.width =
        percent + "%";


    let minutes =
        Math.floor(audio.currentTime / 60);

    let seconds =
        Math.floor(audio.currentTime % 60);


    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    currenttime.innerText =
        `${minutes}:${seconds}`;
});


// main play

mainplay.addEventListener("click", () => {

    if (!currentSong) {
        return;
    }


    if (audio.paused) {

        audio.play().catch(err => {
            console.log(err);
        });


        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-play-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-pause-circle-fill"
            );
        }


        bottomPlay.classList.remove(
            "ri-play-fill"
        );

        bottomPlay.classList.add(
            "ri-pause-fill"
        );

    }

    else {

        audio.pause();


        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-pause-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-play-circle-fill"
            );
        }


        bottomPlay.classList.remove(
            "ri-pause-fill"
        );

        bottomPlay.classList.add(
            "ri-play-fill"
        );
    }

});



// back and forward

let backSong =  document.querySelector(".ri-skip-back-fill");

let forwordsong =  document.querySelector(".ri-skip-forward-fill");
let shuffleSong = document.querySelector(".ri-shuffle-line");
let repeatSong = document.querySelector(".ri-repeat-2-line");
let isShuffle = false;
let isRepeat = false;

shuffleSong.addEventListener("click", () => {

    isShuffle = !isShuffle;
    console.log(isShuffle);

    if (isShuffle) {

        shuffleSong.style.color = "green";


    } else {

        shuffleSong.style.color = "";

    }

});


repeatSong.addEventListener("click", () => {

    isRepeat = !isRepeat;

    if (isRepeat) {

        audio.loop = true;

        repeatSong.style.color = "green";

    } else {

        audio.loop = false;

        repeatSong.style.color = "";

    }

});
// next song

function getNextSong() {

    if (!currentSong) {
        return null;
    }

    if (currentSongs.length === 0) {
        return null;
    }


    // Alternative ON

    if (isShuffle) {

        if (currentSongs.length === 1) {
            return currentSongs[0];
        }


        let randomIndex;

        do {

            randomIndex =
                Math.floor(
                    Math.random() *
                    currentSongs.length
                );

        } while (
            currentSongs[randomIndex].id ===
            currentSong.id
        );


        return currentSongs[randomIndex];
    }


    // Alternative OFF

    let currIndex =
        currentSongs.findIndex(
            song => song.id === currentSong.id
        );


    if (currIndex === -1) {
        return null;
    }


    let nextIndex =
        (currIndex + 1) %
        currentSongs.length;


    return currentSongs[nextIndex];
}
// function getNextSong() {

//     if (!currentSong) {
//         return null;
//     }

//     if (currentSongs.length === 0) {
//         return null;
//     }


//     let currIndex =
//         currentSongs.findIndex(
//             song => song.id === currentSong.id
//         );


//     if (currIndex === -1) {
//         return null;
//     }


//     let nextIndex =
//         (currIndex + 1) % currentSongs.length;


//     return currentSongs[nextIndex];
// }



// back song

function getBackSong() {

    if (!currentSong) {
        return null;
    }

    if (currentSongs.length === 0) {
        return null;
    }


    let currIndex =
        currentSongs.findIndex(
            song => song.id === currentSong.id
        );


    if (currIndex === -1) {
        return null;
    }


    let backIndex =
        (currIndex - 1 + currentSongs.length) %
        currentSongs.length;


    return currentSongs[backIndex];
}



// find play button

function findPlayButton(song) {

    let buttons =
        document.querySelectorAll(
            ".playbutton, .likebut"
        );


    for (let button of buttons) {

        if (
            String(button.dataset.songId) ===
            String(song.id)
        ) {

            return button;
        }
    }


    return null;
}



// back and forward function

export function backAndForword() {

    // FORWARD

    forwordsong.onclick = () => {

        let next = getNextSong();

        if (!next) {
            return;
        }

        console.log("Current ID:", currentSong.id);
        console.log("Next ID:", next.id);


        // old button reset

        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-pause-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-play-circle-fill"
            );
        }


        // current song

        currentSong = next;


        // new button

        currentPlayIcon =
            findPlayButton(next);


        // play

        playSong(next);


        // new button pause

        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-play-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-pause-circle-fill"
            );
        }


        // bottom play

        bottomPlay.classList.remove(
            "ri-play-fill"
        );

        bottomPlay.classList.add(
            "ri-pause-fill"
        );


        updateBottomPlayer(next);
    };



    // BACK

    backSong.onclick = () => {

        let back = getBackSong();

        if (!back) {
            return;
        }


        console.log("Current ID:", currentSong.id);
        console.log("Back ID:", back.id);


        // old button reset

        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-pause-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-play-circle-fill"
            );
        }


        // current song

        currentSong = back;


        // new button

        currentPlayIcon =
            findPlayButton(back);


        // play

        playSong(back);


        // new button pause

        if (currentPlayIcon) {

            currentPlayIcon.classList.remove(
                "ri-play-circle-fill"
            );

            currentPlayIcon.classList.add(
                "ri-pause-circle-fill"
            );
        }


        // bottom play

        bottomPlay.classList.remove(
            "ri-play-fill"
        );

        bottomPlay.classList.add(
            "ri-pause-fill"
        );


        updateBottomPlayer(back);
    };

}


// bottom player update

function updateBottomPlayer(song) {

    document.querySelector("#bottomimg").src =
        song.img;

    document.querySelector("#bottomname").innerText =
        song.songname;

    document.querySelector("#singerbottom").innerText =
        song.singer;

    document.querySelector("#endpoint").innerText =
        song.duration;
}