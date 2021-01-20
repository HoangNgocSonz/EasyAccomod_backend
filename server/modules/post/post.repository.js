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
  reportLeased: {
    type: Boolean,
    default: false,
  },
  report_wrong_information: {
    type: Boolean,
    default: false,
  },
  deleteTrashCost: String,
  commentx: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  veryBad: {
    type: Number,
    default: 0,
  },
  bad: {
    type: Number,
    default: 0,
  },
  nomal: {
    type: Number,
    default: 0,
  },
  good: {
    type: Number,
    default: 0,
  },
  veryGood: {
    type: Number,
    default: 0,
  },
});

const PostModel = mongoose.model("Post", PosstSchema);

const find = async function (query) {
  return await PostModel.find(query).populate("commentx");
};

const findById = async function (id) {
  return await PostModel.findById(id).populate("commentx");
};

const create = async function (data) {
  const newDocument = new PostModel(data);
  return await newDocument.save();
};

const update = async function (id, data) {
  if (
    data.title ||
    data.description ||
    data.province ||
    data.quan_huyen ||
    data.phuong ||
    data.addressDetail ||
    data.kindOfRoom ||
    data.cost ||
    data.acreage ||
    data.phone ||
    data.author ||
    data.status ||
    data.reportLeased ||
    data.report_wrong_information
  ) {
    return await PostModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    ).populate("commentx");
  } else {
    if (data.commentx) {
      return await PostModel.findByIdAndUpdate(
        id,
        { $addToSet: data },
        { new: true }
      ).populate("commentx");
    }
  }
};

const deleteOne = async function (id) {
  return await PostModel.findByIdAndDelete(id).populate("commentx");
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};
