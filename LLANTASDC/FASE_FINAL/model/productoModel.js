import mongoose, { Schema } from "mongoose";

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
        type: Number,
        require: true
    },cantidad:{
        type: Number,
        require: true
    }

});
export const productoModel = new mongoose.model('Producto', productoSchema)

