//Ejercico 1 - Banco
function calcularGanancias() {
    var capital = parseFloat(document.getElementById('capital').value);
    var tasaInteres = 2 / 100; // 2% mensual
  
    var ganancias = capital * tasaInteres;
    var total = capital + ganancias;
  
    document.getElementById('ganancias').textContent = ganancias.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
  }

  // Ejercicio 2 - Vendedor
function calcularComisiones() {
    var sueldoBase = parseFloat(document.getElementById('sueldo-base').value);
    var venta1 = parseFloat(document.getElementById('venta1').value);
    var venta2 = parseFloat(document.getElementById('venta2').value);
    var venta3 = parseFloat(document.getElementById('venta3').value);
    var comision = (venta1 + venta2 + venta3) * 0.1; // 10% de comisión
  
    var comisionTotal = sueldoBase + comision;
    var ingresosTotales = sueldoBase + comision;
  
    document.getElementById('comision-total').textContent = comisionTotal.toFixed(2);
    document.getElementById('ingresos-totales').textContent = ingresosTotales.toFixed(2);
  }
  
  // Ejercicio 3 - Descuento
  function calcularDescuento() {
    var montoCompra = parseFloat(document.getElementById('monto-compra').value);
    var descuento = montoCompra * 0.15; // 15% de descuento
  
    var totalPagar = montoCompra - descuento;
  
    document.getElementById('total-pagar').textContent = totalPagar.toFixed(2);
  }
  
  // Ejercicio 4 - Calificación
  function calcularCalificacionFinal() {
    var parcial1 = parseFloat(document.getElementById('parcial1').value);
    var parcial2 = parseFloat(document.getElementById('parcial2').value);
    var parcial3 = parseFloat(document.getElementById('parcial3').value);
    var examenFinal = parseFloat(document.getElementById('examen-final').value);
    var trabajoFinal = parseFloat(document.getElementById('trabajo-final').value);
  
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    var calificacionFinal = promedioParciales * 0.55 + examenFinal * 0.30 + trabajoFinal * 0.15;
  
    document.getElementById('calificacion-final').textContent = calificacionFinal.toFixed(2);
  }
  
  // Ejercicio 5 - Porcentaje de Género
  function calcularPorcentajeGenero() {
    var totalEstudiantes = parseFloat(document.getElementById('total-estudiantes').value);
    var hombres = parseFloat(document.getElementById('hombres').value);
    var mujeres = parseFloat(document.getElementById('mujeres').value);
  
    var porcentajeHombres = (hombres / totalEstudiantes) * 100;
    var porcentajeMujeres = (mujeres / totalEstudiantes) * 100;
  
    document.getElementById('porcentaje-hombres').textContent = porcentajeHombres.toFixed(2) + '%';
    document.getElementById('porcentaje-mujeres').textContent = porcentajeMujeres.toFixed(2) + '%';
  }
  
  // Ejercicio 6 - Edad
  function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  
    document.getElementById('edad').textContent = edad;
  }
  