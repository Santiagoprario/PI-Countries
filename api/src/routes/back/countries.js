const { Router }  = require("express")
const { Country , Activity} = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.get("/",  async (req, res) => {
  let { name , page , pageSize , order } = req.query
  try { 
  const pais = await Country.findAll ({
    where: { name: { [Sequelize.Op.iLike] : `%${name}%`} },
    include: Activity
  })

  if(!page && !pageSize) {
    const countries = await Country.findAll({
      attributes: ["idCountry" , 'name', 'flag' , 'continent' , 'poblation'],
      order: [
        ['name'],
      ],
      
    })
    
    
    return res.json(countries)
  }
  
  
  if(page && pageSize && order==='DESC') {
     const pages = await Country.findAll({
      attributes: ["idCountry" , 'name', 'flag' , 'continent' , 'capital'],
      order: [
        ['name','DESC'],
      ],
      offset: (page * pageSize),
      limit: pageSize
    })
    return res.json(pages)
  }

  if(page && pageSize ) {
    const pages = await Country.findAll({
     attributes: ["idCountry" , 'name', 'flag' , 'continent' , 'capital'],
     order: [
       ['name'],
     ],
     offset: (page * pageSize),
     limit: pageSize
   })
   return res.json(pages)
 }
  

  if (name && pais.length === 0) return res.status(404).json({message: 'No hemos podido encontrar el codigo solicitado'})
  if (name) return res.json(pais); 
  return await Country.findAll({
    attributes: ["idCountry" , 'name', 'flag' , 'continent' , 'capital'],
    order: [
      ['name'],
    ],
  })
  }
    catch {
      ((error) => res.status(500).json({ message: error.message }))};
});

router.get("/:id", async (req, res) => {
  let id = req.params.id.toUpperCase();
  try {const pais = await Country.findOne ({
    where: { idCountry:id },
    include: Activity
  })
  if (pais) return res.json(pais)
  if (!pais) return res.status(404).json({message: 'No hemos podido encontrar el codigo solicitado'})
    }
    catch { 
    ((error) => res.status(500).json({ message: error.message }))};
});

router.get('/all/all' , async (req,res) => {
  try {
  let countries = await Country.findAll({
    attributes: ["idCountry" , 'name'],
    order: [
      ['name'],
    ],
    })
    return res.json(countries)}
  catch
  {((error) => res.status(500).json({ message: error.message }))};
});




module.exports = router;