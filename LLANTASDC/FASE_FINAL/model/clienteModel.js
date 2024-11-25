import mongoose, { Schema } from "mongoose";

const clienteSchema=new mongoose.Schema({
    RutCliente:{
       type: String,
       require: true
   },
   NombreTercero:{
       type: String,
       require: true
   },
   TipoIdentificacion:{
       type: String,
       require: true
   },
   dirreccionCliente:{
    type: String
    },ciudadCliente:{
        type: String,
        require: true
    },TelefonoCliente:{
        type: Number,
        require: true
    },nombreContacto:{
        type: String,
        require: true
    }

});

export const clienteModel = new mongoose.model('Cliente', clienteSchema)