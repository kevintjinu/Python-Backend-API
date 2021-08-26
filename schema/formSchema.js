const mongoose = require("mongoose");

const schema = mongoose.Schema({
  
  
    lighting: {
      type: Number,
     
    },
    brightness: {
      type: Number,
      
    },
    
});

module.exports = mongoose.model("Light", schema);
