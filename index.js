require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouter = require("./routes/api-routes")


const app = express();

// app.use(cors(
//     {
//         origin: process.env.URL
//     }
// ));

app.use(cors({ origin: '*' }));


const PORT = process.env.PORT;

app.use('/api/ss', apiRouter);

app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`)
})