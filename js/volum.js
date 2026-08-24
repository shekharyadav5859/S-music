import { audio } from "./songplay.js";
let volumeIcon = document.querySelector(".ri-volume-up-line");
let volumeBar = document.querySelector(".volume");
let volumeValue = volumeBar.querySelector("div");


let oldVolume = 1;


export function volume() {

    audio.volume = 1;

    volumeValue.style.width = "100%";


    // Volume click

    volumeBar.addEventListener("click", (e) => {

        let rect =
            volumeBar.getBoundingClientRect();

        let clickX =
            e.clientX - rect.left;

        let value =
            clickX / rect.width;


        value =
            Math.max(0, Math.min(1, value));


        audio.volume = value;

        audio.muted = false;

        volumeValue.style.width =
            (value * 100) + "%";


        // icon

        if (value === 0) {

            volumeIcon.classList.remove(
                "ri-volume-up-line"
            );

            volumeIcon.classList.add(
                "ri-volume-mute-line"
            );

        } else {

            volumeIcon.classList.remove(
                "ri-volume-mute-line"
            );

            volumeIcon.classList.add(
                "ri-volume-up-line"
            );
        }

    });



    // Volume drag

    volumeBar.addEventListener("mousemove", (e) => {

        if (e.buttons !== 1) {
            return;
        }


        let rect =
            volumeBar.getBoundingClientRect();

        let clickX =
            e.clientX - rect.left;

        let value =
            clickX / rect.width;


        value =
            Math.max(0, Math.min(1, value));


        audio.volume = value;

        audio.muted = false;


        volumeValue.style.width =
            (value * 100) + "%";


        // icon

        if (value === 0) {

            volumeIcon.classList.remove(
                "ri-volume-up-line"
            );

            volumeIcon.classList.add(
                "ri-volume-mute-line"
            );

        } else {

            volumeIcon.classList.remove(
                "ri-volume-mute-line"
            );

            volumeIcon.classList.add(
                "ri-volume-up-line"
            );
        }

    });



    // Mute / Unmute

    volumeIcon.addEventListener("click", () => {

        if (audio.muted) {

            audio.muted = false;

            audio.volume = oldVolume;

            volumeValue.style.width =
                (oldVolume * 100) + "%";


            volumeIcon.classList.remove(
                "ri-volume-mute-line"
            );

            volumeIcon.classList.add(
                "ri-volume-up-line"
            );

        } else {

            oldVolume = audio.volume;

            audio.muted = true;


            volumeIcon.classList.remove(
                "ri-volume-up-line"
            );

            volumeIcon.classList.add(
                "ri-volume-mute-line"
            );

        }

    });

}