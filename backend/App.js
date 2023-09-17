const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const dbConnection = require('./Config/db');
const router = require('./Routes/router');



const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("uploads", express.static("./uploads"));
app.use("/files", express.static("./public/files"));

app.use(router);

dbConnection();

const Port = 5000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`.bgCyan.white);
});
