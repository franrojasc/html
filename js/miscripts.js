function alerta()
{
let email =  document.getElementById('exampleInputEmail1').value

let pass =  document.getElementById('exampleInputPassword1').value
console.log(email);
console.log(pass);
}

function message() {
    alert ('Me ejecute desde la funcion');
}

function factorial() {
    let factorial  =  document.getElementById('numFactorial').value
    console.log(factorial);
    let fact = 1;
    for(i=1;i <= factorial; i++) {
        fact = fact*i;
    }
    console.log("el factorial de " + factorial + " es : " + fact);
}

function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('user-email');
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		alert('Email is valid, continue with form submission');
		return true;
	}else{
		alert('Email is invalid, skip form submission');
		return false;
	}
}

