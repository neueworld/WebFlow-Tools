<!-- Change mode -->

  var toggleButton = document.getElementById("toggleButton");
  var body = document.querySelector("body");
  var links = document.querySelectorAll("a");
  
  var originalStyles = {
    bodyBackgroundColor: body.style.backgroundColor,
    bodyColor: body.style.color,
    linkColor: links[0].style.color
  };

  if (localStorage.getItem("mode") === "dark") {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "#000000";
    }
  }

  toggleButton.addEventListener("click", function() {
    if (body.style.backgroundColor === "") {
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#000000";
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = "#000000";
      }
      localStorage.setItem("mode", "dark");
    } else {
      body.style.backgroundColor = originalStyles.bodyBackgroundColor;
      body.style.color = originalStyles.bodyColor;
      for (var j = 0; j < links.length; j++) {
        links[j].style.color = originalStyles.linkColor;
      }
      localStorage.setItem("mode", "light");
    }
  });
