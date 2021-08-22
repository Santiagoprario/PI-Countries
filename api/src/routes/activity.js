const { Router }  = require("express")
const { Country , Touristic } = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.post('/', async (req, res) => {
    const {name , dificulty , duration , season }= req.body;
    console.log(name)
    console.log(req.body)
    try {
        let act = await Touristic.create({
                name: name,
                dificulty: dificulty,
                duration: duration,
                season: season
    
        });
        return res.json(act)
    } catch (error) {
        console.log(error)
    }
})

router.get("/",  (req, res) => { 
    return  Touristic.findAll()
        .then((act) => res.json(act))
        .catch((error) => res.status(500).json({ message: error.message }));
    });




module.exports = router;