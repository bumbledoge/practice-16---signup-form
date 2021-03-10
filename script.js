import isCorrect from './emailCheck.js'
import isPasswordOk from './passwordCheck.js'

let signUp = document.querySelector('.signUpForm');

signUp.addEventListener('submit', (e)=> {
    let submitForm = true;

    let firstName = document.getElementsByName('firstName');
    let lastName = document.getElementsByName('lastName');
    let email = document.getElementsByName('emailAdress');
    let password = document.getElementsByName('password');
    
    const EMAIL_CHECK = isCorrect(email[0].value);
    const FIRST_NAME_CHECK = firstName[0].value == "";
    const LAST_NAME_CHECK = lastName[0].value == "";
    const PASSWORD_CHECK = isPasswordOk(password[0].value)

    
    submitForm = submitForm && EMAIL_CHECK;
    EMAIL_CHECK ? 
        email[0].style.border = "1.5px solid hsl(154, 59%, 51%)"
            :
        email[0].style.border = "1.5px solid hsl(0, 100%, 74%)";



    submitForm = submitForm && FIRST_NAME_CHECK;
    FIRST_NAME_CHECK ?
        firstName[0].style.border = "1.5px solid hsl(0, 100%, 74%)"
            :
        firstName[0].style.border = "1.5px solid hsl(154, 59%, 51%)";
     

    submitForm = submitForm && LAST_NAME_CHECK;
    LAST_NAME_CHECK ? 
        lastName[0].style.border = "1.5px solid hsl(0, 100%, 74%)"
            :
        lastName[0].style.border = "1.5px solid hsl(154, 59%, 51%)";


    submitForm = submitForm && PASSWORD_CHECK;
    PASSWORD_CHECK ? 
        password[0].style.border = "1.5px solid hsl(154, 59%, 51%)"
                  :
        password[0].style.border = "1.5px solid hsl(0, 100%, 74%)";

    
    
    if(submitForm == false) {
        e.preventDefault();
    }
})