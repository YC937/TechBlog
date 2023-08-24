const router = require('express').Router();
const seedDb = require('../../seeds/seed');

router.post("/", async (req, res)=> {
  if(req.body.password === process.env.SEED_PASSWORD){
    await seedDb();
    res.status(200).json({message: "seed finished"});
  }
  else{
    res.status(400).json({message: "password failed"});
  }
  
});

module.exports = router;