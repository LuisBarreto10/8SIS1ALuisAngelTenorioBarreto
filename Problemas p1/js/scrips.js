//Problema 1
function calcularInteres() {
  var capitalInicial = parseFloat(document.getElementById("capital-inicial").value);
  
  if (capitalInicial >= 0) {
    var interes = capitalInicial * 0.02;
    var dineroMes = capitalInicial + interes;
    document.getElementById("dinero-mes").textContent = dineroMes.toFixed(2);
  } else {
    alert("Por favor, ingrese un número positivo para el capital inicial.");
  }
}

function borrarResultadoInteres() {
  document.getElementById("dinero-mes").textContent = "";
}

//Problema 2
function calcularComisiones() {
  var sueldoBase = parseFloat(document.getElementById("sueldo-base").value);
  var venta1 = parseFloat(document.getElementById("venta1").value);
  var venta2 = parseFloat(document.getElementById("venta2").value);
  var venta3 = parseFloat(document.getElementById("venta3").value);

  if (sueldoBase >= 0 && venta1 >= 0 && venta2 >= 0 && venta3 >= 0) {
    var comisiones = (venta1 + venta2 + venta3) * 0.1;
    var ingresosTotales = sueldoBase + comisiones;
    document.getElementById("comision-total").textContent = comisiones.toFixed(2);
    document.getElementById("ingresos-totales").textContent = ingresosTotales.toFixed(2);
  } else {
    alert("Por favor, ingrese números positivos para los campos correspondientes.");
  }
}

function borrarResultadoComisiones() {
  document.getElementById("comision-total").textContent = "";
  document.getElementById("ingresos-totales").textContent = "";
}

//Problema 3
function calcularDescuento() {
  var montoCompra = parseFloat(document.getElementById("monto-compra").value);

  if (montoCompra >= 0) {
    var descuento = montoCompra * 0.15;
    var totalPagar = montoCompra - descuento;
    document.getElementById("total-pagar").textContent = totalPagar.toFixed(2);
  } else {
    alert("Por favor, ingrese un número positivo para el monto de compra.");
  }
}

function borrarResultadoDescuento() {
  document.getElementById("total-pagar").textContent = "";
}

//Problema 4
function calcularCalificacionFinal() {
  var parcial1 = parseFloat(document.getElementById("parcial1").value);
  var parcial2 = parseFloat(document.getElementById("parcial2").value);
  var parcial3 = parseFloat(document.getElementById("parcial3").value);
  var examenFinal = parseFloat(document.getElementById("examen-final").value);
  var trabajoFinal = parseFloat(document.getElementById("trabajo-final").value);

  if (parcial1 >= 0 && parcial2 >= 0 && parcial3 >= 0 && examenFinal >= 0 && trabajoFinal >= 0) {
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    var calificacionFinal = promedioParciales * 0.55 + examenFinal * 0.3 + trabajoFinal * 0.15;

    document.getElementById("calificacion-final").textContent = calificacionFinal.toFixed(2);
  } else {
    alert("Por favor, ingrese números positivos para los campos correspondientes.");
  }
}

function borrarResultadoCalificacionFinal() {
  document.getElementById("calificacion-final").textContent = "";
}

//Problema 5
function calcularPorcentajeGenero() {
  var totalHombres = parseFloat(document.getElementById("total-hombres").value);
  var totalMujeres = parseFloat(document.getElementById("total-mujeres").value);

  if (totalHombres >= 0 && totalMujeres >= 0) {
    var totalEstudiantes = totalHombres + totalMujeres;
    var porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
    var porcentajeMujeres = (totalMujeres / totalEstudiantes) * 100;

    document.getElementById("porcentaje-hombres").textContent = porcentajeHombres.toFixed(2);
    document.getElementById("porcentaje-mujeres").textContent = porcentajeMujeres.toFixed(2);
  } else {
    alert("Por favor, ingrese números positivos para los campos correspondientes.");
  }
}

function borrarResultadoPorcentajeGenero() {
  document.getElementById("porcentaje-hombres").textContent = "";
  document.getElementById("porcentaje-mujeres").textContent = "";
}

//Problema 6
function calcularEdad() {
  var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  var fechaActual = new Date();
  var fechaNacimientoValida = new Date(fechaNacimiento);

  if (fechaNacimientoValida > fechaActual) {
    alert("La fecha de nacimiento no puede ser mayor a la fecha actual.");
  } else {
    var edad = fechaActual.getFullYear() - fechaNacimientoValida.getFullYear();
    document.getElementById("edad").textContent = edad;
  }
}

function borrarResultadoEdad() {
  document.getElementById("edad").textContent = "";
}

function borrarDatos() {
  var inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
