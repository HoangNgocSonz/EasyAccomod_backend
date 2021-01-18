const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  // detailInfor: { type: Schema.Types.ObjectId, ref: "motelDetail" },
  phone: String,
  author: String,
  status: String,

  bathroom: Number,
  Bedroom: Number,
  ToiLet: Number,
  air_conditioning: {
    type: Boolean,
    default: false,
  },
  electric_water_heater: {
    type: Boolean,
    default: false,
  },
  costOfElectric: Number,
  costOFWater: Number,
  wifi: {
    type: Boolean,
    default: false,
  },
  common_or_not: {
    type: Boolean,
    default: false,
  },
  deleteTrashCost: String,
  comment: {
    type: Schema.Types.ObjectId,
    ref: "comment",
  },
});

const PostModel = mongoose.model("Post", PosstSchema);

const find = async function (query) {
  return await PostModel.find(query).populate("comment");
};

const findById = async function (id) {
  return await PostModel.findById(id).populate("comment");
};

const create = async function (data) {
  const newDocument = new PostModel(data);
  return await newDocument.save().populate("comment");
};

const update = async function (id, data) {
  return await PostModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  ).populate("comment");
};

const deleteOne = async function (id) {
  return await PostModel.findByIdAndDelete(id).populate("comment");
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};
