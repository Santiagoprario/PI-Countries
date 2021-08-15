const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries' ,(req ,res) => {
    axios.get("https://api.neoscan.io/api/main_net/v1/get_all_nodes")
    .then(data => res.json(data))
    .catch(err => next(err));

})



module.exports = router;
