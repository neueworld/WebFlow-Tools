const shareButtons = document.querySelectorAll("[nw-share]");

shareButtons.forEach(button => {
  button.addEventListener("click", sharePage);
});

function sharePage(event) {
  const network = event.target.getAttribute("nw-share");
  if (network === "facebook") {
    shareFacebook();
  }
  if (network === "pinterest") {
    sharePinterest();
  }
  if (network === "twitter") {
    shareTwitter();
  }
  if (network === "linkedin") {
    shareLinkedIn();
  }
  if (network === "reddit") {
    shareReddit();
  }
  if (network === "email") {
    shareEmail();
  }
}

function shareFacebook() {
  const url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&title=" + encodeURIComponent(document.title) + "&description=" + encodeURIComponent(document.description);
  window.open(url, "facebook-share-dialog", "width=626,height=436,left="+(screen.width/2-313)+",top="+(screen.height/2-218));
}

function sharePinterest() {
  const url = "https://pinterest.com/pin/create/button/?url=" + encodeURIComponent(window.location.href) + "&media=" + encodeURIComponent(document.image) + "&description=" + encodeURIComponent(document.title);
  window.open(url, "pinterest-share-dialog", "width=800,height=600,left="+(screen.width/2-400)+",top="+(screen.height/2-300));
}

function shareLinkedIn() {
  const url = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href) + "&title=" + encodeURIComponent(document.title) + "&summary=" + encodeURIComponent(document.description);
  window.open(url, "linkedin-share-dialog", "width=800,height=600,left="+(screen.width/2-400)+",top="+(screen.height/2-300));
}

function shareTwitter() {
    const url = "https://twitter.com/share?url="+encodeURIComponent(window.location.href)+"&text="+encodeURIComponent(document.title);
    window.open(url, "twitter-share-dialog", "width=626,height=436,left="+(screen.width/2-313)+",top="+(screen.height/2-218));
}

function shareEmail() {
    const url = "mailto:?subject="+encodeURIComponent(document.title)+"&body="+encodeURIComponent(window.location.href);
    window.location.href = url;
}

function shareReddit() {
    const url = "https://www.reddit.com/submit?url="+encodeURIComponent(window.location.href);
    window.open(url, "reddit-share-dialog", "width=626,height=436,left="+(screen.width/2-313)+",top="+(screen.height/2-218));
}
