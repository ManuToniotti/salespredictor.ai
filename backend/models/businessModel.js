// backend/models/businessModel.js
const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  productType: { type: String, required: true },
  targetMarket: { type: String, required: true },
  location: { type: String, required: true },
  estimatedStartDate: { type: Date, required: true },
  initialInvestment: { type: Number, required: true }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;