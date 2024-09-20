images = {
    'img01' : 'https://files.grafolio.ogq.me/real/5fff45390c8be/IMAGE/2d566a70-47ec-4ba1-836f-fdadf9492dc3.jpg',
    'img02' : 'https://files.grafolio.ogq.me/real/600ec7e7fb4a0/IMAGE/9220d7f2-f0a5-4e63-9248-4e01373efb42.jpeg',
    'img03' : 'https://files.grafolio.ogq.me/real/5f99707007fdc/IMAGE/e0278b76-5b2d-439e-a258-843a446afa60.jpg',
    'img04' : 'https://files.grafolio.ogq.me/real/5facbb5362b4e/IMAGE/4186e585-1df4-404a-90ec-45a74efb36cf.jpeg',
    'img05' : 'https://files.grafolio.ogq.me/real/5aa85b3f01960/IMAGE/eba053e0-67e9-4e13-bb06-32471d42fe76.jpg',
    'img06' : 'https://files.grafolio.ogq.me/real/5f99707007fdc/IMAGE/20219b88-d262-4b8f-9b1d-e88c8350cade.jpg',
    'img07' : 'https://files.grafolio.ogq.me/real/5fe671c469db8/IMAGE/6c455415-60ba-4fae-829b-9394052a96a4.jpeg',
    'img08' : 'https://files.grafolio.ogq.me/real/7e1e44cf19dc4a11ae66a43309d4cb0d/IMAGE/e9f16cf5-2783-4d84-a80a-c4f608d4712d.jpg',
    'img09' : 'https://files.grafolio.ogq.me/real/5fc6e13e534a3/IMAGE/592e1236-fbda-4a65-aa83-aea9e4927327.jpg',
    'img10' : 'https://files.grafolio.ogq.me/real/5facbb5362b4e/IMAGE/806c1c60-b75f-4dce-9ca8-68d4dd8ac70c.jpeg'
}

const BG = document.querySelector('#BG');
const keys = Object.keys(images);
const randomKey = keys[Math.floor(Math.random() * keys.length)];

const todaysBG = images[randomKey];

BG.style.backgroundImage = `url(${todaysBG})`;

// 음악 재생
let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'hGrIgIfCxP0',
        events: {
        'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    const music = document.querySelector('#music');
    
    music.addEventListener('click', function() {
      if (isPlaying) {
        player.pauseVideo();
        music.innerHTML = `<img src="img/music.svg" alt="음악 아이콘"/> Pause`;
    } else {
        player.playVideo();
        music.innerHTML = `<img src="img/music.svg" alt="음악 아이콘"/> Now Playing : lofi music for studying, work`;
      }
      isPlaying = !isPlaying;
    });
}