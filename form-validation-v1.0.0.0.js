document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.querySelector('[nw-email]');
  const inputField = document.querySelector('[nw-name]');
  const phoneInput = document.querySelector('[nw-phone]');

  emailInput.addEventListener("input", function() {
    const email = emailInput.value;

    if (email === "") {
      emailInput.classList.remove("error");
      emailInput.classList.remove("success");
    } else if (!/^[^!#$%&~]*[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.classList.add("error");
      emailInput.classList.remove("success");
    } else {
      emailInput.classList.add("success");
      emailInput.classList.remove("error");
    }
  });

  inputField.addEventListener("input", function() {
    const value = inputField.value;

    if (value === "") {
      inputField.classList.remove("success");
      inputField.classList.remove("error");
    } else if (/^[a-zA-Z\W]+$/.test(value)) {
      inputField.classList.add("success");
      inputField.classList.remove("error");
    } else if (/^[0-9]+$/.test(value)) {
      inputField.classList.add("error");
      inputField.classList.remove("success");
    } else {
      inputField.classList.add("success");
      inputField.classList.remove("error");
    }
  });

  phoneInput.addEventListener("input", function() {
    const phone = phoneInput.value;

    if (phone === "") {
      phoneInput.classList.remove("success");
      phoneInput.classList.remove("error");
    } else if (/^[0-9\-\(\)\s+]{7,15}$/.test(phone)) {
      phoneInput.classList.add("success");
      phoneInput.classList.remove("error");
    } else {
      phoneInput.classList.add("error");
      phoneInput.classList.remove("success");
    }
  });
});
