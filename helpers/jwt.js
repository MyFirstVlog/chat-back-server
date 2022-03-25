const jwt = require("jsonwebtoken");


const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid} //* Se pone la info del payload del jwt

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn:'24h',
        }, (err, token) => {
            if(err) reject('No se pudo generar el JWT')
            else resolve(token);
        })
    })
}

module.exports = generarJWT;