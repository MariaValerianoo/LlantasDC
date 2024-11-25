//Modelo para definir la manipulacion deo midulo de usuarios
import mongoose, { Schema } from "mongoose";

const usuarioSchema=new mongoose.Schema({
   idUsuario:{
       type: Number,
       require: true
   },
   nombreUsuario:{
       type: String,
       require: true
   },
   apellidoUsuario:{
       type: String,
       require: true
   },
   telefonoUsuario:{
    type: Number,
    require: true
    },
    correoUsuario:{
        type: String,
        require: true
    }

});
export const usuarioModel = new mongoose.model('Usuario', usuarioSchema)

