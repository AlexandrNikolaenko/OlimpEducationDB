const { secureHeapUsed } = require('crypto');
const {Sequelize, DataTypes} = require('sequelize');
const tagsFile = require('./data.js');
const fs = require('fs');

// console.log(tagsFile.default);

const tasks = tagsFile.default;


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

const Users = sequelize.define(
    'Users',
    {
        userId: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(1234)
        },
        donetask_ids: {
            type: DataTypes.TEXT
        },
        login: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

const Answers = sequelize.define(
    'Answers',
    {
        nameFile: {
            type: DataTypes.STRING(1234)
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

// Tasks.sync({alter: true});
Users.sync({alter: true});
// Answers.sync({alter: true});

// fs.readdir('./Answers', (err, files) => {
//   if (err) throw err;
//     console.log(files.length);
//   for (let file of files) {
//     let stroke = Answers.create({
//         nameFile: file
//     });
//     console.log(stroke);
//   }
// });

// for (let task of tasks){
//     let stroke = Tasks.create({
//         _id: task.id,
//         class: task.class,
//         level: task.level,
//         tags: task.tags
//     });
//     console.log(stroke);
// }

Users.create({
    userId: 1, 
    name: 'Александр Николаенко',
    donetask_ids: '', 
    login: 'nikol.alex06@mail.ru', 
    password: 'A9l0E6x0', 
    email: 'nikol.alex06@mail.ru'
});


// sequelize.close();