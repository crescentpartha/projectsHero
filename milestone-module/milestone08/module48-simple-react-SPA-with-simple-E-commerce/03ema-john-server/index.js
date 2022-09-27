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

// create/handle dynamic data from client-side to database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        // get all products data (json format) from database
        app.get('/product', async(req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            // const products = await cursor.limit(10).toArray(); // In here, it shows only 10 product;
            const products = await cursor.toArray();
            res.send(products);
        });

        // product count: How many products have in the database | {"count":76}
        app.get('/productCount', async(req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const count = await cursor.count();
            res.send({count});
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('John is running and waiting for Ema - Running ema-john-server');
});

app.listen(port, () => {
    // console.log('Listening to port', port);
    console.log('John is running on port', port);
});