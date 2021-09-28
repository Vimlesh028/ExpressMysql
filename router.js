const express=require("express");
var router= express.Router() 
cred={
    email:'vimlesh@gmail.com',
    password:'vim@123'
}

//router for login
router.post('/login',(req,res)=>{
    if(req.body.email == cred.email && req.body.password==cred.password ){
        req.session.user =req.body.email;
       res.redirect('/route/dashboard')
    // res.end("Login successful")
    }
        else{
            res.end("Invalid user")
        }
    }
)

//router for dashboardd

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('unauthorised user')
    }
})

//router for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log('Error');
            res.send("Error")
        }
    else {
        res.render('base',{title:'Express',logout:"logout sussessfully"})
    }})
})
module.exports = router;