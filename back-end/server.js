const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const connectDB = require('./dbConnection');
const ticket = require('./Schema');

app.use(express.json());

connectDB();

app.use("api",require('./routes'));

app.listen(8080,()=>{
    console.log("App is listening");
})