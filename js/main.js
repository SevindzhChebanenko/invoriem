$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false, 
        margin: 48,
        loop: true
    });
  });

  const videoBtn = document.querySelector('#video-btn'),
        videoPicture = document.querySelector('.video__picture'),
        videoWrapper = document.querySelector('.video')

        
    videoBtn.addEventListener('click', function () {
        videoPicture.classList.add('none')
        videoWrapper.classList.remove('video-overlay')
    })