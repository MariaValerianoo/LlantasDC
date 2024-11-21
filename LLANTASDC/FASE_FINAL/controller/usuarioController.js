import { usuarioModel } from "../model/usuarioModel.js";

export const obtenerDatos = async (pet, resp) => {
    try {
        let usuarios = await usuarioModel.find()
        resp.status(200).render("index", { usuarios })
    } catch (error) {
        console.log(error);
    }
}
export const crearUsuario = async (pet, resp) => {
    try {
      const usuarios = pet.body;
  
      if (!Array.isArray(usuarios)) {
        return resp.status(400).render("error", { error: 'El cuerpo de la solicitud debe ser un array de usuarios' });
      }
  
      // Inserción de los usuarios en la base de datos
      await usuarioModel.insertMany(usuarios);
  
      const todosLosUsuarios = await usuarioModel.find();

      resp.status(201).json("index", { usuarios: todosLosUsuarios });
    } catch (error) {
      console.log(error);
      resp.status(500).json("error", { error: error.message });
    }
  }

  export const encontrarUsuarioNom = async (pet, resp) => {
    try {
        const usuario = await usuarioModel.findOne({ name: pet.params.name });
        if (usuario) {
          resp.status(200).json(usuario);
        } else {
          resp.status(404).json({ message: "Usuario no encontrado" });
        }
      } catch (error) {
        console.log(error);
      }
}

export const encontrarUsuarioMayores = async (pet, resp) => {
    try {
      const { edadMinima } = pet.query;
  
      if (!edadMinima || isNaN(edadMinima)) {
        return resp.status(400).json({ message: 'El parámetro edadMinima es requerido y debe ser un número válido' });
      }
  
      const edad = parseInt(edadMinima, 10);
  
      const usuarios = await usuarioModel.find({ age: { $gte: edad } });
  
      if (!usuarios.length) {
        return resp.status(404).json({ message: 'No se encontraron usuarios mayores o iguales a la edad especificada' });
      }
  
      resp.status(200).json(usuarios);
    } catch (error) {
      console.error('Error al buscar usuarios:', error);
      resp.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
}  


export const actEdadUsuario = async (pet, resp) => {
    try {
      const { nombre, edad } = pet.body;
  
      const usuarioActualizado = await usuarioModel.findOneAndUpdate(
        { name: nombre },
        { $set: { age: edad } },
        { new: true }
      );
  
      if (!usuarioActualizado) {
        return resp.status(404).json("error", { message: "Usuario no encontrado" });
      }
  
      // Renderizar la vista de éxito con el usuario actualizado
      resp.status(200).json("usuario", { usuario: usuarioActualizado });
    } catch (error) {
    
      console.log(error);
      resp.status(400).json("error", { error: error.message });
    }
  };
  

export const actUsuariosMayores = async (pet, resp) => {
    try {
        const { edadMinima } = pet.body;
        await usuarioModel.updateMany(
          { age: { $gte: edadMinima } },
          { $set: { active: true } }
        );
        resp.status(200).json({ message: 'Usuarios mayores de edad mínima activados' });
      } catch (error) {
        resp.status(500).json({ error: error.message });
      }
}

export const eliminarUsuarioNom = async (pet, resp) => {
    try {
      const resultado = await usuarioModel.deleteOne({ name: pet.params.name });
  
      if (resultado.deletedCount === 0) {
        return resp.status(404).json({ message: "Usuario no encontrado" });
      }
  
      resp.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
      console.log(error);
      resp.status(500).json({ error: error.message });
    }
  };
  

export const eliminarUsuariosMenores = async (pet, resp) => {
  try {
    const { edadMaxima } = pet.body;
    
    
    await usuarioModel.deleteMany({ age: { $lt: edadMaxima } });
    
    
    resp.status(200).json({ message: 'Usuarios Eliminados' });
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
}
