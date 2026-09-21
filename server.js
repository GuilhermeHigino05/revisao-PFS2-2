import express from 'express';
import swaggerUi from 'swagger-ui-express';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");
const cookieParser = require('cookie-parser');


const server = express();
server.use(cookieParser());
server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));

server.listen(5000, function() {
    console.log("servidor web em funcionamento!");
})