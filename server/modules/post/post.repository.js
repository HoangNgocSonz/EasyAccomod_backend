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
  common_or_not: Boolean,
  detailInfor: {
    bathroom: Number,
    Bedroom: Number,
    air_conditioning: Boolean,
    electric_water_heater: Boolean,
    balcony: Boolean,
    costOfElectric: Number,
    costOFWater: Number,
  },
  phone: String,
  author: String,
  status:String,
  comment:[{
    userName:String,
    commentx:String,
    avatar:String
  }]
});

const PostModel = mongoose.model("Post", PosstSchema);

const find = async function (query) {
  return await PostModel.find(query);
};

const findById = async function (id) {
  return await PostModel.findById(id);
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
