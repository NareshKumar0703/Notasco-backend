import User from "./schema/schema.js";
import Role from "../role/schema/schema.js";
import { getPagination } from "../../utils/pagination.js";

export const createUser = async (userBody) => {
  if (await User.findOne({ email: userBody.email })) {
    throw new Error("Email already taken");
  }

  if (!userBody.role) {
    const userRole = await Role.findOne({ name: "USER" });
    if (userRole) userBody.role = userRole._id;
  }
  return await User.create({...userBody, password: hashedPassword});
};

export const queryUsers = async (page, limit) => {
  const { limit: limitVal, offset } = getPagination(page, limit);

  const users = await User.find()
    .skip(offset)
    .limit(limitVal)
    .populate("role", "name");

  const total = await User.countDocuments();

  return { users, total };
};

export const getUserById = async (id) => {
  return await User.findById(id).populate("role", "name");
};

export const getUserByEmail = async (email) => {
  return await User.findOne({ email }).populate("role");
};

export const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  if (
    updateBody.email &&
    (await User.findOne({ email: updateBody.email, _id: { $ne: userId } }))
  ) {
    throw new Error("Email already taken");
  }

  Object.assign(user, updateBody);
  await user.save();
  return user;
};

export const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  await user.deleteOne();
  return user;
};
