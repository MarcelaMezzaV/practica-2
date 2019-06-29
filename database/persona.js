const mongoose = require("./connect");
var PERSONACHEMA = {
  nombre:String,
  ci:String,
  edad:Number,
  fechaRegistro:Date
}
const PERSONA = mongoose.model("Persona",PERSONACHEMA);
module.exports = PERSONA;
