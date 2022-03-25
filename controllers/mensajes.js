const { response } = require("express");
const { request } = require("express");
const Mensaje = require("../models/mensaje");


const obtenerChat = async(req= request, res= response) => {
    const miId = req.uid;
    const mensajesFrom = req.params.from

    const last30 = await Mensaje.find({
        $or: [
            {de: miId, para: mensajesFrom},
            {de: mensajesFrom, para: miId},
        ]
    }).sort({createdAt: 'desc'}).limit(30)

    res.json({
        ok: true,
        mensajes: last30,
    })

}

module.exports = {
    obtenerChat
}