const http = require("http");
const fs = require("fs");
const path = require("path");
const routes = require('./routes');

const server = http.createServer(routes.handler);
server.listen(2020);
