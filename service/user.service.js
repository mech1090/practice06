const User = require('../model/index')

const findUser = (fields)=>{
   const findEntry =  User.findOne(fields)
    return findEntry
}

const createUser = (fields)=>{
    const createEntry = User.create(fields)
    return createEntry
}

module.exports = {findUser,createUser}