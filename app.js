const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! Node.js is running inside Jenkins Kubernetes Agent.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
