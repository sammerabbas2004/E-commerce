const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(req, res){
    const { fullname, email, password } = req.body;
    const isuserexist=await userModel.findOne({
        email:email
    });
    if(isuserexist){
        return res.status(400).json({
            message:"User already exist"
        })
    }
    const passwordHash=await bcrypt.hash(password,10);
    const newUser=new userModel({
        fullname,
        email,
        password: passwordHash
    });
    const token=jwt.sign({
        id:newUser._id,
    },"5ba21265fa88163534453d7fa58fbdff2e086c05"
    )
    
    res.cookie("token",token)

    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:newUser._id,
            fullname:newUser.fullname,
            email:newUser.email
        }
    });

}

module.exports = {
    registerUser,

};