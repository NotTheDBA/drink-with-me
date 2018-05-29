module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        // displayname: {
        //     type: Sequelize.STRING,
        //     notEmpty: true
        // },

        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        gravatar: {
            type: Sequelize.STRING
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }


    });

    User.associate = function(models) {

        User.hasMany(models.Friend)

        // models.Friend.hasMany(User)

        //         // User.belongsToMany(User, );
        models.Friend.belongsToMany(User, { as: 'isFriend', foreignKey: 'friendId', through: 'Friend' });

    };


    return User;

}