// npm init -y 
// npm i express nodemon mongoose


const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Mehaba Arkadaşlar");
}
);


app.listen(8007, () => {
    console.log("Server is running on port 8007");
});
