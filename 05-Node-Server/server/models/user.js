module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNULL: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNULL: false
        },

    })
    return User;
}