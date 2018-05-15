module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        gravatar: DataTypes.STRING
    });
    return User;
}