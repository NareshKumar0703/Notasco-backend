import mongoose from 'mongoose';
import { ROLES } from '../../../utils/constants.js';

const roleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Role name is required'],
            unique: true,
            enum: Object.values(ROLES),
        },
        permissions: {
            user: {
                view: { type: Boolean, default: false },
                add: { type: Boolean, default: false },
                edit: { type: Boolean, default: false },
                delete: { type: Boolean, default: false },
            },
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Role', roleSchema);
