const registerLoginModel = require('../../models/registerModel/registerLoginModel');
const jwt = require('jsonwebtoken');
const bycrpt = require('bcrypt');

exports.indexRender = function (req, res) {
    res.render('Index/home', {
        path: '/',
        editing: false
    });
}

exports.register = function (req, res) {

    const { name, username, email, phone, password } = req.body;

    registerLoginModel.registerCheck({ name, username, email, phone, password }, function (result) {
        if (result.length != 0) {
            res.status(409).json({
                error: true,
                Errormessage: "You have already registered "
            });
        } else {
            registerLoginModel.finalRegister({ name, username, email, phone, password }, function (data) {
                res.status(200).json({
                    error: false,
                    message: "Thank You For Register ! (:"
                });
            });
        }
    });
}

exports.loginUser = function (req, res) {

    const { Email, Password } = req.body;

    registerLoginModel.validEmail({ Email, Password }, function (data) {

        if (data.length === 0) {
            res.status(400).json({
                error: true,
                Errormessage: "Wrong Email"
            });
        } else {

            const isCheck = bycrpt.compareSync(Password, data[0].password);

            if (isCheck) {
                const token = jwt.sign({
                    username: data[0].user_name,
                    email: data[0].email,
                    phone: data[0].phone_no,
                }, "1234");

                res.status(200).json({
                    error: false,
                    Successmessage: "Successfully Logged In",
                    token: token
                });
            } else {
                res.status(400).json({
                    error: true,
                    Errormessage: "Wrong Password"
                });
            }
        }
    });
}

exports.update = function (req, res) {

    const email = req.body.email;
    const password = req.body.password;
    console.log(email);

    registerLoginModel.updateCheck(email, password, function (result) {

        if (result.length === 0) {
            res.status(409).json({
                error: true,
                message: "please enter your valid email "
            });
        } else {
            registerLoginModel.updatePassword(email, password, function (error, data) {
                if (error) {
                    res.status(400).json({
                        error: true,
                        message: "Something Wrong"
                    });
                } else {
                    res.status(200).json({
                        error: false,
                        message: "password update is done &#10003"
                    });
                }
            });
        }
    })


}