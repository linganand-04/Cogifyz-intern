const form = document.getElementById("form");
const username =document.querySelector("#name")
const email =document.querySelector("#email")
const pass =document.querySelector("#password")
const done = document.querySelector("#submit");
const errorBox = document.querySelector("#error")

errorBox.addEventListener("click",()=>{
  errorBox.classList.add("error-close")
  errorBox.classList.remove("success")
  errorBox.classList.remove("failed")
  errorBox.classList.remove("invalid")
})

const users = {
  user1: {
    name: "linganand",
    mail : "linganandb2004@gmail.com",
    pass: "lian@04",
  },
  user2: {
    name: "example",
    mail : "example@gmail.com",
    pass: "example123",
  },
};

// const user1Det = username.value.toLowerCase() === users.user1.name && email.value === users.user1.mail && pass.value === users.user1.pass;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
console.log(Object.values(users));

done.addEventListener('click', () => {
  const enteredUsername = username.value.toLowerCase().trim();
  const enteredEmail = email.value.trim();
  const enteredPass = pass.value.trim();

  let isAuthenticated = false;
  let isUsernameCorrect = false;
  let isEmailCorrect = false;
  let isPassCorrect = false;

  Object.values(users).forEach(user => {
    if (enteredUsername === user.name) isUsernameCorrect = true;
    if (enteredEmail === user.mail) isEmailCorrect = true;
    if (enteredPass === user.pass) isPassCorrect = true;

    if (enteredUsername === user.name && enteredEmail === user.mail && enteredPass === user.pass) {
      isAuthenticated = true;
    }
  });

  errorBox.classList.add("error-show");
  errorBox.classList.remove("error-close");
  
  if (isAuthenticated) {
    errorBox.classList.add("success");
    errorBox.innerHTML = "Login Successfully..✅";
  } else if (!enteredUsername && !enteredEmail && !enteredPass) {
    errorBox.classList.add("invalid");
    errorBox.innerHTML = "Fields cannot be empty!..🚫";
  } else if (!isUsernameCorrect) {
    errorBox.classList.add("failed");
    errorBox.innerHTML = "Wrong username..😶‍🌫️";
  } else if (!isEmailCorrect) {
    errorBox.classList.add("failed");
    errorBox.innerHTML = "Wrong email..😶‍🌫️";
  } else if (!isPassCorrect) {
    errorBox.classList.add("failed");
    errorBox.innerHTML = "Wrong password..😶‍🌫️";
  } else {
    errorBox.classList.add("error");
    errorBox.innerHTML = "Invalid credentials. 🤷‍♂️";
  }

  username.value = "";
  email.value = "";
  pass.value = "";
});


