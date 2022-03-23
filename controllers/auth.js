const { request } = require("express");
const { response } = require("express");
const { validationResult } = require("express-validator");
const Usuario = require('../models/usuario');

const crearUsuario = async(req = request, res = response) => {
    try {

        const {email, password} = req.body;

        const existeEmail = await Usuario.findOne({email});

        if(existeEmail) return res.status(400).json({
            ok:false,
            msg: 'El correo ya existe'
        });

        //TODO Encriptar contraseña,

        //Guardar en db

        const usuario = new Usuario(req.body);

        await usuario.save();

        res.json({
           usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
};

const loginUsuario = async(req = request, res = response) => {
    const {body}  = req;
    return res.json({
        ok: true,
        msg: 'login',
        body
    })
};

const reNewToken = async(req = request, res = response) => {
    return res.json({
        ok: true,
        msg: 'renew'
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    reNewToken
}