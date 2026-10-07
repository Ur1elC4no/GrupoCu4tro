/**
 * Función principal que realiza la operación matemática básica entre dos números.
 * @param {number} num1 - Primer número
 * @param {number} num2 - Segundo número
 * @param {string} operador - Símbolo de la operación ('+', '-', '*', '/', '%')
 * @returns {number|null} Resultado de la operación o null en caso de error/símbolo no válido.
 */
function calcular(num1, num2, operador) {
  // Validar que los dos primeros argumentos sean números válidos
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
    return null;
  }

  // Evaluar la operación según el símbolo
  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      // Control de error: División por cero
      if (num2 === 0) return null;
      return num1 / num2;
    case '%':
      // Control de error: Módulo por cero
      if (num2 === 0) return null;
      return num1 % num2;
    default:
      // Operador no reconocido
      return null;
  }
}

// Conexión básica con la interfaz para probar en el navegador
function ejecutarCalculadora() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operador').value;

  const resultado = calcular(n1, n2, op);
  const campoResultado = document.getElementById('resultado');

  if (resultado === null) {
    campoResultado.textContent = 'Error (Indeterminado / Datos no válidos)';
    campoResultado.style.color = '#e74c3c';
  } else {
    campoResultado.textContent = `Resultado: ${resultado}`;
    campoResultado.style.color = '#2ecc71';
  }
}