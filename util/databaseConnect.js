const mysql = require('mysql');
const express = require('express');

const databaseConnect = mysql.createConnection({
    host : process.env.MYSQL_DB_HOST,
    user : process.env.MYSQL_DB_USER,
    password : process.env.MYSQL_DB_PASSWORD,
    database : process.env.MYSQL_DB_DATABASE
});

databaseConnect.connect(function(error){
    if(!! error){
        console.log('connection failed');
    } else {
        console.log('database connected');
    }
});

module.exports = databaseConnect;