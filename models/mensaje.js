const {Schema, model} = require('mongoose');

const MensajeSchema = Schema({
    de: {
        type:     Schema.Types.ObjectId, 
        ref:      'Usuario',
        required: true
    },
    para: {
        type:     Schema.Types.ObjectId, 
        ref:      'Usuario',
        required: true
    },
    mensaje: {
        type:     String,
        required: true
    }
    
},{
  timestamps: true
});

MensajeSchema.method('toJSON', function(){
    const {__v , ...auxObject} = this.toObject(); // Paea que el password no se envia a imprimir
    return auxObject;
});

module.exports = model('Mensaje', MensajeSchema);

