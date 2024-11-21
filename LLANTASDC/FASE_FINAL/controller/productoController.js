import { productoModel } from "../model/productoModel.js";

export const obtenerProductos = async (pet, resp) => {
  try {
    let productos = await productoModel.find();
    resp.status(200).json("Productos", { productos });
  } catch (error) {
    console.log(error);
    resp.status(500).json("error", { error: error.message });
  }
}

export const crearProducto = async (req, res) => {
  try {
    const producto = new productoModel(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const encontrarProductosPorPrecio = async (pet, resp) => {
  try {
    const { precioMinimo } = pet.body;

    if (!precioMinimo || isNaN(precioMinimo)) {
      return resp.status(400).json("error", { message: 'El parámetro precioMinimo es requerido y debe ser un número válido' });
    }

    const productos = await productoModel.find({ precio: { $gt: precioMinimo } });

    if (!productos.length) {
      return resp.status(404).json("error", { message: 'No se encontraron productos con el precio mínimo especificado' });
    }

    resp.status(200).json("productos", { productos });
  } catch (error) {
    console.error('Error al buscar productos:', error);
    resp.status(500).json("error", { error: error.message });
  }
}

export const actPrecioProducto = async (pet, resp) => {
  try {
    const { nombre, precio } = pet.body;

    const productoActualizado = await productoModel.findOneAndUpdate(
      { name: nombre },
      { $set: { precio } },
      { new: true }
    );

    if (!productoActualizado) {
      return resp.status(404).json("error", { message: "Producto no encontrado" });
    }

    resp.status(200).json("producto", { producto: productoActualizado });
  } catch (error) {
    console.log(error);
    resp.status(400).json("error", { error: error.message });
  }
}

export const actProductosMayores = async (pet, resp) => {
  try {
    const { precioMinimo } = pet.body;

    await productoModel.updateMany(
      { precio: { $gte: precioMinimo } },
      { $set: { active: true } }
    );

    resp.status(200).json("success", { message: 'Productos mayores al precio mínimo activados' });
  } catch (error) {
    console.log(error);
    resp.status(500).json("error", { error: error.message });
  }
}

export const eliminarProductoNom = async (pet, resp) => {
  try {
    const resultado = await productoModel.deleteOne({ name: pet.params.name });

    if (resultado.deletedCount === 0) {
      return resp.status(404).json("error", { message: "Producto no encontrado" });
    }

    resp.status(200).json("success", { message: "Producto eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    resp.status(500).json("error", { error: error.message });
  }
}

export const eliminarProductosMenores = async (pet, resp) => {
  try {
    const { precioMaximo } = pet.body;

    await productoModel.deleteMany({ precio: { $lt: precioMaximo } });

    resp.status(200).json("success", { message: 'Productos eliminados exitosamente' });
  } catch (error) {
    console.log(error);
    resp.status(500).json("error", { error: error.message });
  }
}
