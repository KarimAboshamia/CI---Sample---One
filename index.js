const express = require("express");
const mongoose = require("mongoose");

const app = express();

async function connect() {
    try {
        await mongoose.connect("mongodb://admin:password@localhost:27017");
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
}

app.get('/', (req, res) => {
    res.send('Hello, this is a simple!');
});

app.listen(3000, async () => {
    console.log("Listening on Port 3000!!")
})