import mongoose from 'mongoose';
import connectDB from '../src/config/db.js';
import { seedRoles } from './roles.seed.js';
import { seedUsers } from './user.seed.js';
import dotenv from 'dotenv';

dotenv.config();

const seed = async () => {
    await connectDB();

    console.log('Starting Seeding...');
    await seedRoles();
    await seedUsers();
    console.log('Seeding Complete!');

    process.exit(0);
};

seed();
