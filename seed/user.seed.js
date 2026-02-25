import User from '../src/modules/user/schema/schema.js';
import Role from '../src/modules/role/schema/schema.js';
import dotenv from 'dotenv';
dotenv.config();

export const seedUsers = async () => {
    try {
        const superAdminRole = await Role.findOne({ name: 'SUPERADMIN' });

        if (!superAdminRole) {
            console.log('Superadmin role not found, skipping user seed');
            return;
        }

        const superAdminEmail = process.env.SUPERADMIN_EMAIL || 'admin@gmail.com';
        const existingUser = await User.findOne({ email: superAdminEmail });

        if (!existingUser) {
            const user = new User({
                firstName: 'Super',
                lastName: 'Admin',
                email: superAdminEmail,
                password: process.env.SUPERADMIN_PASSWORD || 'Admin@123',
                role: superAdminRole._id,
                isActive: true
            });
            await user.save();
            console.log('Superadmin user created');
        } else {
            // console.log('Superadmin user already exists');
        }

    } catch (error) {
        console.error('Error seeding users:', error);
    }
};
