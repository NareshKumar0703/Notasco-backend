import Role from './schema/schema.js';

export const createRole = async (roleBody) => {
    return await Role.create(roleBody);
};

export const getRoles = async () => {
    return await Role.find();
};

export const getRoleById = async (id) => {
    return await Role.findById(id);
};

export const updateRoleById = async (id, updateBody) => {
    const role = await getRoleById(id);
    if (!role) {
        throw new Error('Role not found');
    }
    Object.assign(role, updateBody);
    await role.save();
    return role;
};

export const deleteRoleById = async (id) => {
    const role = await getRoleById(id);
    if (!role) {
        throw new Error('Role not found');
    }
    await role.deleteOne();
    return role;
};
