// Select the post text and get the word count
  var postText = document.querySelector('.post-text').textContent;
  var wordCount = postText.split(' ').length;
  
  // Calculate the read time based on an average reading speed of 200 words per minute
  var readTime = Math.ceil(wordCount / 200);
  
  // Display the read time in the .read-time element
  document.querySelector('.read-time').innerHTML = readTime + ' min';
