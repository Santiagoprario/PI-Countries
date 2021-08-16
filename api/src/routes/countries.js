const { Router }  = require("express")
const { Country , Touristic} = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.get("/",  (req, res) => {
  return  Country.findAll({
    attributes: ["idCountry" , 'name', 'flag' , 'continent' , 'capital'],
  })
    .then((countries) => res.json(countries))
    .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/:id",  (req, res) => {
  
});





module.exports = router;