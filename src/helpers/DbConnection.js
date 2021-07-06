const mongoose = require('mongoose');
const { connectionString } = require('../../config.sample.json');

mongoose.connect(
  process.env.MONGODB_STRING || connectionString,
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