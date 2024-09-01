// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Gerar token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Registro de usuário
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) {
        res.status(400).json({ message: 'Usuário já existe' });
        return;
    }

    const user = await User.create({ username, password });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Dados inválidos' });
    }
};

// Login de usuário
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
};

// Listar usuários (somente admin)
const getUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
};

module.exports = { registerUser, loginUser, getUsers };
