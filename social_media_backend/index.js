const express = require('express');

const app = express();
require('dotenv').config({path : './config/config.env'});
const PORT = process.env.PORT || 3000;
const cors = require("cors");

// connectio Database//
const connection = require('./config/connection');

// import routes
const signup = require('./routers/singup');
const signin = require('./routers/signin');

// call dbconnection 
connection();
app.use(express.json());
app.use(cors());

// routers
app.use('/api', signup )
app.use('/api',signin);

app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`)
})



//     URI for routes;
//  http://localhost:5000/api/signin
//  http://localhost:5000/api/signup