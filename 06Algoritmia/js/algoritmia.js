// Problema 1
// Problema 1
function problema1() {
    const input = document.getElementById('p1-input').value;
    const caracteresPermitidos = /^[a-zA-Z\s]+$/;
  
    if (!caracteresPermitidos.test(input)) {
      alert('Ingresa solo palabras separadas por espacios');
      return;
    }
  
    const palabras = input.split(' ');
    const palabrasInvertidas = palabras.reverse();
    const resultado = palabrasInvertidas.join(' ');
    document.getElementById('p1-output').textContent = resultado;
  }
  
  // Asignar los controladores de eventos a los botones
  document.getElementById('p1-button').addEventListener('click', problema1);

  
  // Problema 2
  function problema2() {
    // Obtener los campos de texto
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;
  
    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
  
    // Verificar caracteres permitidos
    const caracteresPermitidos = /^[0-9]+$/;
    if (!caracteresPermitidos.test(p2_x1) || !caracteresPermitidos.test(p2_x2) || !caracteresPermitidos.test(p2_x3) ||
        !caracteresPermitidos.test(p2_x4) || !caracteresPermitidos.test(p2_x5) || !caracteresPermitidos.test(p2_y1) ||
        !caracteresPermitidos.test(p2_y2) || !caracteresPermitidos.test(p2_y3) || !caracteresPermitidos.test(p2_y4) ||
        !caracteresPermitidos.test(p2_y5)) {
      alert('Ingresa solo números enteros en los campos');
      return;
    }
  
    // Construir los vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
  
    // Ordenar los vectores
    v1 = v1.sort(function(a, b) {
      return b - a;
    });
  
    v2 = v2.sort(function(a, b) {
      return b - a;
    });
  
    // Calcular el producto escalar
    var p2_producto = 0;
    for (var i = 0; i < v1.length; i++) {
      p2_producto += v1[i] * v2[i];
    }
    document.querySelector('#p2-output').textContent =
      'Producto Escalar Mínimo: ' + p2_producto;
  }
  
  // Problema 3
  function problema3() {
    const input = document.getElementById('p3-input').value;
    const palabras = input.split(',');
    let palabraMasLarga = '';
    let maxCaracteresUnicos = 0;
  
    palabras.forEach((palabra) => {
      const caracteresPermitidos = /^[A-Z]+$/;
      if (!caracteresPermitidos.test(palabra.trim())) {
        alert('Ingresa solo letras mayúsculas separadas por comas');
        return;
      }
  
      const caracteresUnicos = new Set(palabra.toUpperCase().split('')).size;
      if (caracteresUnicos > maxCaracteresUnicos) {
        maxCaracteresUnicos = caracteresUnicos;
        palabraMasLarga = palabra.trim();
      }
    });
  
    document.getElementById('p3-output').textContent =
      `La palabra con más caracteres únicos es: ${palabraMasLarga}`;
  }
  
  // Asignar los controladores de eventos a los botones
  document.getElementById('p1-button').addEventListener('click', problema1);
  document.getElementById('p2-button').addEventListener('click', problema2);
  document.getElementById('p3-button').addEventListener('click', problema3);  