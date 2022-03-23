//path: del router api/login

const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, reNewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campsos');

const router = Router();

//Crear nuevos uaurios
router.post('/new', [
    check('nombre', 'El nombre es obligatorio y debe ser un string').isString().not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
],crearUsuario)

//Login
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
],loginUsuario)

//Revalidar Token
router.get('/renew', reNewToken)


module.exports = router;