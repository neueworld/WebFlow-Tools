// Get All Videos
const videos = document.querySelectorAll(" .hover_video_wrapper .video");

//Loop over videos to add eventListeners
for (const video of videos) {
    //Play on Mouseover
    video.addEventListener('mouseover', function() { 
      video.play();
// Feel free to add functionalty here
    }, false);
  //Play on Mouseout
    video.addEventListener('mouseout', function() { 
// Feel free to add functionalty here
video.pause();
    }, false);
}
