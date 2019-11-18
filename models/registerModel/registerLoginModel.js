const mysql = require('../../util/databaseConnect');
const bcrypt = require('bcrypt');

exports.registerCheck = function ({ name , username, email, phone, password }, callback) {

    let sql = `select email from users where email="${email}"`;
    mysql.query(sql, function (error, result) {
        if (error) throw error
        callback(result);
    });
}

exports.finalRegister = function ({ name ,username, email, phone, password }, callback) {

    let payload = {};
    payload.name = name
    payload.username = username
    payload.email = email
    payload.phone = phone
    payload.password = bcrypt.hashSync(password, 10);

    let sql = `call Signup('${JSON.stringify(payload)}')`;

    mysql.query(sql, function (error, result) {
        if (error) throw error
        callback(result);
    });
}

exports.validEmail = function ({ Email, Password }, callback) {

    let sql = `select username,email,phone,password from users where email='${Email}'`;

    mysql.query(sql, function (error, result) {

        if (error) throw error
        callback(result);
    });
}

exports.updateCheck = function (email,password, callback) {

    let sql = `select email from users where email="${email}"`;
    mysql.query(sql, function (error, result) {
        if (error) throw error
        callback(result);
    });
}

exports.updatePassword = function (email, password, callback) {

    let bycrptPassword = bcrypt.hashSync(password, 10);
    let sql = `update users set password = '${bycrptPassword}' where email='${email}'`;

    mysql.query(sql, function (error, result) {
        // if(error) throw error
        callback(error, result);
    });
}