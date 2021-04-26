let RegEx; 
let result;
let input;


let name = document.getElementById("name");
let phone = document.getElementById("mobile");
let email = document.getElementById("email");
let password = document.getElementById("password");
let postal = document.getElementById("postal");

// addEventListener
name.addEventListener("click", nameCheck)
phone.addEventListener("click", phoneCheck)
email.addEventListener("click", emailCheck)
password.addEventListener("click", passCheck)
postal.addEventListener("click", postalCheck)




// function define
function nameCheck() {
    var name = prompt("Enter your Name here")
    // RegEx = /^(+)?(88)?01[0-9]{9}$/;
    RegEx =  /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
    result = RegEx.test(name);
    console.log(result)
    if(result){
        alert("This is a valid Name")
        // phoneCheck()
    }else{
        alert("The input is invalid");
    }
}
function phoneCheck() {
    var phone = prompt("Enter your phone number here")
    // RegEx = /^(+)?(88)?01[0-9]{9}$/;
    RegEx =  /^(\+)?(88)?01[0-9]{9}$/;
    result = RegEx.test(phone);
    console.log(result)
    if(result){
        alert("This is a valid phone number!")
        // phoneCheck()
    }else{
        alert("The input is invalid");
    }
}

function emailCheck() {
    var email = prompt("Enter your Email here")
    // RegEx = /^(+)?(88)?01[0-9]{9}$/;
    RegEx =  /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
    result = RegEx.test(email);
    console.log(result)
    if(!result){
        alert("The input is invalid");
        // emailCheck()
    }else{
        alert("This is a valid email!")
    }
}

function passCheck() {
    var pass = prompt("Enter your password here")
    // RegEx = /^(+)?(88)?01[0-9]{9}$/;
    RegEx =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    result = RegEx.test(pass);
    console.log(result)
    if(!result){
        alert("Password should contain minimum eight characters, at least one letter and one number");
        // passCheck()
    }else{
        alert("This is a valid password!")
    }
}

function postalCheck() {
    var postal = prompt("Enter your postal code")
    // RegEx = /^(+)?(88)?01[0-9]{9}$/;
    RegEx =  /^[0-9]{4}$/;
    result = RegEx.test(postal);
    console.log(result)
    if(!result){
        alert("Postal code is invalid!");
        // postalCheck()
    }else{
        alert("This is a valid postal code!")
    }
}


// switch (phone) {
 
//     case phone:
//         input = prompt("Input your phone number");
//         RegEx = /^(+)?(88)?01[0-9]{9}$/;
//         result = RegEx.test(input);
//         console.log(result)
//         break;
 
//     default: 
//         // RegEx = /^(+)?(88)?01[0-9]{9}$/;
//         // result = RegEx.test(input);
//         // if(!result){
//         //     alert("The input is invalid");
//         // }
//         break;
// };

