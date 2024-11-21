const mongoose=require('mongoose');

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
        type: int,
        require: true
    },nombreContacto:{
        type: String,
        require: true
    }

});

module.exports=mongoose.model('cliente',clienteSchema);