const mongoose = require("mongoose");

const PosstSchema = mongoose.Schema({
  title: String,
  description: String,
  province: String,
  quan_huyen: String,
  phuong: String,
  addressDetail: String,
  kindOfRoom: String,
  cost: Number,
  acreage: Number,
  images: [
    {
      type: String,
    },
  ],

  detailInfor: { type: Schema.Types.ObjectId, ref: "detailInfor" },
  phone: String,
  author: String,
  status: String,
});

const PostModel = mongoose.model("Post", PosstSchema);

const find = async function (query) {
  return await PostModel.find(query).populate("detailInfor");
};

const findById = async function (id) {
  return await PostModel.findById(id).populate("detailInfor");
};

const create = async function (data) {
  const newDocument = new PostModel(data);
  return await newDocument.save();
};

const update = async function (id, data) {
  return await PostModel.findByIdAndUpdate(id, { $set: data }, { new: true });
};

const deleteOne = async function (id) {
  return await PostModel.findByIdAndDelete(id);
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};
