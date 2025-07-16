const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const prisma = require('../config/prisma');

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, roleId: user.roleId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.isActive) return res.status(401).json({ error: 'User not found or inactive' });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ error: 'Wrong password' });

        const token = generateToken(user);

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Servor error during login' });
    }
};

const register = async (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const defaultRole = await prisma.role.findFirst({
            where: { label: 'user' },
        });

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstname,
                lastname,
                roleId: defaultRole?.id || null,
            },
        });

        const token = generateToken(user);

        res.status(201).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error during registration' });
    }
};

const me = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                email: true,
                firstname: true,
                lastname: true,
                role: { select: { id: true, label: true } },
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) return res.status(404).json({ error: 'User not found' });

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching current user' });
    }
};


module.exports = { login, register, me };