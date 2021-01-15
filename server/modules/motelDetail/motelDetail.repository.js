const mongoose = require("mongoose");

const MotelDetailSchema = mongoose.Schema({
  bathroom: Number,
  Bedroom: Number,
  air_conditioning: Boolean,
  electric_water_heater: Boolean,
  costOfElectric: Number,
  costOFWater: Number,
  wifi: Boolean,
  common_or_not: Boolean,
});

const MotelDetailModel = mongoose.model("motelDetail", MotelDetailSchema);

const find = async function (query) {
  return await MotelDetailModel.find(query);
};

const findById = async function (id) {
  return await MotelDetailModel.findById(id);
};

const create = async function (data) {
  const newDocument = new MotelDetailModel(data);
  return await newDocument.save();
};

const update = async function (id, data) {
  return await MotelDetailModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
};

const deleteOne = async function (id) {
  return await MotelDetailModel.findByIdAndDelete(id);
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};
