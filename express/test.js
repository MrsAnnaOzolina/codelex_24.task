const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://root:example@localhost:27018/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => {
        console.log("Database not connected")
        console.log(err)
    });