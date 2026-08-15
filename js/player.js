export let rightInbox = document.createElement("div");

export function click(element) {

    rightInbox.classList.add("rightplay");

    // ---------- CLOSE ----------
    let remove = document.createElement("i");
    remove.classList.add("ri-close-line");

    rightInbox.appendChild(remove);


    // ---------- IMAGE ----------
    let img = document.createElement("img");
    img.src = element.img;


    // ---------- SONG NAME ----------
    let name = document.createElement("h3");
    name.innerText = element.songname;


    // ---------- SINGER ----------
    let singer = document.createElement("p");
    singer.innerText = element.singer;


    // ---------- NOW SONG ----------
    let nowSong = document.createElement("div");
    nowSong.classList.add("now-song");

    nowSong.appendChild(img);
    nowSong.appendChild(name);
    nowSong.appendChild(singer);


    // ---------- PLAYER BUTTONS ----------
    let playerButtons = document.createElement("div");
    playerButtons.classList.add("player-buttons");


    // Previous <<
    let previous = document.createElement("i");
    previous.classList.add("ri-skip-back-fill");


    // Play ▶
    let play = document.createElement("i");
    play.classList.add("ri-play-fill");


    // Next >>
    let next = document.createElement("i");
    next.classList.add("ri-skip-forward-fill");


    playerButtons.appendChild(previous);
    playerButtons.appendChild(play);
    playerButtons.appendChild(next);


    // ---------- ADD EVERYTHING ----------
    rightInbox.appendChild(nowSong);
    rightInbox.appendChild(playerButtons);
}

