document.getElementById('login-button').addEventListener('click', function(){
    // console.log("clicked");

    const emailField = document.getElementById('email-name');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-name');
    const userPassword = passwordField.value;

    if(userEmail=='niamul.rony@gmail.com' && userPassword=='secret'){
        window.location.href = 'banking.html'
    }

})