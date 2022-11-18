const db = require('../model/db.config') 

const Users = db.users;

const addUser = async(req, res) => {
    // const data = await Users.build(req.body.name, req.body.email, req.body.gender)
    // await data.save()

    
    res.send('add user controller')
}


module.exports = {
    addUser
}