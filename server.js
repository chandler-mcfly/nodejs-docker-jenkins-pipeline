'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Dear Rahul "SRK" Saha, Your Azure CI/CD DevOps Pipeline with AKS Terraform ran successfully!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
