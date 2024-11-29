const shownEmail = document.getElementById("myemail");
const dismiss = document.getElementById("dismiss");


const myemail = localStorage.getItem("email");

myemail.textContent = "";

shownEmail.textContent = myemail;

dismiss.addEventListener("click", () => {
  window.location.href = "/index.html";
});
