


const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = (req,res)=>{}
const getSignupForm = (req,res)=>{res.render('signup/layout')}
const signup = (req,res)=>{}

module.exports = {getLoginForm,login,getSignupForm,signup}