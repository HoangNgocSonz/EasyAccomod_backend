const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
});

const CommentModel = mongoose.model("comment", CommentSchema);

const find = async function (query) {
  return await CommentModel.find(query).populate("author");
};

const findById = async function (id) {
  return await CommentModel.findById(id).populate("author");
};

const create = async function (data) {
  const newDocument = new CommentModel(data).populate("author");
  return await newDocument.save();
};

const update = async function (id, data) {
  return await CommentModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  ).populate("author");
};

const deleteOne = async function (id) {
  return await CommentModel.findByIdAndDelete(id).populate("author");
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};
