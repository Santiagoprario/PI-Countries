const { Router }  = require("express")
const { Country , Activities } = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

// router.post('/', async (req, res) => {
//     const {name , difficulty , duration , season , countries } = req.body;
//     let Activity = await Activities.findOrCreate({
//             where: {
//                 name: name,
//                 difficulty: difficulty,
//                 duration:duration,
//                 season:season
//             }
//         })
//     console.log('actividad creada')
//     try {
//         let countryFound = await Country.findByPk(countries)
//         console.log(countryFound)
//         await countryFound.addActivities(activityCreated)
//         console.log('paso')
//         res.json(createActivity)
//         }
//       catch {
//           (error)=>{return res.send(error)}
//         }
// })

router.post('/', async (req, res) => {
  const succes = true;
  const { name, difficulty, duration, season, countries } = req.body;
  const activityCreated = await Activities.create({
    name,
    difficulty,
    duration,
    season,
  });
  try {
         if(countries.length > 1) {   
           for (var i = 0 ; i<countries.length ; i++) {
            let countryFound = await Country.findByPk(countries[i])
            await activityCreated.addCountries(countryFound) 
           }
           return res.json(activityCreated)
         }

        let countryFound = await Country.findByPk(countries[0])
        console.log(countryFound)
        await countryFound.addActivities(activityCreated);
        await activityCreated.addCountries(countryFound)
        res.json(activityCreated);
  
  } catch (error) {
    res.sendStatus(500);
  }
});


router.get("/", async (req, res) => {
    await Activities.findAll({include: [ { model: Country }]})
      .then((activities) => res.json(activities))
      .catch((error) => res.status(500).json({ message: error.message }));
  });




module.exports = router;