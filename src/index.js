const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect(
  'mongodb+srv://guest:guest@001-zolye.mongodb.net/instafeed?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
);
app.use(require('./routes'));
app.listen(3333);
