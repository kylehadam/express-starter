const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Handling GET request to /');
});

app.post('/user', (req, res) => {
    res.send('Handling POST request to /user');
});

app.listen(PORT, () => {
    console.log(`Example app running on port ${PORT}`);
});
