const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello from the API!');
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.send(`You sent: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
