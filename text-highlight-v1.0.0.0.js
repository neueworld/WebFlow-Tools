window.onload = function() {
 // Find the element with the neue-highlight attribute
const elementWithHighlight = document.querySelector('[neue-highlight]');

if (elementWithHighlight) {
// Get the background color and text color of the element
const bgColor = getComputedStyle(elementWithHighlight).backgroundColor;
const textColor = getComputedStyle(elementWithHighlight).color;

// Apply the styles to the ::selection pseudo-element
const style = document.createElement('style');
style.textContent = `::selection { background-color: ${bgColor}; color: ${textColor}; }`;
document.head.appendChild(style);
      }
};
