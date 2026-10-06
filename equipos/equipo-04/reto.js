// Calcula el mínimo común múltiplo de dos enteros positivos.
// Empieza en el mayor y suma múltiplos de ese mayor hasta que
// el otro número también lo divida.
function mcm(a, b) {
  let mul = Math.max(a, b);
  const inc = mul;
  while (mul % a !== 0 || mul % b !== 0) {
    mul += inc;
  }
  return mul;
}

// Valida que el valor sea un entero positivo.
function esEnteroPositivo(n) {
  return Number.isInteger(n) && n > 0;
}

const btn = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);

  if (!esEnteroPositivo(a) || !esEnteroPositivo(b)) {
    resultado.textContent = "Ingresa dos enteros positivos.";
    resultado.classList.add("error");
    return;
  }

  resultado.classList.remove("error");
  resultado.textContent = `mcm(${a}, ${b}) = ${mcm(a, b)}`;
});