const express = require('express');
const http = require('http');
const cors = require('cors');
const { connect } = require('./socket');

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./network/index'));

const server = http.createServer(app);

connect(server);

server.listen(port, () => console.log(`Listening port ${port}`));

