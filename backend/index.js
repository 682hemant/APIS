const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json());

// import routes
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');


// db connection
const DB = 'mongodb+srv://luck:lkshpS@cluster0.mu47d.mongodb.net/mern?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log(`database has benn connected`);
}).catch(err => console.log(`no connecton ${err}`));



// routes
app.use('/posts',postsRoutes);
app.use('/users',userRoutes);


// server
app.listen(4000, () => {
  console.log(`server is running on port 4000`);
})