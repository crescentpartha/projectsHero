const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');
        const orderCollection = client.db('geniusCar').collection('order'); // MongoDB automatic create it, if doesn't exists.

        // get all services json data
        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        // load particular service data (id-wise)
        app.get('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });

        // POST a service from server-side to database
        app.post('/service', async(req, res) => {
            const newService = req.body;
            console.log('Adding new service', newService);
            const result = await serviceCollection.insertOne(newService);
            res.send(result);
        });

        // DELETE a service from server-side to database
        app.delete('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await serviceCollection.deleteOne(query);
            res.send(result);
        });

        // Order collection API
        app.post('/order', async(req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});