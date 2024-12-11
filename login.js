let checkPass = localStorage.getItem("LoginPersonInfo");
let other = JSON.parse(checkPass);
addEventListener("submit", verifyAccount);

function verifyAccount(event) {
  event.preventDefault();
  let checkPass = document.getElementById("password").value;
  let checkEmail = document.querySelector("#email").value;

  let details = other.filter(function (element) {
    return (
      element.personEmail === checkEmail && element.personPassword === checkPass
    );
  });
  if (details.length > 0) {
    window.location.href = "http://127.0.0.1:5500/homepage.html";
  } else {
    document.getElementById("notMatchEmail").innerHTML =
      "Email ID not exist create an account!";
    document.getElementById("notMatchPassword").innerHTML = "Invalid password!";
  }
}
function signupPage() {
  window.location.href = "http://127.0.0.1:5500/signup.html";
}
function showPass() {
  const imgChange = document.getElementById("eye");
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    imgChange.src = "images/j.png";
  } else {
    passwordInput.type = "password";
    imgChange.src = "images/i.png";
  }
}
