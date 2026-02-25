import User from '../user/schema/schema.js';
import Role from '../role/schema/schema.js';
import jwt from 'jsonwebtoken';

export const register = async (userBody) => {
    if (await User.findOne({ email: userBody.email })) {
        throw new Error('Email already taken');
    }

    const userRole = await Role.findOne({ name: 'USER' });
    if (!userRole) {
        throw new Error('Default role USER not found in system. Please seed database.');
    }

    const user = await User.create({ ...userBody, role: userRole._id });
    return user;
};

export const login = async (email, password) => {
    const user = await User.findOne({ email }).populate('role');
    if (!user || !(await user.matchPassword(password))) {
        throw new Error('Invalid email or password');
    }
    return user;
};

export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};
