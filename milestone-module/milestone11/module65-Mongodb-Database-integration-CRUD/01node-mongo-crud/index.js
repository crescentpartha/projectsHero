const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin';
app.use(express.json()); // To parse body (req.body)


// user: dbuser1
// password: fLF42yfe7MM0cDWF

const uri = "mongodb+srv://dbuser1:fLF42yfe7MM0cDWF@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create hardcoded data and send to the database
// async function run() {
//     try {
//         await client.connect();
//         const userCollection = client.db("foodExpress").collection("user");
//         const user = { name: 'Mohona Nodi', email: 'nodi@gmail.com' };
//         const result = await userCollection.insertOne(user);
//         console.log(`User inserted with id: ${result.insertedId}`);
//     } 
//     finally {
//         // await client.close(); // commented, if I want to keep connection active;
//     }
// }
// run().catch(console.dir);

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        app.post('/user', (req, res) => {

        })

    }
    finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
});