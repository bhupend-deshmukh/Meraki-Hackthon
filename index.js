// create server 
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// import routes
const userRouter = require('./routes/users.routes');

app.use(express.json());
app.use('/api',userRouter)

// get api cwrite
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});