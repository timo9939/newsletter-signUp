
const submitButton = document.getElementById("submit-Btn");
submitButton.addEventListener("click", form_submission);

const main=document.getElementById("mainPage")
const successMessage=document.getElementById("success")
const emailInput=document.getElementById("input")
let emailDisplay=document.getElementById("client-email")
const errorMessage= document.getElementById("error-label")

const successButton=document.getElementById("success-btn")
successButton.addEventListener("click",back_to_homepage)

// Submission Buton
function form_submission(event){



    event.preventDefault()

// Email Validation
const Validation= /@/
if(Validation.test(emailInput.value)){
    
    alert("Match pattern email")
    main.style.display="none";
    console.log(`Email is ${emailInput.value}`)
    emailDisplay.textContent=emailInput.value

    successMessage.style.display="block"


}

else{
    errorMessage.style.display="inline"
    alert("Invalid email")
    console.log("Email is",emailInput.textContent)
}



}


// back to home button

function back_to_homepage(event2){
event2.preventDefault()


successMessage.style.display="none"
main.style.display="flex";
}