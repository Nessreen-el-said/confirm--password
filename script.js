function checkPassword(){
    let password = document.getElementById ("password").value;
    let confirmPassword = document.getElementById ("confirmpassword").value;
    let message = document.getElementById("message");

    console.log (password ,confirmPassword  );
    console.log(message)

    if ( password.length != 0){
        if (password == confirmPassword){
        message.textContent = 
        "password match ";
        message.style.backgroundColor=
        "#CEB2BD";
    }
    else{
        message.textContent = 
        "passwords don't match !!! ";
        message.style.backgroundColor=
        "#280720 ";
    }

}
}


