const { Router }  = require("express")
const { Country , Touristic} = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.post("/",  async (req, res) => {
    let { name , dificulty , duration , season , country} = req.body;
    
    const createActivity = await Touristic.create({
        name,
        dificulty,
        duration,
        season,
    });
    try {

    } catch {

    }

});

router.get("/",  (req, res) => { 
    return  Touristic.findAll()
        .then((act) => res.json(act))
        .catch((error) => res.status(500).json({ message: error.message }));
    });




module.exports = router;