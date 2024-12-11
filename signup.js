// document.getElementById("myForm").addEventListener("submit", List);

// function List(event) {
//   // it will prevents the default operation of any InputType.
//   event.preventDefault();

//   let loginInfoListArr;

//   // if in keyName called LoginPersonInfo is not empty the new data is stored in value as stringObject formate in old jsonObject,
//   // else create new jsonObject and stored in new stringObject but every time new user registers their data will be stored as new stringObject.
//   if (localStorage.getItem("LoginPersonInfo") !== null) {
//     loginInfoListArr = JSON.parse(localStorage.getItem("LoginPersonInfo"));
//   }
//   else {
//     //creates new JsonArray empty array.
//     loginInfoListArr = [];
//   }
// // creating an object to store input values.
//  let  loginInfoListObj = {
//     personName: document.querySelector("#name").value,
//     personEmail: document.querySelector("#email").value,
//     personTel: document.querySelector("#telephone").value,
//     personCountry: document.querySelector("#option").value,
//     personGender: document.querySelector("#gender").value,
//     personPassword: document.querySelector("#password").value,
//     personConfirmPass: document.querySelector("#confirmPass").value,
//   };
// // pushing object into array.
//   loginInfoListArr.push(loginInfoListObj);

// // condition to check if password and conformPassword are equal or not before submit,
// // else it will store the data in localStorage by converting array object to json
// // array Object formate and it will empty previous entered inputs, redirects to homepage.

//   if (loginInfoListObj.personPassword != loginInfoListObj.personConfirmPass) {
//     document.getElementById("message").innerHTML =
//       "Password Not Match With Confirm Password";
//     return false;
//   }
//    else {
//     // storing data in localStorage by converting ArrayOject to string by using  JSON.stringify() method.
//     localStorage.setItem("LoginPersonInfo", JSON.stringify(loginInfoListArr));
//     document.querySelector("#name").value = "";
//     document.querySelector("#email").value = "";
//     document.querySelector("#telephone").value = "";
//     document.querySelector("#option").value = "";
//     document.querySelector("#gender").value = "";
//     document.querySelector("#password").value = "";
//     document.querySelector("#confirmPass").value = "";
//     document.getElementById("message").innerHTML = "";
//     window.location.href ="http://127.0.0.1:5500/homepage.html"
//     return true;
//   }
// }

// document.getElementById("myForm").addEventListener("input", function (event) {

//   event.preventDefault();
// // To take input has only positive integer numbers.
//   let telephoneInput=document.getElementById("telephone");
//   telephoneInput.value=telephoneInput.value.replace(/[^0-9]/g,"");

//   //the converted jsonArrayObject named LoginPersonInfo to arrayObject we will store in emails variable .
//   let emails = JSON.parse(localStorage.getItem("LoginPersonInfo"));

//   // the email entered in email input will be stored in inputField variable.
//   let inputField=document.getElementById("email").value;

//   // IT filter emails which is already registered is equal to entered input value by user.
//   let checked = emails.filter(function (ele) {
//     return ele.personEmail === inputField;
//   });

//   // if email is already exist it show message as exist login, else allows to register.
//   if (checked.length >0) {
//     document.getElementById("submit").style.cursor = "not-allowed";
//     document.querySelectorAll("input").required=false;
//     document.getElementById("exist").innerHTML = "Email Already Exist click on login";
//       document.getElementById("Submit").addEventListener("click",function(event){
//         event.preventDefault();
//         window.location.href="http://127.0.0.1:5500/login.html"
//       })

//     return false;
//   }
//   else {
//     document.querySelectorAll("input").required=true;
//     document.getElementById("submit").style.cursor = "pointer";
//     document.getElementById("exist").innerHTML = "";
//     return true;
//   }

// });

document.getElementById("myForm").addEventListener("submit", handleFormSubmit);
document.getElementById("myForm").addEventListener("input", handleInputChange);

function handleFormSubmit(event) {
  event.preventDefault();

  let loginInfoListArr = getStoredLoginInfo();

  // Create an object to store input values.
  const loginInfoListObj = {
    personName: document.querySelector("#name").value,
    personEmail: document.querySelector("#email").value,
    personTel: document.querySelector("#telephone").value,
    personCountry: document.querySelector("#option").value,
    personGender: document.querySelector("#gender").value,
    personPassword: document.querySelector("#password").value,
    personConfirmPass: document.querySelector("#confirmPass").value,
  };

  // Check if password and confirm password match
  if (loginInfoListObj.personPassword !== loginInfoListObj.personConfirmPass) {
    alert("confirmPassword does not match with Password!");
    return false;
  }

  // Store data and redirect
  loginInfoListArr.push(loginInfoListObj);
  localStorage.setItem("LoginPersonInfo", JSON.stringify(loginInfoListArr));
  clearInputs();
  window.location.href = "http://127.0.0.1:5500/homepage.html";
  return true;
}

function handleInputChange() {
  // Restrict telephone input to positive integers
  const telephoneInput = document.getElementById("telephone");
  telephoneInput.value = telephoneInput.value.replace(/[^0-9]/g, "");

  const emails = getStoredLoginInfo();
  const inputField = document.getElementById("email").value;

  const checked = emails.filter((ele) => ele.personEmail === inputField);

  // Check if email already exists
  if (checked.length > 0) {
    document.getElementById("submit").style.cursor = "not-allowed";
    setMessage("Email already exists. Click on login.");

    // document.querySelectorAll("input").forEach(input => {
    //     input.required = false;
    //        return false;
    // });
    // this part is used to disable function of required
    //  input means we can submit without enter input details.
  } else {
    document.querySelectorAll("input").forEach((input) => {
      input.required = true;
    });
    document.getElementById("submit").style.cursor = "pointer";
    setMessage(" ");
    return true;
  }
}

function getStoredLoginInfo() {
  try {
    const storedData = localStorage.getItem("LoginPersonInfo");
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error("Error parsing LoginPersonInfo:", error);
    return [];
  }
}

function clearInputs() {
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#telephone").value = "";
  document.querySelector("#option").value = "";
  document.querySelector("#gender").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#confirmPass").value = "";
}

function clearMessage() {
  document.getElementById("message").innerHTML = "";
}

function setMessage(exist) {
  document.getElementById("exist").innerHTML = exist;
}

function alert(message) {
  document.getElementById("message").innerHTML = message;
}

function Name(name) {
  document.getElementById("name").innerHTML = name;
}

function loginPage() {
  window.location.href = "http://127.0.0.1:5500/login.html";
}

function showPassword() {
  const pass = document.getElementById("confirmPass");
  const changedImage = document.getElementById("eye");
  if (pass.type === "password") {
    pass.type = "text";
    changedImage.src = "images/j.png";
  } else {
    pass.type = "password";
    changedImage.src = "images/i.png";
  }
}

function showPasswords() {
  const passwords = document.getElementById("password");
  const changedImages = document.getElementById("eyes");
  if (passwords.type === "password") {
    passwords.type = "text";
    changedImages.src = "images/j.png";
  } else {
    passwords.type = "password";
    changedImages.src = "images/i.png";
  }
}
