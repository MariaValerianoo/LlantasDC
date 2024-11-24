import { usuarioModel } from "../model/usuarioModel.js";

//Funcion obtener datos
export const obtenerUsuarios = async (peticion, respuesta) => {
  try {
      let usuarios = await userModel.find()
      respuesta.status(200).json("index", { usuarios })
  } catch (error) {
      console.log(error);
  }
}

//Funcion crear usuarios
export const crearUsuarios= async (peticion, respuesta) => {
  try {
      const usuarios = peticion.body;

      if (!Array.isArray(usuarios)) {
      return respuesta.status(400).render("error", { error: 'La solicitud debe ser una lista de usuarios' });
      }
      await userModel.insertMany(usuarios);
      const todosLosUsuarios = await userModel.find();
      res.status(201).json("index", { usuarios: todosLosUsuarios });

  } catch (error) {
      console.log(error);
  }
}
//Funcion buscar usuario por nombre
export const buscarUsuarioNombre = async (peticion,respuesta) => {
  try {
      const usuario = await userModel.findOne({ nombre: peticion.params.nombre });
      if (usuario) {
        respuesta.status(200).json(usuario);
      } else {
        respuesta.status(404).json({ message: "No se pudo encontrar al usuario " });
      }
  } catch (error) {
      console.log(error);
  }
}
//Buscar usuario por correo
export const buscarUsuarioCorreo = async (peticion,respuesta) => {
  try {
      const correo = await userModel.findOne({correo: peticion.params.correo});
      if(correo){
          respuesta.status(200).json(correo);
      } else {
          respuesta.status(404).json({message: "No se encontro al correo" })
      }
  } catch (error) {
      console.log(error);
  }
}
//Buscar usuario por id 
export const buscarUsuarioId = async(peticion,respuesta) => {
  try {
      const idUsuario = await userModel.findOne({idUsuario: peticion.params.idUsuario});
      if (idUsuario){
          respuesta.status(200).json(idUsuario);
      } else {
          respuesta.status(404).json({message:"No se encontro el id"});
      }
  } catch (error) {
      console.log(error);
  }
}

//Buscar usuario por telefono
export const buscarUsuarioTelefono = async(peticion,respuesta) => {
  try {
      const numero = peticion.params;
      const usuarioEncontrado = await userModel.findMany({telefono: { $regex: numero, $options: 'i' }});
      
      if(usuarioEncontrado){
          respuesta.status(200).json(usuarioEncontrado);
      } else {
          respuesta.status(404).json({message: "Usuario no encontrado"});
      }
  } catch (error) {
      console.log(error);
  }
}

//Ordenar usuarios de forma ASC
export const ordenarUsuarioASC = async (peticion,respuesta) => {
  try {
      const apellidos = await userModel.aggregate([
          {
              $project: { apellidos: 1, primeraletra: { $substr: ["$apellidos", 0, 1] } }
          },
          {
              $sort: { primeraletra: 1 }
          }
      ]);
      if (apellidos.length == 0){
          respuesta.status(404).json({message: "No se encontraron apellidos"});
      } else {
          respuesta.status(200).json(apellidos);
      }
  } catch (error) {
      console.log(error);
  }
}

//Funcion de contar usuarios
export const contarUsuarios = async(peticion,respuesta) => {
  try {
      const cantidadUsuarios = await userModel.countDocuments();
      if(cantidadUsuarios){
          respuesta.status(200).json(cantidadUsuarios);
      }
  } catch (error) {
      console.log(error);
  }
}

// cambiar nombre de usuario por id
export const nombreUsuarioId = async(peticion,respuesta)=>{
  try {
      const id = peticion.params;
      const nuevonombre= peticion.body;

      if(!id || !nuevonombre){
          return respuesta.satus(400).json({message:"Se necesitan id y nombre"});
      }
      const nombreActualizado= await userModel.findByIdAndUpdate({id},{nombre:nuevonombre},{new:true});

      if(!nombreActualizado){
          return respuesta.satus(400).json({message:"Usuario no encontrado"});
      }
      respuesta.status(200).json({message:"Nombre actualizado"});
  
  } catch (error) {
      console.log(error);
  }
}

// cambiar correo de usuario por id
export const correoUsuarioId = async (peticion,respuesta)=>{
  try {
      const id = peticion.params;
      const nuevocorreo= peticion.body;

      if(!id || !nuevocorreo){
          return respuesta.status(400).json({message:"se necesitan id y correo"});
      }
      const correoActualizado = await userModel.findByIdAndUpdate({id},{correo:nuevocorreo},{new:true});

      if(!correoActualizado){
          return respuesta.satus(400),json({message:"Usuario no encontrado"});
      }
      respuesta.status(200).json({message:"Correo actualizado"});

  } catch (error) {
      console.log(error);
  }
}

// cambiar telefono de usuario por id
export const telefonoUsuarioId = async (peticion,respuesta)=>{
  try {
      const id = peticion.params;
      const nuevotelefono= peticion.body;

      if(!id || !nuevotelefono){
          return respuesta.status(400).json({message:"se necesitan id y telefono"});
      }
      const telefonoActualizado= await userModel.findByIdAndUpdate({id},{telefono:nuevotelefono},{new:true});

      if(!telefonoActualizado){
          return respuesta.status(400).json({message:"Usuario no encontrado"})
      }
      respuesta.status(200).json({message:"Telefono actualizado"});
  } catch (error) {
    console.log(error);  
  }
}

// cambiar apellido de usuario por id
export const cambiarApellidoId = async (peticion,respuesta)=>{
  try {
      const id = peticion.params;
      const nuevoapellido= peticion.body;

      if(!id || !nuevoapellido){
          return respuesta.status(400).json({message:"se necesitan id y apellido"});
      }
      const apellidoActualizado= await userModel.findByIdAndUpdate({id},{apellido:nuevoapellido},{new:true});

      if(!apellidoActualizado){
          return respuesta.status(400).json({message:"Usuario no encontrado"})
      }
      respuesta.status(200).json({message:"Apellido actualizado"});
  } catch (error) {
    console.log(error);  
  }
}