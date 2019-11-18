let isCheck = localStorage.getItem('token');

if (!isCheck) {
    window.location.replace('/');
} else {
    const decode = JSON.parse(atob(isCheck.split('.')[1]));

    document.getElementById('name').innerHTML = decode.username;
    console.log(decode.username);
    console.log(decode.email);
    console.log(decode.phone)
}
function logout(){

    localStorage.removeItem('token');
    window.location.replace('/');
}