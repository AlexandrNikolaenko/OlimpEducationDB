const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('OlimpEducation', 'AliBaBa', 'A9l0E6x0', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const Tasks = sequelize.define(
    'Tasks',
    {
        _id: {
            type: DataTypes.INTEGER
        },
        class: {
            type: DataTypes.INTEGER
        },
        level: {
            type: DataTypes.INTEGER
        },
        tags: {
            type: DataTypes.TEXT
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

Tasks.sync({alter: true});

Tasks.drop()