// Select the text to read and get the word count
var postText = document.querySelector('[read-text]').textContent.split(' ').length;
  
// Calculate the read time based on an average reading speed of 200 words per minute
var readTime = Math.ceil(postText / 200);
  
// Calculate a variable for text that would take a minute or less to be read
var readingTime = readTime > 1 ? readTime + ' minutes' : '1 minute';
  
// Display the read time 
document.querySelector('[time-to-read]').innerHTML = readingTime;
}
