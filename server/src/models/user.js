const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user,options){
    const SALT_FACTOR = 8
    if (!user.changed('password')){
        return;
    }
    //console.log('password hashed')
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },{
        hooks:{
            //beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = async function (password) {
        //console.log(password, this.password)
        const isMatch = await bcrypt.compareAsync(password, this.password)
        //console.log(isMatch)
        return isMatch
    }

    return User
}