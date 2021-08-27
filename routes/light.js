const express = require("express");
const router = new express.Router();
const Light = require("../schema/formSchema");

router.post("/light", async (req, res) => {
  const data = new Light({
      ...req.body
  });

  try {
    await data.save();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/light", async ( req,res) => {
  try {
    const response = await Light.find({});
    res.send(response).status(201);
  } catch (err) {
    console.log(err);
    // res.json({
    //   status: "Failed",
    //   error: err,
    // });
  }
});

// router.patch('/light/:id', async(req,res)=>{
//  const lightID= req.params.id
//  const updates = Object.keys(req.body);
//     try{
//         const res = await Light.findById({_id: lightID}) 
//         updates.forEach((update) => (light[update] = req.body[update]));
//       await light.save();
//       res.send(light);
//     }catch(err){
//         res.send('Error')
//     }

// });

// router.put('/light/:id', function(req, res){
//   try{
//     res.send({type: 'PUT'});
//   }catch(err){
//     res.send('Error')
// }
router.put('/light/:id', function(req, res, next){
  Light.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
      Light.findOne({_id: req.params.id}).then(function(light){
          res.send(light);
      });
  }).catch(next);
});
// });

module.exports = router;