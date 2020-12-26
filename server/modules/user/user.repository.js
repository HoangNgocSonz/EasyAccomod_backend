const mongoose = require("mongoose");

const PosstSchema = mongoose.Schema({
  userName: String,
  avatar: Image,
});

const UserModel = mongoose.model("User", PosstSchema);

const find = async function (query) {
  return await UserModel.find(query);
};

const findById = async function (id) {
  return await UserModel.findById(id);
};

const create = async function (data) {
  const newDocument = new UserModel(data);
  return await newDocument.save();
};

const update = async function (id, data) {
  return await UserModel.findByIdAndUpdate(id, { $set: data }, { new: true });
};

const deleteOne = async function (id) {
  return await UserModel.findByIdAndDelete(id);
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};
