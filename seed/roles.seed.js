import Role from '../src/modules/role/schema/schema.js';

const roles = [
    {
        name: 'SUPERADMIN',
        permissions: {
            user: {
                view: true,
                add: true,
                edit: true,
                delete: true,
            },
        },
        description: 'Super Administrator with full access',
    },
    {
        name: 'ADMIN',
        permissions: {
            user: {
                view: true,
                add: true,
                edit: true,
                delete: false,
            },
        },
        description: 'Administrator with limited access',
    },
    {
        name: 'USER',
        permissions: {
            user: {
                view: true,
                add: false,
                edit: false,
                delete: false,
            },
        },
        description: 'Standard User',
    },
];

export const seedRoles = async () => {
    try {
        for (const role of roles) {
            const existingRole = await Role.findOne({ name: role.name });
            if (!existingRole) {
                await Role.create(role);
                console.log(`Role ${role.name} created`);
            } else {
               
            }
        }
    } catch (error) {
        console.error('Error seeding roles:', error);
    }
};
