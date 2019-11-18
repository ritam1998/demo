function login() {

    let loginData = {
        Email: document.getElementById('emailLogin').value,
        Password: document.getElementById('passwordLogin').value
    }
    $.ajax({
        type: 'POST',
        url: '/login',
        data: loginData,
        success: function (data) {

            window.alert(data.Successmessage);
            localStorage.setItem("token", data.token);
            window.location.replace('/dashboard');
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Errormessage);
        }
    });
}