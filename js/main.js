$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
  });
});

const videoBtn = document.querySelector("#video-btn"),
  videoPicture = document.querySelector(".video__picture"),
  videoWrapper = document.querySelector(".video"),
  video = document.querySelector("#video-file");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("none");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");
    video.play();
  } else {
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
});
