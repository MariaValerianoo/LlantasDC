//Modelo para definir la manipulacion deo midulo de usuarios
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
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

module.exports=mongoose.model('user',userSchema);

