const router = require('express').Router();
const registerLogin = require('../../controllers/registerLoginController/registerLogin');

router.get('/',registerLogin.indexRender);     // For Home Page Render Purpose

router.post('/',registerLogin.register);      // For Sign up purpose

router.post('/login',registerLogin.loginUser);

router.post('/update',registerLogin.update);

router.get('/index',(req,res)=>{
    res.render('index');
});

module.exports = router;