//conexion a la base de datos
const express=require('express');
const mongoose=require('mongoose');

const app= express();
const  PORT=3000;

//Crear el cuerpo de las peticiones que voy a hacer (Middleware)
app.use(express.json());

//conexión BD
mongoose.connect('mongodb://localhost:27017/MongoDB',{
    useNewURLParser : true,
    useUnifiedTopology: true
}).then(()=>console.log('Se conecto a MongoDB'))
.catch(err=>console.log('No se conecto a BD error:', err));

//Iniciar el servidor 
app.listen(PORT,()=>{
    console.log('Servidor ejecutandose sobre el puerto:,${PORT}');
});