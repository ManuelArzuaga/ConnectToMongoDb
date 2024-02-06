const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Test2")
.then(()=>{
  console.log("conectado")
})
.catch((err)=>{
  console.log(err)
})

let esquema = mongoose.Schema({
  name:String,
  age:Number
})
const model = mongoose.model("Test2",esquema); //se usa para crear, eliminar,actualizar y leer

const newesquema = new model({ //se usa para crear un elemento
  name:"esquema",
  age:1
})

newesquema.save()
.then(()=>{
  console.log("guardado")
})
.catch((err) =>{
  console.log(err)
})

model.deleteOne({age:1}) //elimina por edad
.then(()=>{
  console.log("eliminado")
})
.catch((err)=>{
  console.log(err)
})

model.findOneAndUpdate({name:"esquema"},{age:2}) //actualiza la edad buscando por el nombre, primera parte quien actualizar segunda parte que se actualiza
.then(()=>{
  console.log("actualizado")
})
.catch((err)=>{
  console.log(err)
})

model.deleteOne({name:"esquema"}) //elimina por nombre
.then(()=>{
  console.log("eliminado")
})
.catch((err)=>{
  console.log(err);
})