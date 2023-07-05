
const submitButton = document.getElementById("submit-Btn");
submitButton.addEventListener("click", form_submission);

const main=document.getElementById("mainPage")
const successMessage=document.getElementById("success")

function form_submission(event){
    event.preventDefault()
    alert('Submit button pressed');
    main.style.display="none";

    successMessage.style.display="flex"

 
}