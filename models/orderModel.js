const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  value: Number,
  creationDate: Date,
  items: [itemSchema]
});

module.exports = mongoose.model('Order', orderSchema);
