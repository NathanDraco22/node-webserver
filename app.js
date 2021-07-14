require('dotenv').config();


const Server = require('./Models/server')

const serverMain = new Server();


serverMain.listen();






