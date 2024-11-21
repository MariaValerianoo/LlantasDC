const mongoose=require('mongoose');

const productoSchema=new mongoose.Schema({
    referenciaProducto:{
       type: String,
       require: true
   },
   dimensionProducto:{
       type: String,
       require: true
   },
   diseñoProducto:{
       type: String,
       require: true
   },
   marca:{
    type: String
    },precio:{
        type: float,
        require: true
    },cantidad:{
        type: int,
        require: true
    }

});

module.exports=mongoose.model('producto',productoSchema);

