document.addEventListener("DOMContentLoaded", function() {
  const shareElements = document.querySelectorAll("[nw-socialshare-element='email']");
  shareElements.forEach(function(element) {
    element.addEventListener("click", function(event) {
    event.preventDefault();    
    const subject = encodeURIComponent(element.getAttribute("nw-email-subject") || "Check out this article");
    const body = encodeURIComponent(element.getAttribute("nw-email-body") || `I thought you might find this article interesting: ${window.location.href}`);
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;    
    window.location.href = mailtoLink;
    });
  });
});
