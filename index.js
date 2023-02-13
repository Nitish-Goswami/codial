
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const database = require('./config/database');
app.use(cookieParser());


const port = 5000;

// Parse JSON data
app.use(express.json());
app.use(express.urlencoded());

// Cookie Parser Middleware
// 

// Setting view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));



app.listen(port,(err)=>{
    if(err)
        console.log(`Error : ${err}`);
    console.log(`Server is running on port ${port}`);   
})