const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connection setup with database with secure password on environment variable
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('crudProductManagement').collection('product');

        // get all products data (json format) from database
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });

        // POST a product form server-side to database
        app.post('/product', async(req, res) => {
            const newProduct = req.body;
            console.log('Adding a new product', newProduct);
            const result = await productCollection.insertOne(newProduct);
            res.send(result);
        });

        // DELETE a product from server-side to database
        app.delete('/product/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await productCollection.deleteOne(query);
            console.log('One product is deleted');
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running CRUD-Product-Management Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});