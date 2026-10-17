const form = document.getElementById('appointments-form')
const message = document.getElementById('message')
const dateInput = document.getElementById("date")

const today = new Date().toISOString().split("T"[0])
dateInput.min = today

form.addEventListener("submit", function(event){
    event.preventDefault()
    const name = document.getElementById('name').value;
    const doctor = document.getElementById('doctors-option').value;
    const date = dateInput.value;

    message.textContent= ` Thank your ${name} ! Your appointment request with ${doctor} is submitted for ${date}.`
     form.reset();

    dateInput.min = today;
})