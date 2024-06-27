
// bagian toggle button humburger menu
const hamburger = document.querySelector('#btn-hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-aktif');
    navMenu.classList.toggle('hidden');
});
//hamburger klik in all
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-aktif');
        navMenu.classList.add('hidden');
    }
});

// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if(window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    const audioFiles = [
        './audio/musik1.mp3',
        './audio/musik2.mp3',
        './audio/musik3.mp3',
        './audio/musik4.mp3',
        './audio/musik5.mp3',
        './audio/musik7.mp3',
        './audio/musik8.mp3',
        './audio/musik9.mp3',
        './audio/musik10.mp3',
        './audio/musik11.mp3',
        './audio/musik12.mp3'
    ];

    let currentAudioIndex = 0;
    const audioPlayer = document.getElementById('audioPlayer');
    const pausePlayButton = document.getElementById('pausePlayButton');
    // Function to load and play the next audio file
    const playNextAudio = () => {
        if (currentAudioIndex < audioFiles.length) {
            audioPlayer.src = audioFiles[currentAudioIndex];
            audioPlayer.play();
            currentAudioIndex++;
        } else {
            // Reset to the first audio file after all files have been played
            currentAudioIndex = 0;
            playNextAudio();
        }
    };

    // Event listener to play the next audio file when the current one ends
    audioPlayer.addEventListener('ended', playNextAudio);

    // Start playing the first audio file
    playNextAudio();

pausePlayButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (audioPlayer.paused) {
        audioPlayer.play();
        pausePlayButton.textContent = 'BM';
    } else {
        audioPlayer.pause();
        pausePlayButton.textContent = 'BM';
    }
});
});

//dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//pindah lokasi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
  




