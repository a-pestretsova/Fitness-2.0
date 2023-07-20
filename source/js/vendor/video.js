// let video = document.querySelector('.intro__video');

// let videoButton = document.querySelector('.intro__video-btn');

// function videoButtonOnclick() {
//   if (video.paused) {
//     video.play();
//     videoButton.style.display = 'none';
//   } else {
//     video.pause();
//   }
// }

// function videoOnclick() {
//   video.pause();
//   videoButton.style.display = 'block';
// }

// videoButton.addEventListener('click', videoButtonOnclick);
// video.addEventListener('click', videoOnclick);

let videoEl = document.getElementsByTagName('video');

let videoButton = document.querySelector('.intro__video-btn');

videoButton.addEventListener('click', function () {
  if (videoEl.paused) {
      videoEl.play();
  } else {
      videoEl.pause();
  }
}, false);
