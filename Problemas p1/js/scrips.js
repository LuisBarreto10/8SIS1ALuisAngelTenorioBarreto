function calcularInteres() {
  var capitalInicial = parseFloat(document.getElementById("capital-inicial").value);
  
  if (capitalInicial >= 0 && capitalInicial <= 1000000) {
    var interes = capitalInicial * 0.02;
    var dineroMes = capitalInicial + interes;
    document.getElementById("dinero-mes").textContent = dineroMes.toFixed(2);
  } else {
    alert("Por favor, ingrese un número positivo menor o igual a 1,000,000 para el capital inicial.");
    alert("Tampoco se aceptan números negativos");
  }
}

function calcularComisiones() {
  var sueldoBase = parseFloat(document.getElementById("sueldo-base").value);
  var venta1 = parseFloat(document.getElementById("venta1").value);
  var venta2 = parseFloat(document.getElementById("venta2").value);
  var venta3 = parseFloat(document.getElementById("venta3").value);

  if (sueldoBase >= 0 && sueldoBase <= 1000000 && venta1 >= 0 && venta1 <= 1000000 && venta2 >= 0 && venta2 <= 1000000 && venta3 >= 0 && venta3 <= 1000000) {
    var comisiones = (venta1 + venta2 + venta3) * 0.1;
    var ingresosTotales = sueldoBase + comisiones;
    document.getElementById("comision-total").textContent = comisiones.toFixed(2);
    document.getElementById("ingresos-totales").textContent = ingresosTotales.toFixed(2);
  } else {
    alert("Por favor, ingrese números positivos menores o iguales a 1,000,000 para los campos correspondientes.");
  }
}

function calcularDescuento() {
  var montoCompra = parseFloat(document.getElementById("monto-compra").value);

  if (montoCompra >= 0 && montoCompra <= 1000000) {
    var descuento = montoCompra * 0.15;
    var totalPagar = montoCompra - descuento;
    document.getElementById("total-pagar").textContent = totalPagar.toFixed(2);
  } else {
    alert("Por favor, ingrese un número positivo menor o igual a 1,000,000 para el monto de compra.");
  }
}

function calcularCalificacionFinal() {
  var parcial1 = parseFloat(document.getElementById("parcial1").value);
  var parcial2 = parseFloat(document.getElementById("parcial2").value);
  var parcial3 = parseFloat(document.getElementById("parcial3").value);
  var examenFinal = parseFloat(document.getElementById("examen-final").value);
  var trabajoFinal = parseFloat(document.getElementById("trabajo-final").value);

  if (parcial1 >= 0 && parcial1 <= 10 && parcial2 >= 0 && parcial2 <= 10 && parcial3 >= 0 && parcial3 <= 10 && examenFinal >= 0 && examenFinal <= 10 && trabajoFinal >= 0 && trabajoFinal <= 10) {
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    var calificacionFinal = promedioParciales * 0.55 + examenFinal * 0.3 + trabajoFinal * 0.15;

    document.getElementById("calificacion-final").textContent = calificacionFinal.toFixed(2);
  } else {
    alert("Por favor, ingrese números positivos entre 0 y 10 para los campos correspondientes.");
  }
}

function calcularPorcentajeGenero() {
  var totalHombres = parseFloat(document.getElementById("total-hombres").value);
  var totalMujeres = parseFloat(document.getElementById("total-mujeres").value);

  if (totalHombres >= 0 && totalHombres <= 100 && totalMujeres >= 0 && totalMujeres <= 100) {
    var totalEstudiantes = totalHombres + totalMujeres;
    var porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
    var porcentajeMujeres = (totalMujeres / totalEstudiantes) * 100;

    document.getElementById("porcentaje-hombres").textContent = porcentajeHombres.toFixed(2);
    document.getElementById("porcentaje-mujeres").textContent = porcentajeMujeres.toFixed(2);
  } else {
    alert("Por favor, ingrese números positivos menores o iguales a 100 para los campos correspondientes.");
  }
}

function calcularEdad() {
  var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  var fechaActual = new Date();
  var fechaNacimientoValida = new Date(fechaNacimiento);

  if (fechaNacimientoValida > fechaActual) {
    alert("La fecha de nacimiento no puede ser mayor a la fecha actual.");
  } else if (fechaNacimientoValida.getMonth() == 1 && fechaNacimientoValida.getDate() > 28 && !esAnioBisiesto(fechaNacimientoValida.getFullYear())) {
    alert("El día ingresado no es válido para el mes de febrero en un año no bisiesto.");
  } else {
    var edad = fechaActual.getFullYear() - fechaNacimientoValida.getFullYear();
    document.getElementById("edad").textContent = edad;
  }
}

function esAnioBisiesto(anio) {
  return (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;
}

function borrarResultadoInteres() {
  document.getElementById("dinero-mes").textContent = "";
}

function borrarResultadoComisiones() {
  document.getElementById("comision-total").textContent = "";
  document.getElementById("ingresos-totales").textContent = "";
}

function borrarResultadoDescuento() {
  document.getElementById("total-pagar").textContent = "";
}

function borrarResultadoCalificacionFinal() {
  document.getElementById("calificacion-final").textContent = "";
}

function borrarResultadoPorcentajeGenero() {
  document.getElementById("porcentaje-hombres").textContent = "";
  document.getElementById("porcentaje-mujeres").textContent = "";
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
