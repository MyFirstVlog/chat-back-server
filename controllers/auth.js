const bcryptjs = require("bcryptjs");
const { request } = require("express");
const { response } = require("express");
const { validationResult } = require("express-validator");
const generarJWT = require("../helpers/jwt");
const Usuario = require('../models/usuario');

const crearUsuario = async(req = request, res = response) => {
    try {

        const {email, password} = req.body;

        const existeEmail = await Usuario.findOne({email});

        if(existeEmail) return res.status(400).json({
            ok:false,
            msg: 'El correo ya existe'
        });

        
        //Guardar en db
        const usuario = new Usuario(req.body);
        
        // Encriptar contraseña,
        //Vueltas
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        //Generar el JWT
        const token = await generarJWT(usuario.id);

        await usuario.save();

        res.json({
           usuario,
           token,
           ok: true
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
    const {email, password}  = req.body;

    try {

        const usuarioDB = await Usuario.findOne({email});
        if(!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            })
        }

        //Validar el password

        const validPassword = bcryptjs.compareSync(password, usuarioDB.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password no es correcto'
            })
        }

        //Generar el JWT

        const token = await generarJWT(usuarioDB.id);

        return res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }

    return res.json({
        ok: true,
        msg: 'login',
        body
    })
};

const reNewToken = async(req = request, res = response) => {

    const uid = req.uid;

    //Generar un nuevo jwt

    const token = await generarJWT(uid)

    //Obtener usuario por uid

    const usuario = await Usuario.findById({ _id: uid });

    return res.json({
        ok: true,
        usuario,
        token
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    reNewToken
}