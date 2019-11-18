const router = require('express').Router();

router.get('/dashboard',(req,res)=>{
    res.render('dashboard/dashboardIndex');
});

module.exports = router;