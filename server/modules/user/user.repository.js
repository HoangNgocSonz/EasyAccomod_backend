const mongoose = require("mongoose");

const PosstSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  phone: String,
  gender: String,
  soChungMinhThu: String,
  province: String,
  quan_huyen: String,
  phuong_xa: String,
  avatar: String,
  position: String,
  status: String,
  favourite: [
    {
      type: String,
    },
  ],
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
  if (
    data.userName ||
    data.password ||
    data.email ||
    data.phone ||
    data.soChungMinhThu ||
    data.province ||
    data.avatar ||
    data.gender ||
    data.quan_huyen ||
    data.status
  ) {
    return await UserModel.findByIdAndUpdate(id, { $set: data }, { new: true });
  } else {
    if (data.favourite) {
      return await UserModel.findByIdAndUpdate(
        id,
        { $addToSet: data },
        { new: true }
      );
    }
  }
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
