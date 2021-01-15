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

  detailInfor: {
    type: mongoose.Types.ObjectId,
    ref: "motelDetail",
  },
  phone: String,
  author: String,
  commemt: [
    {
      avatar: String,
      comment: String,
      userName: String,
    },
  ],
});

const PostModel = mongoose.model("Post", PosstSchema);

const find = async function (query) {
  return await PostModel.find(query).populate("motelDetail");
};

const findById = async function (id) {
  return await PostModel.findById(id).populate("motelDetail");
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
