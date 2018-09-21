//import mongoose to connect database and create models
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect to your database from your enviroment variable
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, (err, data) => {
    if(err) console.log('Database Connection Error---------', err);
    console.log('Database Connected');
})

const player = new Schema({
    name: String,
    team: String,
    jerseyNumber: Number,
    rank: Number
});

//Define your model and export it
const Player = mongoose.model('Player', player);
module.exports =  { Player };