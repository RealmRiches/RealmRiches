const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  buyer: String,
  seller: String,
  amount: Number,
  status: {
    type: String,
    enum: ['pending', 'completed', 'disputed'],
    default: 'pending',
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
