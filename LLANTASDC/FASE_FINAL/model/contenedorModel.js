import mongoose, { Schema } from "mongoose";

const contenedorSchema=new mongoose.Schema({
    idContenedor:{
       type: Number,
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
        type: String,
        require: true
    }

});
export const contenedorModel = new mongoose.model('Contenedor', contenedorSchema)
