const {response, request} = require('express');



const getUser = (req = request, res = response)=>{

    const params = req.query

    res.json({
        ok: "estamos bien papi",
        data:"estamos desde la nuevas desestructura",
        params
    })
}

const postUser = (req, res=response)=>{

    const body = req.body;

    res.json({
        ok:"ahora le entendi",
        data:"estamos en el post papi",
        estoViene: body
    })
}

const putUser = (req, res = response)=>{
    const body = req.body;
    const id = req.params.id

    res.json({
        mensaje : "se ha actualizado correctamente",
        elemento : body,
        id
    })
}


module.exports = {
    getUser,
    postUser,
    putUser
}