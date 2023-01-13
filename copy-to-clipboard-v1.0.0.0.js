// Copy to Clipboard
var copyButtons = document.querySelectorAll("[copy-button]");
copyButtons.forEach(function(copyButton) {
copyButton.addEventListener("click", function() {
var clickedElement = this;
var parentElement = clickedElement.parentNode;
var articleElement = parentElement.querySelector("[read-text]");
if (articleElement) {
var text = articleElement.textContent;
var tempInput = document.createElement("input");
tempInput.style = "position: absolute; left: -1000px; top: -1000px";
tempInput.value = text;
document.body.appendChild(tempInput);
tempInput.select();
document.execCommand("copy");
document.body.removeChild(tempInput);
}
});
});
