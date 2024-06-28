
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
        './public/audio/musik1.mp3',
        './public/audio/musik2.mp3',
        './public/audio/musik3.mp3',
        './public/audio/musik4.mp3',
        './public/audio/musik5.mp3',
        './public/audio/musik7.mp3',
        './public/audio/musik8.mp3',
        './public/audio/musik9.mp3',
        './public/audio/musik10.mp3',
        './public/audio/musik11.mp3',
        './public/audio/musik12.mp3'
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

//alert notif kontak
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form[name="contact-bm"]');
    const alertMessage = document.querySelector('.lblWarning');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Menghentikan pengiriman form bawaan

        // Simulasi pengiriman data (di sini Anda dapat menambahkan logika pengiriman data)
        setTimeout(function() {
            // Menampilkan pesan berhasil
            alertMessage.classList.remove('hidden');

            // Reset form
            form.reset();

            // Menghilangkan pesan berhasil setelah beberapa detik
            setTimeout(function() {
                alertMessage.classList.add('hidden');
            }, 60000); // Menghilangkan pesan setelah 60 detik
        }, 1000); // Menambahkan penundaan untuk simulasi pengiriman data
    });
});

//tombol silang pada alert
    document.addEventListener("DOMContentLoaded", function() {
        const closeButton = document.querySelector('[data-dismissible-target="alert"]');
        const alertMessage = document.querySelector('.lblWarning');

        if (closeButton && alertMessage) {
            closeButton.addEventListener("click", function() {
                alertMessage.classList.add('hidden'); // Menyembunyikan alert
            });
        }
    });


  




