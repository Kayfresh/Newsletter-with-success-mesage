const error = document.getElementById("emailError");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const myemail = document.getElementById('myemail')

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function errorMessages() {
  error.innerHTML = "Valid email required";
  error.style.color = "red";
  email.style.backgroundColor = "#ffe8e6";
  email.style.borderColor = "red";
  emailInp.style.color = "red";
  return;
}

const subscribe = () => {
  const emailInp = email.value;

  error.textContent = "";
  error.style.color = "";
  email.style.color = "#36384d";
  email.style.borderColor = "#c4c4c4";

  if (emailInp === "") {
    errorMessages();
  } else if (emailRegex.test(emailInp)) {
    // window.open("success.html", "_blank");
    window.location.href = "/success/success.html";
    localStorage.setItem("email", emailInp);
  } else {
    errorMessages();
  }
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  subscribe();
});

