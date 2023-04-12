let lightElements = document.querySelectorAll('[light-toggle]');
let darkElements = document.querySelectorAll('[dark-toggle]');
let body = document.querySelector('body');

lightElements.forEach(element => {
  element.addEventListener('click', () => {
    body.setAttribute("data-mode", "light");
    localStorage.setItem('mode', 'light');
    const lightClasses = element.getAttribute("class").split(" ");
    body.classList.remove(...body.classList);
    body.classList.add(lightClasses[0]);
  });
});

darkElements.forEach(element => {
  element.addEventListener('click', () => {
    body.setAttribute("data-mode", "dark");
    localStorage.setItem('mode', 'dark');
    const darkClasses = element.getAttribute("class").split(" ");
    body.classList.remove(...body.classList);
    body.classList.add(darkClasses[0]);
  });
});

let currentMode = localStorage.getItem('mode');
if (currentMode === 'light') {
  body.setAttribute("data-mode", "light");
  const lightClasses = lightElements[0].getAttribute("class").split(" ");
  body.classList.remove(...body.classList);
  body.classList.add(lightClasses[0]);
} else if (currentMode === 'dark') {
  body.setAttribute("data-mode", "dark");
  const darkClasses = darkElements[0].getAttribute("class").split(" ");
  body.classList.remove(...body.classList);
  body.classList.add(darkClasses[0]);
}

/*const body = document.querySelector('body');*/

const currentMode2 = body.getAttribute("data-mode");
const lightElement2 = document.querySelector('[data-mode="light"]');
const darkElement2 = document.querySelector('[data-mode="dark"]');

const lightClasses2 = lightElement.getAttribute("class").split(" ");
const darkClasses2 = darkElement.getAttribute("class").split(" ");

if (currentMode2 === "light") {
  body.classList.add(lightClasses2[0]);
} else if (currentMode2 === "dark") {
  body.classList.add(darkClasses2[0]);
}

let cta = document.querySelector('[cta]');
let link = document.querySelector('[link]');

cta.style.backgroundColor = 'transparent';
cta.style.color = 'var(--body-bg-color)';
cta.style.borderColor = 'currentColor';

link.style.backgroundColor = 'transparent';
link.style.color = 'var(--body-bg-color)';
link.style.borderColor = 'currentColor';

const lightToggle = document.querySelector('[light-toggle]');
const darkToggle = document.querySelector('[dark-toggle]');

lightToggle.addEventListener('click', function() {
  lightToggle.style.zIndex = 1;
  darkToggle.style.zIndex = 2;
});

darkToggle.addEventListener('click', function() {
  darkToggle.style.zIndex = 1;
  lightToggle.style.zIndex = 2;
});

const elementsWithNeueBg = document.querySelectorAll('[neue-bg]');

// Define a function to update the background color of the neue-bg elements
function updateNeueBgBackground() {
  const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;
  elementsWithNeueBg.forEach(el => {
    el.style.backgroundColor = bodyBackgroundColor;
  });
}

// Call the function once on page load to set the initial background color
updateNeueBgBackground();

// Listen for changes to the body element's class and update the neue-bg elements accordingly
const bodyObserver = new MutationObserver(updateNeueBgBackground);
bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });


function updateTextColors() {
  // Get the body element
  var body = document.getElementsByTagName('body')[0];

  // Check if the body has the class 'light-mode'
  if (body.classList.contains('light-mode')) {
    // Get all elements with the attribute 'neue-dark-text' and value '1d1d1f'
    var darkElements = document.querySelectorAll('[neue-dark-text="1d1d1f"]');

    // Set the text color of each dark element to its attribute value
    for (var i = 0; i < darkElements.length; i++) {
      setTextColor(darkElements[i], '#' + darkElements[i].getAttribute('neue-dark-text'));
    }
  }

  // Check if the body has the class 'dark-mode'
  if (body.classList.contains('dark-mode')) {
    // Get all elements with the attribute 'neue-white-text' and value 'ffffff'
    var whiteElements = document.querySelectorAll('[neue-white-text="ffffff"]');

    // Set the text color of each white element to its attribute value
    for (var i = 0; i < whiteElements.length; i++) {
      setTextColor(whiteElements[i], '#' + whiteElements[i].getAttribute('neue-white-text'));
    }
  }
}

// Call the function when the page loads
updateTextColors();

// Watch for changes in the class of the body element
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === 'class') {
      updateTextColors();
    }
  });
});

observer.observe(document.body, { attributes: true });

function setTextColor(element, color) {
  // Check if the element is a text node
  if (element.nodeType === Node.TEXT_NODE) {
    // Create a new span element to wrap the text node
    var span = document.createElement('span');
    span.style.color = color;
    span.textContent = element.textContent;
    element.parentNode.replaceChild(span, element);
  } else {
    // Recursively set the text color of child elements
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
      setTextColor(children[i], color);
    }
  }
}

// Click the appropriate toggle button based on the user's color scheme preference
function clickToggleButton() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // User prefers dark mode, click element with dark-toggle attribute
    const darkToggle = document.querySelector('[dark-toggle]');
    if (darkToggle) {
      darkToggle.click();
    }
  } else {
    // User prefers light mode, click element with light-toggle attribute
    const lightToggle = document.querySelector('[light-toggle]');
    if (lightToggle) {
      lightToggle.click();
    }
  }
}

// Call the function once on page load to set the initial state
clickToggleButton();

// Add an event listener to handle changes to the user's color scheme preference
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', clickToggleButton);
}
