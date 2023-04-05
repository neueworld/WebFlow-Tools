const collectionWrapper = document.querySelector('[neue-wrapper]');
const collectionList = document.querySelector('[neue-list]');
const loadMoreButton = document.querySelector('[load-more]');

// Get the initial number of items to show from the "load-more" attribute
let itemsToShow = parseInt(loadMoreButton.getAttribute('load-more'));
let itemsShown = itemsToShow;
const itemsToAdd = parseInt(document.querySelector('[show]').getAttribute('show'));

// Hide all but the first `itemsToShow` items in the collection list
Array.from(collectionList.children).forEach((item, index) => {
  if (index >= itemsToShow) {
    item.style.display = 'none';
  }
});

// When the "Load More" button is clicked, show the next `itemsToAdd` items
loadMoreButton.addEventListener('click', () => {
  itemsToShow += itemsToAdd; // Increase the number of items to show by the value of the "show" attribute each time
  const itemsToShowNext = Array.from(collectionList.children).filter((item, index) => {
    return (index >= itemsShown && index < itemsShown + itemsToAdd);
  });
  itemsToShowNext.forEach(item => {
    item.style.display = 'block';
  });
  itemsShown += itemsToAdd;
  if (itemsShown >= collectionList.children.length) {
    loadMoreButton.style.display = 'none';
  }
});
