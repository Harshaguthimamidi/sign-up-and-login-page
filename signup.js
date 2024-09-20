addEventListener("submit", List);

function List() {
  event.preventDefault();

  let loginInfoListArr;

  if (localStorage.getItem("LoginPersonInfo") !== null) {
    loginInfoListArr = JSON.parse(localStorage.getItem("LoginPersonInfo"));
  } else {
    loginInfoListArr = [];
  }

  let loginInfoListObj = {
    personName: document.querySelector("#name").value,
    personEmail: document.querySelector("#email").value,
    personTel: document.querySelector("#telephone").value,
    personCountry: document.querySelector("#option").value,
    personGender: document.querySelector("#gender").value,
    personPassword: document.querySelector("#password").value,
    personConformPass: document.querySelector("#confirmPass").value,
  };

  loginInfoListArr.push(loginInfoListObj);

  let check = loginInfoListArr.filter(function (element) {
    return element.personEmail === loginInfoListObj.personEmail;
  });

  if (loginInfoListObj.personPassword != loginInfoListObj.personConformPass) {
    document.getElementById("message").innerHTML = "Password Not Match With Confirm Password";
  } else if (check.length > 1) {
    document.getElementById("exist").innerHTML = "email already exist";
    return false;
  } else {
    localStorage.setItem("LoginPersonInfo", JSON.stringify(loginInfoListArr));
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#telephone").value = "";
    document.querySelector("#option").value = "";
    document.querySelector("#gender").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#confirmPass").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("exist").innerHTML = "";
     window.location.href="http://127.0.0.1:5500/login.html";
    return true;
  }
}
