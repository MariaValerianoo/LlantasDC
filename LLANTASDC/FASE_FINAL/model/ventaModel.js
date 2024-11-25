import mongoose, { Schema } from "mongoose";
import {productoModel} from "./productoModel.js"
import { contenedorModel } from "./contenedorModel.js";

const ventaSchema=new mongoose.Schema({
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
    },
    cantidad:{
        typer:Number
    }

});
export const ventaModel = new mongoose.model('Venta', ventaSchema)

