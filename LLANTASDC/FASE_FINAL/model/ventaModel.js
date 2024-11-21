const mongoose=require('mongoose');

const productoSchema=new mongoose.Schema({
    numorden:{
       type: Number,
       require: true
   },
   fechacompra:{
       type: Date,
       require: true
   },
   totalcompra:{
       type: Number,
       require: true
   },
   metodoPago:{
    type: String
    }

});

module.exports=mongoose.model('producto',productoSchema);

