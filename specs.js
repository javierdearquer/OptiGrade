module.exports = (sequelize,DataTypes) =>
    sequelize.define('Specs', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true
        },
        parameter: DataTypes.STRING,
        date: DataTypes.DATE
    })