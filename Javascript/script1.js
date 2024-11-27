const shownEmail = document.getElementById("myemail");
const dismiss = document.getElementById("dismiss");

const myemail = localStorage.getItem('email')

shownEmail.textContent = myemail;

dismiss.addEventListener('click', () => {
    window.location.href = 'index.html'
})
