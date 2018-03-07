module.exports = function(sequelize, DataTypes) {
    let Space = sequelize.define('Space', {
        location_lat: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        location_lng: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        owner_username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        bookedBy_username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        time_booked: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        time_vacated: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        availability: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    });
    return Space;
};
