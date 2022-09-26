const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors()); // Without it, don't establish the Cross-Connection between 3000 and 5000 PORT;
app.use(express.json()); // parse the JSON-data from request or req.body and then give it to us;

app.get('/', (req, res) => {
    res.send('John is running and waiting for Ema - Running ema-john-server');
});

app.listen(port, () => {
    // console.log('Listening to port', port);
    console.log('John is running on port', port);
});