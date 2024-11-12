import { userModel } from "../model/userModel.js";

export const obtenerDatos = async (peticion, respuesta) => {
    try {
        let usuarios = await userModel.find()
        respuesta.status(200).json("index", { usuarios })
    } catch (error) {
        console.log(error);
    }
}
export const crearUsuarios = async (peticion, respuesta) => {
    try {
        const usuarios = peticion.body;

        if (!Array.isArray(usuarios)) {
        return respuesta.status(400).render("error", { error: 'La solicitud debe ser una lista de usuarios' });
        }
        await userModel.insertMany(usuarios);
        const todosLosUsuarios = await userModel.find();
        res.status(201).render("index", { usuarios: todosLosUsuarios });

    } catch (error) {
        console.log(error);
    }
}

export const encontrarUsuarioNombre = async (peticion, respuesta)=> {
    try {
        const usuario = await userModel.findOne({ name: peticion.params.name });
        if (usuario) {
          respuesta.status(200).json(usuario);
        } else {
          res.status(404).json({ message: "No se pudo encontrar al usuario " });
        }
    } catch (error) {
        console.log(error);
    }
}

export const encontrarUsuarioMayor = async (peticion, respuesta) =>{
    try {
        const {edadMinima} = peticion.query;

        if(!edadMinima){
            return respuesta.status(400).json({ message: 'El parámetro edadMinima es requerido y debe ser un número válido' });
        }
    
        const edad = parseInt(edadMinima, 10);
        const usuarios = await userModel.find({ age: { $gte: edad } });
  
        if (!usuarios.length) {
          return respuesta.status(404).json({ message: 'No se encontraron usuarios mayores o iguales a la edad pedida' });
        }
        res.status(200).json(usuarios);
        
    } catch (error) {
        console.log(error);
    }
}

export const cambiarEdadUsuario = async (peticion, respuesta) =>{
    try {
        const { nombre, edad } = peticion.body;

    const usuarioActualizado = await userModel.findOneAndUpdate(
      { name: nombre },
      { $set: { age: edad } },
    );

    if (!usuarioActualizado) {
      return respuesta.status(404).json("error", { message: "Usuario no encontrado" });
    }

    respuesta.status(200).json("usuario", { usuario: usuarioActualizado });

    } catch (error) {
        console.log(error);
    }
}

export const activoUsuarioEdad= async (peticion,respuesta)=>{
    try {
        const { edadMinima } = peticion.body;
        await userModel.updateMany(
          { age: { $gte: edadMinima } },
          { $set: { active: true } }
        );
        respuesta.status(200).json({ message: 'Usuarios mayores de edad mínima activados' });
      } catch (error) {
        console.log(error);
      }    
}

export const EliminarUsuarioNombre= async (peticion, respuesta)=>{
    try {
        const usuario = await userModel.deleteOne({ name: peticion.params.name });
        if (usuario) {
          respuesta.status(200).json(usuario);
        } else {
          res.status(404).json({ message: "No se pudo encontrar al usuario " });
        }
    } catch (error) {
        console.log(error); 
    }
}

export const eliminarUsuarioEdad = async (peticion, respuesta) => {
    try {
      const { edadMaxima } = peticion.body;
      await userModel.deleteMany({ age: { $lt: edadMaxima } });
      respuesta.status(200).json({ message: 'Usuario Eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }