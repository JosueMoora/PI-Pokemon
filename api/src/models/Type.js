const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('Type', {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        }
    }, {timestamps: false})
}