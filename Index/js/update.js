function update(){

    let updateData = {
        email : document.getElementById('emailUpdate').value,
        password : document.getElementById('passwordUpdate').value
    }
    $.ajax({
        type : "POST",
        url  : "/update",
        data : updateData,
        success : function(data){
            window.location.replace('/');
            window.alert(data.message);
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.message);
        }
    });
}