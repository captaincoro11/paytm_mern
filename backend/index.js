const express = require("express");
const dotenv = require('dotenv');
const {connectDatabase} = require('./db.js');
const Routes = require('./routes/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
dotenv.config();

const port = 8080;


connectDatabase(process.env.MONGO_URI);

app.use(cors({
    origin: 'https://paytm-frontend-rhmv83s5g-pranjuls-projects.vercel.app', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only specified methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
}));
  

app.use(bodyParser.json());


app.use("/api/v1",Routes);

app.get('/',(req,res)=>{
    res.send("Here we go")
})




app.listen(port,()=>{
    console.log(`Your server has been started on port:${port}`);
})











