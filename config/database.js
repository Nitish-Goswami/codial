const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codial');

mongoose.connection
.on('error',console.error.bind(console,'Error in connecting to mongodb'))
.once('open',()=>console.log('Server is connected to mongodb'));