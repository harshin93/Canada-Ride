function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function validateForm() {
    var password = document.getElementById("password").value;
    var verifyPassword = document.getElementById("verifypassword").value;
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;

    if (password !== verifyPassword) {
      alert("Passwords do not match");
      return false;
    }
    if (!/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      alert("Password must contain a symbol, a number, and a capital letter");
      return false;
    }
    if (password.includes(firstName) || password.includes(lastName) || password.includes(email)) {
      alert("Password must not contain email, first name or last name");
      return false;
    }
    return true;
  }

  const form = document.querySelector("#signup-form");
  const passwordInput = document.querySelector("#password");
  const verifyPasswordInput = document.querySelector("#verify-password");
  const showPasswordInput = document.querySelector("#show-password");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (passwordInput.value !== verifyPasswordInput.value) {
      alert("Passwords do not match");
    } else {
      // submit the form to the server
    }
  });
  
  showPasswordInput.addEventListener("change", (event) => {
    if (event.target.checked) {
     
      passwordInput.type = "text";
      verifyPasswordInput.type = "text";
    } else {
      passwordInput.type = "password";
      verifyPasswordInput.type = "password";
    }
  });