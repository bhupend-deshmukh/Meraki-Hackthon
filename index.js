// create server 
const express = require('express');
const app = express();
const port = 3000;

// import routes
const userRouter = require('./routes/users.routes');

app.use(express.json());
app.use('/api',userRouter)

// listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});