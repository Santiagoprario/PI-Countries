const { Router }  = require("express")
const { Country , Touristic} = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.get("/",  async (req, res) => {
  let name = req.query.name  
  const pais = await Country.findAll ({
    where: { name: { [Sequelize.Op.iLike] : `%${name}%`} },
    include: Touristic
  })
  if (name && pais.length === 0) return res.status(404).json({message: 'No hemos podido encontrar el codigo solicitado'})
  if (name) return res.json(pais); 
  return await Country.findAll({
    attributes: ["idCountry" , 'name', 'flag' , 'continent' , 'capital'],
  })
  .then((countries) => res.json(countries))
  .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/:id", async (req, res) => {
  let id = req.params.id.toUpperCase();
  const pais = await Country.findOne ({
    where: { idCountry:id },
    include: Touristic
  })
  if (pais) return res.json(pais)
  if (!pais) return res.status(404).json({message: 'No hemos podido encontrar el codigo solicitado'})
  .catch((error) => res.status(500).json({ message: error.message }));
});

router.get("/", async (req, res) => {
  
  
  if (!pais) return res.status(404).json({message: 'No hemos podido encontrar el codigo solicitado'})
  .catch((error) => res.status(500).json({ message: error.message }));
});



module.exports = router;