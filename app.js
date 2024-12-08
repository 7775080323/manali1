require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// import routes
const userRoute = require('./api/user/user1.route')

mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.kar0q.mongodb.net/Db1?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Database Connected!')).catch((err) => console.log('Failed to connect', err));


// user route registered
app.use('/user1', userRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});