//path: del router

const {Router} = require('express');

const router = Router();

//Crear nuevos uaurios
router.post('/new', (req, res) => {
    res.json({
        ok: true,
        msg: 'new'
    })
})

//Login
router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
    })
})

//Revalidar Token
router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
})




module.exports = router;