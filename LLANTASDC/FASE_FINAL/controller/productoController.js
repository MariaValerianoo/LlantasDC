import { productoModel } from "../model/productoModel.js";

//Funcion obtener datos
export const obtenerProducto = async (peticion, respuesta) => {
  try {
      let producto = await productoModel.find()
      respuesta.status(200).json("index", { producto })
  } catch (error) {
      console.log(error);
  }
}

//Funcion crear
export const crearProducto = async (peticion, respuesta) => {
  try {
      const producto = peticion.body;

      if (!Array.isArray(producto)) {
      return respuesta.status(400).json("error", { error: 'La solicitud debe ser una lista de productos' });
      }
      await userModel.insertMany(producto);
      const todosLosProductos = await productoModel.find();
      res.status(201).json("index", { producto : todosLosProductos });

  } catch (error) {
      console.log(error);
  }
}

//Obetener todas las dimensiones y precios de los productos 
export const obtenerDimensionesPrecio = async (peticion, respuesta) => {
  try {
      const productos = await productoModel.find(
          {},{ dimensionProducto: 1, precio: 1, _id: 0 } );
      respuesta.status(200).json(productos);
  } catch (error) {
      console.log(error);
  }
}

//buscar productos con cantidad menor 
export const obtenerProductosPorCantidad = async (peticion, respuesta) => {
  try {
      const { numero } = peticion.params;
      if (!numero ) {
          return respuesta.status(400).json({ message: "Debe proporcionar un número" });
      }
      const productos = await productoModel.find({ cantidad: { $lt: parseInt(numero) }});
      respuesta.status(200).json(productos);

  } catch (error) {
      console.log(error);
  }
};

//buscar producto por dimension 
export const buscarProductoDimension = async(peticion,respuesta) => {
  try {
      const dimension = await productoModel.findOne({dimensionProducto: peticion.params.dimension});
      if(dimension){
          respuesta.status(200).json(dimension);
      }
  } catch (error) {
      console.log(error);
  }
}

//buscar producto por marca 
export const buscarProductoMarca = async(peticion,respuesta) => {
  try {
      const marca = await productoModel.findOne({marca: peticion.params.marca});
      if(marca){
          respuesta.status(200).json(marca);
      }
  } catch (error) {
      console.log(error);
  }
}

//buscar producto por diseño 
export const buscarProductoDiseño = async(peticion,respuesta) => {
  try {
      const diseño = await productoModel.findOne({diseño: peticion.params.diseño});
      if(diseño){
          respuesta.status(200).json(diseño);
      }
  } catch (error) {
      console.log(error);
  }
}

//buscar por precio beetwen 
export const buscarProductosPrecio = async (peticion, respuesta) => {
  try {
      const { precioMin, precioMax } = peticion.params; 

      if (!precioMin || !precioMax ) {
          return respuesta.status(400).json({ message: "Debe proporcionar valores de precio minimo y precio maximo" });
      }
      const productos = await productoModel.find({ precio: { $gte: parseInt(precioMin), $lte: parseInt(precioMax)}});
      respuesta.status(200).json(productos);

  } catch (error) {
      console.log(error);
  }
};

//MODIFICACIONES 
//modificar precio por referencia
export const precioReferencia = async(peticion,respuesta)=>{
  try {
      const referenciaProducto = peticion.params;
      const nuevoprecio= peticion.body;

      if(!referenciaProducto || !nuevoprecio){
          return respuesta.satus(400).json({message:"Se necesitan referencia de producto y precio"});
      }
      const precioActualizado= await productoModel.findByIdAndUpdate({referenciaProducto},{precio:nuevoprecio},{new:true});

      if(!precioActualizado){
          return respuesta.satus(400).json({message:"producto no encontrado"});
      }
      respuesta.status(200).json({message:"Precio actualizado"}); 
  } catch (error) {
      console.log(error);
  } 
}

//modificar cantidad por referencia 
export const cantidadReferencia = async(peticion,respuesta)=>{
  try {
      const referenciaProducto = peticion.params;
      const nuevacantidad= peticion.body;

      if(!referenciaProducto || !nuevacantidad){
          return respuesta.satus(400).json({message:"Se necesitan referencia de producto y precio"});
      }
      const cantidadActualizada= await productoModel.findByIdAndUpdate({referenciaProducto},{cantidad:nuevacantidad},{new:true});

      if(!cantidadActualizada){
          return respuesta.satus(400).json({message:"producto no encontrado"});
      }
      respuesta.status(200).json({message:"Cantidad actualizada"}); 
  } catch (error) {
      console.log(error);
  } 
}

//modificar dimension por referencia 
export const dimensionReferencia = async(peticion,respuesta)=>{
  try {
      const referenciaProducto = peticion.params;
      const nuevadimension= peticion.body;

      if(!referenciaProducto || !nuevadimension){
          return respuesta.satus(400).json({message:"Se necesitan referencia de producto ydimension"});
      }
      const dimensionActualizada= await productoModel.findByIdAndUpdate({referenciaProducto},{dimension:nuevadimension},{new:true});

      if(!dimensionActualizada){
          return respuesta.satus(400).json({message:"producto no encontrado"});
      }
      respuesta.status(200).json({message:"Dimension actualizada"}); 
  } catch (error) {
      console.log(error);
  } 
}

//modificar diseño por referencia 
export const diseñoReferencia = async(peticion,respuesta)=>{
  try {
      const referenciaProducto = peticion.params;
      const nuevodiseño= peticion.body;

      if(!referenciaProducto || !nuevodiseño){
          return respuesta.satus(400).json({message:"Se necesitan referencia de producto y diseño"});
      }
      const diseñoActualizado= await productoModel.findByIdAndUpdate({referenciaProducto},{diseño:nuevodiseño},{new:true});

      if(!diseñoActualizado){
          return respuesta.satus(400).json({message:"producto no encontrado"});
      }
      respuesta.status(200).json({message:"Diseño actualizado"}); 
  } catch (error) {
      console.log(error);
  } 
}

//modificar marca por referencia 
export const marcaReferencia = async(peticion,respuesta)=>{
  try {
      const referenciaProducto = peticion.params;
      const nuevamarca= peticion.body;

      if(!referenciaProducto || !nuevamarca){
          return respuesta.satus(400).json({message:"Se necesitan referencia de producto y marca"});
      }
      const marcaActualizada= await productoModel.findByIdAndUpdate({referenciaProducto},{marca:nuevamarca},{new:true});

      if(!marcaActualizada){
          return respuesta.satus(400).json({message:"producto no encontrado"});
      }
      respuesta.status(200).json({message:"Marca actualizada"}); 
  } catch (error) {
      console.log(error);
  } 
}