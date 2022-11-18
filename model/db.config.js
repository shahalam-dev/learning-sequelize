const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db-name', 'db-user', 'db-password', {
    host : 'localhost',
    dialect : 'mysql',
})

sequelize.authenticate()
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//model
db.users = require('./user')(sequelize, DataTypes)

db.sequelize.sync({
    // force : true --> will drop existing table and will create new one
    // match : 'someting' --> NOT Clear 
})
    .then(() => console.log('yes re-sync'))
