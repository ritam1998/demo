const express = require('express');
// const bodyParser = require('body-parser');
const ENV = require('dotenv');
ENV.config();

const path = require('path');

const app = express();

// app.use(bodyParser.urlencoded({ extended : false}));

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.use(express.static(path.join(__dirname,'public')));   // For Index part

// app.use(express.static(path.join(__dirname,'public/Admin')));   // For Admin part

app.set('view engine','ejs');

const index = require('./routes/userRegLogin/index');  // For user Registration and Login and Update
app.use(index);

const dashboard = require('./routes/dashboard');
app.use(dashboard);

const web = require('./routes/Admin/web');  // For Admin Page Rendering
app.use(web);


app.listen(process.env.HTTP_APP_PORT,()=>{ console.log(`server is running on ${process.env.HTTP_APP_PORT}`); });