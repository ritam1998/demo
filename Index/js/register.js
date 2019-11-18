function register() {

    let registerData = {
        name : document.getElementById('inputName').value,
        username: document.getElementById('inputUserame').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value
    }
    if(registerData.name == ""){
        window.alert('!! Enter Your Full Name !!');
        return false;
    }else if(registerData.username == ""){
        window.alert('!! Enter Username !!');
        return false;
    } else if(registerData.email == ""){
        window.alert(' !! Enter Email !!');
        return false;
    } else if(registerData.phone == ""){
        window.alert(' !! Enter Phone');
        return false;
    } else if(registerData.password == ""){
        window.alert(' !! Enter password !!');
        return false;
    }
    $.ajax({
        type: 'POST',
        url: '/',
        data: registerData,
        success: function (data) {
            window.alert(data.message);
            window.location.replace('/');
            window.alert('Sign Up Successful (: please Login ==>');
        },
        error: function (xhr,error) {
            var err = eval("(" +xhr.responseText+ ")");
            alert(err.Errormessage);
            window.location.replace('/');
        }
    });
}