const User = require('../model/index')

const findUser = (fields)=>{
   return User.findOne(fields)
}

const createUser = (fields)=>{
    return User.create(fields)
}

module.exports = {findUser,createUser}