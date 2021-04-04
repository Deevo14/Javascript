
var datos =
{
    "dni": 123455678,
    "nacimiento": 1990,
    "ingreso": 2016,
    "plus_antigüedad": 0.1,
    "productividad": 10,
    "sueldo_base": 1500, 
}

function Calcular(datos) {
    var fecha = new Date()
    var longevidad = (parseInt(fecha.getFullYear()) - parseInt(datos.ingreso))
    var edad = parseInt(fecha.getFullYear()) - parseInt(datos.nacimiento)
    var salario = (datos.sueldo_base * (longevidad + datos.productividad)) * datos.plus_antigüedad
    document.getElementById('resultado').innerHTML = "La edad del usuario es " + edad + " años y tiene un sueldo de " + salario + " €"
}
