module.exports = (Sequelize, DataTypes) => {
    const Users = sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        }
    },
    {
        // tableName : 'table_name' --> if we want to declare new table name
        // timestapms : ture/false 
        // updateAt : true/false
        // createdAt : true/false
        // engine : 'MYISAM' --> NOT CLEAR 
    })
}