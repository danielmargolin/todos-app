import UsersService from "../services/users.service.js";

//get all users
export const getUsers = async (req, res) => {
  const users = await UsersService.findAllUsers();
  res.send(users);
};

//create user
export const createUser = async (req, res) => {
  const { username, age } = req.body;
  console.log(username, age);
  await UsersService.createUser(username, age);
  res.status(201).send();
};

//get user by id
export const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await UsersService.getUserById(id);
  res.send(user);
};

//delete user by id
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  await UsersService.deleteUserById(id);
  res.send();
};

//update user by id
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, age } = req.body;
  const newUser = await UsersService.updateUserById(id, username, age);
  res.status(200).send(newUser);
};

export default { getUsers, createUser, getUser, deleteUser, updateUser };
