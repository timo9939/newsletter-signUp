
const submitButton = document.getElementById("submit-Btn");
submitButton.addEventListener("click", form_submission);

const main=document.getElementById("mainPage")
const successMessage=document.getElementById("success")
const emailInput=document.getElementById("input")
let emailDisplay=document.getElementById("client-email")

function form_submission(event){
    event.preventDefault()
    alert('Submit button pressed');
    main.style.display="none";
    console.log(`Email is ${emailInput.value}`)
    emailDisplay.textContent=emailInput.value

    successMessage.style.display="block"

 
}

function back_to_homepage(event){
event.preventDefault()
confirm('back to homepage')
}