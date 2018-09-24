const express = require('express');
const path = require('path');
const PORT = 3000;


const app = express();


app.use(express.static(path.resolve(__dirname, '../static')))

app.listen(PORT, function () {
    console.log('ProductInformationComponent PROXY server listening on localhost:' + PORT);
});