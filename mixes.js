module.exports = (sequelize,DataTypes) =>
    sequelize.define('Mixes', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true
        },
        name: DataTypes.STRING,
        date: DataTypes.DATE
    })