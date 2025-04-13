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



//     URI for routes;
//  http://localhost:5000/api/signin   => sign in
//  http://localhost:5000/api/signup   => sign up
//  http://localhost:5000/api/updateprofile/67fbaf837595c966988ac8a7  => user details update
//  http://localhost:5000/api/newpost/67fbaf837595c966988ac8a7     => user new post
