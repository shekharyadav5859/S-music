# S-Music

**S-Music** is a modern and responsive web-based music player built using **HTML, CSS, and JavaScript**. It provides a clean music-listening experience with features like playlists, liked songs, artists, library, and a responsive music player.

## Live Demo

https://shekharyadav5859.github.io/S-music/

## About The Project

S-Music is designed as a modern music streaming interface where users can browse songs, play music, like songs, and manage their personal playlists.

The project focuses on:

* Responsive UI
* Music player functionality
* Song search and browsing
* Liked songs
* Playlists
* Artists section
* LocalStorage-based user data
* Mobile-friendly design

## Features

### Music Player

* Play and pause songs
* Next and previous song
* Display current song information
* Show singer and duration
* Fixed bottom music player

### Like Songs

* Like and unlike songs
* Store liked songs using LocalStorage
* Access liked songs from the Library

### Library

* View saved songs
* Access liked songs and playlists
* Store music data locally in the browser

### Playlist

* Create and manage playlists
* Add songs to playlists
* Store playlist information using LocalStorage

### Artists

The project includes songs from artists such as:

* Udit Narayan
* Sonu Nigam
* Kumar Sanu
* Lata Mangeshkar
* Asha Bhosle
* Shreya Ghoshal
* Arijit Singh

### Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

## Technologies Used

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Git
* GitHub
* GitHub Pages

## Project Structure

```text
S-music/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   └── ...
│
└── README.md
```

## LocalStorage

S-Music uses browser LocalStorage to save user-related music data.

For example:

```javascript
localStorage.setItem("userData", JSON.stringify(userData));
```

This allows liked songs and playlists to remain available when the user reloads the website.

## Run The Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/shekharyadav5859/S-music.git
```

### 2. Open the project

```bash
cd S-music
```

### 3. Run

Open `index.html` in your browser.

You can also use VS Code Live Server to run the project.

## Future Improvements

Some features planned for future versions:

* User authentication
* Backend database
* Advanced song search
* More music categories
* Improved mobile experience
* Dark and Light theme
* User profile
* Cloud playlists
* Online music streaming API
* Recently played songs

## Developer

**Shekhar Yadav**

Frontend Developer | React.js Developer

* GitHub: https://github.com/shekharyadav5859
* LinkedIn: https://www.linkedin.com/in/shekhar-yadav-2a5256323/
* LeetCode: https://leetcode.com/u/shekharyadav5859/

## Support

If you like this project, consider giving the repository a star on GitHub.

---

**S-Music — Listen. Like. Create. Enjoy.**

