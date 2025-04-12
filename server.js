const express = require('express');
const cors = require('cors');
require('dotenv').config();
const weatherRoutes = require('./routes/weather');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/weather', weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});