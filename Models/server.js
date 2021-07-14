
const express = require('express');
const cors    = require('cors');

class Server {

    constructor(){

        this.app  = express();
        this.port = process.env.PORT; 

        this.userPath = '/api'

        this.middlewares();

        this.routes();
    }

    middlewares(){

        this.app.use(express.static('public'));
        this.app.use(cors());

        //para lectura y parseo del body

        this.app.use(express.json()); //estp es para indicar en formato JSON
    }

    routes(){

        this.app.get('/', (req,res)=>{

            res.send("HOla mundo desde un servidor Express");
        
        })

        this.app.use(this.userPath, require('../routes/user'));


                
    }


    listen(){

        this.app.listen(this.port, ()=>{
            console.log('servidor iniciado', this.port);
        });
        
    }
}

module.exports = Server;