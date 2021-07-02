const mongoose = require('mongoose');
const { connectionString } = require('../../config.json');

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log("Connected to MongoDB");
});