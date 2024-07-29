const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const PORT = process.env.PORT || 5000;
const PORT = 3000;

//middleware
// const app = express();
// app.use(cors());
// app.use(express.json());

//connect to db
app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

