const adminLogin = require('./../../models/AdminModel/login');

exports.getLogin = function(req,res,next){
    res.render('Admin/adminLogin',{
        path : '/admin',
        editing : false
    });
}

exports.loginRequest = function(req,res,next){

    const username = req.body.username;
    const password = req.body.password;

    adminLogin.dataSent(username,password,function(data){

        if(data.length != 0){
            console.log('sucess');
            adminLogin.fetchAll(function(result){
                // console.log(result);
                // res.status(200).redirect(`/admin/Todo-Logs?data=${result.toString()}`);
                res.status(200).json({
                    error : false,
                    finalData : result
                });
            });
        } else {
            console.log('fali');
            res.status(400).json({
                error : true,
                message : "wrong password"
            });
        }
    });
}

exports.todoLogs = function(req,res,next){
    res.render('Admin/todoLogs',{
        path : '/admin/Todo-Logs',
        editing : false
    });
}