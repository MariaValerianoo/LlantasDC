const mongoose=require('mongoose');

const contenedorSchema=new mongoose.Schema({
    idContenedor:{
       type: int,
       require: true
   },
   FacturaContenedor:{
       type: String,
       require: true
   },
   naviera:{
       type: String,
       require: true
   },
   agenteAduanera:{
    type: String,
    require: true
    },
    fechaLlegada:{
        type: date,
        require: true
    }

});

module.exports=mongoose.model('contenedor',contenedorSchema);