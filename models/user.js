module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: DataTypes.STRING,
        userName: DataTypes.STRING,
        passKey: DataTypes.STRING,
        gravatar: DataTypes.STRING
    });
    return User;
}