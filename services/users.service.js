import { UserModel } from "../models/user.model.js";

const findAllUsers = async () => {
  return await UserModel.find().populate("todos").exec();
};

const createUser = async (username, age) => {
  return await UserModel.create({ username, age });
};

const getUserById = async (id) => {
  return await UserModel.findById(id).populate("todos");
};

const deleteUserById = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};

const updateUserById = async (id, username, age) => {
  return await UserModel.findByIdAndUpdate(id, { username, age }, { returnDocument: "after" });
};

export default { getUserById, findAllUsers, updateUserById, deleteUserById, createUser };
