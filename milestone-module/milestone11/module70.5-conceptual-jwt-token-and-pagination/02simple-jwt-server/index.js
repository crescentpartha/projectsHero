const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// set middle-tier
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log('inside verify token', authHeader);
    if (!authHeader) {
        return res.status(401).send({ message: 'unauthorized' });
    }
    const token = authHeader.split(' ')[1];
}

app.get('/', (req, res) => {
    res.send('Hello from simple JWT Server');
});

app.post('/login', (req, res) => {
    const user = req.body;
    console.log(user);
    // DANGER: Do not check password here for serious application
    // Use proper process for hashing and checking
    // After completing all authentication related verification, issue JWT token
    if (user.email === 'abc@def.com' && user.password === 'asdfasdf') {
        // Generate/issue JWT access token and store it localStorage on client side
        const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.send({
            success: true,
            accessToken: accessToken
        });
    }
    else {
        res.send({ success: false });
    }
});

app.get('/orders', verifyJWT, (req, res) => {
    // console.log(req.headers.authorization);
    res.send([{ id: 1, item: 'sunGlass' }, { id: 2, item: 'moonGlass' }]);
});

app.listen(port, () => {
    console.log('Listening to port', port);
});