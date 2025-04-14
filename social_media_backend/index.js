const express = require('express');

const app = express();
require('dotenv').config({ path: './config/config.env' });
const PORT = process.env.PORT || 3000;
const cors = require("cors");

// connectio Database//
const connection = require('./config/connection');

// import routes
const signup = require('./routers/singup');
const signin = require('./routers/signin');
const updateuserprofile = require('./routers/updateUserProfile')
const newpost = require('./routers/newpost');
const getuser = require('./routers/getUser')



// call dbconnection 
connection();
app.use(express.json());
app.use(cors());

// routers
app.use('/api', signup)
app.use('/api', signin);
app.use('/api', updateuserprofile)
app.use('/api', newpost)
app.use('/api', getuser)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})




