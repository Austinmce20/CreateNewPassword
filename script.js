
console.log("true")


var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

var mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");



$('#inputName').on('input',function(){
    let x = $('#inputName').val();
    if (strongPassword.test(x)) {
        console.log(x);
        document.getElementById('popup').innerHTML = "Strong strength password";
    }    
    else if (mediumPassword.test(x)) {
        console.log(x)
        document.getElementById('popup').innerHTML = "Medium strength password"
    }
    else {
        document.getElementById('popup').innerHTML = "Password too weak"
    }
    return x;
});




$("#passwordVerify").on('input', function() {
    var user_pass = $("#inputName").val();
    var user_pass2 = $("#passwordVerify").val();
    //var enter = $("#enter").val();
    console.log(user_pass)

    if (user_pass.length == 0) {
        console.log("please fill password first");
        $("#enter").prop('disabled',true)//use prop()
    } else if(user_pass == user_pass2) {
        $("#enter").prop('disabled',false)//use prop()
    } else {
        $("#enter").prop('disabled',true)//use prop()
        console.log("Your password doesn't match");
    }
});




