const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type:       String, 
        required:   true
    },
    email: {
        type:       String, 
        required:   true,
        unique:     true
    },
    password: {
        type:       String, 
        required:   true,
    },
    online: {
        type:       Boolean, 
        default:    false,
    },
});

UsuarioSchema.method('toJSON', function(){
    const {__v, _id, password, ...auxObject} = this.toObject(); // Paea que el password no se envia a imprimir
    auxObject.uid = _id;
    return auxObject;
});

module.exports = model('Usuario', UsuarioSchema);

