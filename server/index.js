const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/escrow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('RealmRiches Escrow API Running');
});

// Placeholder: Add routes for users, transactions, disputes

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
