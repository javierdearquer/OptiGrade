const { CLIENT_LONG_PASSWORD } = require("mysql/lib/protocol/constants/client");
const user = require("../models/user");

module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'optigrade',
        user:process.env.DB_USER || 'optigrade',
        password: process.env.DB_PASS || 'optigrade',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './optigrade.sqlite'
        }
    }
}