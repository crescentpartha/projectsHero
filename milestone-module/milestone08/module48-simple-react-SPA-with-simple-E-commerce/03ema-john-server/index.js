const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors()); // Without it, don't establish the Cross-Connection between 3000 and 5000 PORT;
app.use(express.json()); // parse the JSON-data from request or req.body and then give it to us;

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8vvj7ch.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("emaJohn").collection("product");
  // perform actions on the collection object
  console.log('emaJohn database is connected');
  client.close();
});

app.get('/', (req, res) => {
    res.send('John is running and waiting for Ema - Running ema-john-server');
});

app.listen(port, () => {
    // console.log('Listening to port', port);
    console.log('John is running on port', port);
});