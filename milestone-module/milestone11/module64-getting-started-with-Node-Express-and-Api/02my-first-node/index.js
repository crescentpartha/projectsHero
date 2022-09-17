const express = require('express');
const cors = require('cors');
const app = express();
// const port = precess.env.PORT || 5000;
const port = 5000;

app.use(cors());
app.use(express.json()); // Solution of "Express.js req.body undefined";

app.get('/', (req, res) => {
    res.send('Look Mama! I can run code with Nodemon now!!!');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01788888888' },
];

app.get('/users', (req, res) => {
    // res.send('Hello from user');
    // res.send({ id: 1, name: 'Abdul Alim', job: 'Khai shudhu halim' });
    res.send(users);
});

// Create dynamic api
app.get('/user/:id', (req, res) => { // api parameter
    console.log(req.params); // access params
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    // res.send('finding user');
    res.send(user);
});

app.post('/user', (req, res) => {
    // console.log('request', req);
    console.log('request', req.body);
    res.send('post method success');
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Sour soud fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
});