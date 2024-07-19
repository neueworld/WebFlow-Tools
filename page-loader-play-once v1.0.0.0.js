document.addEventListener("DOMContentLoaded", function() {
  var preloader = document.getElementById('preloader');
  var delay = preloader.getAttribute('data-delay')
  if (!sessionStorage.getItem('preloaderShown')) {
    preloader.style.display = 'flex';
    setTimeout(function() {
      preloader.style.display = 'none';
    }, delay);
    sessionStorage.setItem('preloaderShown', 'true');
  } else {
    preloader.style.display = 'none';
  }
});
