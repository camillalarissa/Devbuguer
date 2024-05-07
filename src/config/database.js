const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
    dialect: 'postgres',
    host:'localhost',
    username:'postgres',
    password:'postgres',
    database:'devburger',
    define:{
        timespamps:true,
        underscored:true,
        underscoredAll:true,
    },
}

