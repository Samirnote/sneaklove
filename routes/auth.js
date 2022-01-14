const express = require("express");
const router = new express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');
const salt =10;
router.get('/signup', (req,res)=> res.render("signup"));

router.post('/signup', async(req,res)=> {
    console.log(req.params)
    try{
        const newUser = { ...req.body }; // clone req.body with spread operator
        console.log(newUser);
        const foundUser = await UserModel.findOne({ email: newUser.email });
        if(foundUser){
            req.flash("warning", "email is already registered")
            res.redirect('signup');
        }else{
            req.flash("success", "Succeed")
            const pwdHashed = bcrypt.hashSync(newUser.password, salt);
            newUser.password = pwdHashed;
            await UserModel.create(newUser);
            res.redirect("/signin")
        }

    }catch(err){
        console.error(err)
    }
});

router.get('/signin', (req,res)=> res.render("signin"));
router.post('/signin',async(req,res)=> {
    
    try{
        const {email, password} = req.body; 
        const foundUser = await UserModel.findOne({ email:email});
        if(!foundUser){
            req.flash("error", "email is not registered")
            res.redirect('signup');
        }else{
            const goodPassword = bcrypt.compareSync(password, foundUser.password);

            console.log(req.body, foundUser);

            if(!goodPassword){

                req.flash("error", "try another pasword")
                res.redirect("/signin") 
            }else{
                req.flash("success", "Succeed");
                const userObject = foundUser.toObject();
                delete userObject.password;
                req.session.currentUser = userObject;

                res.redirect("/") ;
            }
            
            
        }

    }catch(err){
        console.error(err)
    }
});

router.get('/logout', (req,res)=>{
    req.session.destroy(function () {
    
        res.redirect("signin");

      });
})

module.exports = router;










module.exports = router;
