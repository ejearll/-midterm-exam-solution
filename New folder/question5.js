const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    }
});

sequelize.sync().then(() => {
    console.log('Database synced');
});


app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});