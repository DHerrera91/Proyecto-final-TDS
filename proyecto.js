do{
//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

//Recargos extras
var propiedades_recargo = 0.35
var ingresos_recargo = 0.05


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0






//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if(edad >= 18){

var casado = prompt("¿Está casado actualmente?",'Responda si/no')
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?",'Responda si/no')
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if(hijos.toUpperCase() == 'SI'){
  cantidad_hijos = prompt('¿Cuantos hijos tiene?','Ingrese solamente números')
}
/**
 * 1. convierta la cantidad de hijos a numero
 */var cantidad_hijos_numero = 0
 cantidad_hijos_numero = parseInt(cantidad_hijos)

//Comprobamos la cantidad de propiedades y las convertimos a numero
var cantidad_propiedades
cantidad_propiedades = prompt('¿Cuantas propiedades posee?','Ingrese solamente números')
cantidad_propiedades_numero = parseInt(cantidad_propiedades)

//Comprobamos el salario devengado por el asegurado
var salario
salario = prompt('¿Cuanto es su ingreso?')
salario_numero = parseInt(salario)

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){

  //Calculamos el recargo en base a la edad
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango
else if (edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}else if (edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}
/** 
 * 2. Recargo por la edad del conyuge
 */
 if (edad_conyuge_numero>= 18 && edad_conyuge_numero<25){
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
 }else if (edad_conyuge_numero>= 25 && edad_conyuge_numero<50){
recargo = precio_base * casado_25
recargo_total = recargo_total + recargo
 }else if(edad_conyuge_numero>= 50){
recargo = precio_base * casado_50
recargo_total = recargo_total + recargo
 }

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
 recargo =  cantidad_hijos_numero * precio_base * hijos_recargo
 recargo_total = recargo_total + recargo

 /**
  * Recargo por el numero de propiedades
  */
recargo = propiedades_recargo * cantidad_propiedades_numero * precio_base
recargo_total = recargo_total + recargo

/**
 * Recargo por los ingresos
 */
 recargo = ingresos_recargo * salario_numero
 recargo_total = recargo_total + recargo


precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
}else(alert('Para cotizar debe ser mayor de edad'))

var pregunta
pregunta = prompt('Para finalizar escriba la palabra Salir')
}
while('SALIR' != pregunta.toUpperCase())

