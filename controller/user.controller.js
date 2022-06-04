const { render } = require('express/lib/response')
const {validateSchema} = require('../validator/user.validator')
const bcrypt = require('bcrypt')
const config = require('config')
const serviceUser = require('../service/user.service')

const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = (req,res)=>{
    res.render('login/layout')
}
const getSignupForm = (req,res)=>{res.render('signup/layout')}


const signup = async (req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    const {error,value} = validateSchema(fields)
    if(error){
        return res.render('signup/layout',{message:error.details[0].message})
    }
    const hashedPassword = await bcrypt.hash(password,config.get('hashed.salt'))
    const findExistingUser = await serviceUser.findUser({email})
    if(findExistingUser){
        return res.render('login/layout',{message:'User already exists please Login'})
    }
    await serviceUser.createUser({email,password:hashedPassword})
    return res.render('signup/layout',{message:'User Created'})
    
}


module.exports = {getLoginForm,login,getSignupForm,signup}