const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
});

const CommentModel = mongoose.model("comment", CommentSchema);

const find = async function (query) {
  return await CommentModel.find(query).populate("detailInfor");
};

const findById = async function (id) {
  return await CommentModel.findById(id).populate("detailInfor");
};

const create = async function (data) {
  const newDocument = new CommentModel(data);
  return await newDocument.save();
};

const update = async function (id, data) {
  return await CommentModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
};

const deleteOne = async function (id) {
  return await CommentModel.findByIdAndDelete(id);
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};
