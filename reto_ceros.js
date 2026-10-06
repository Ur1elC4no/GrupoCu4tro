// Inserta un 0 después de cada número par, sin modificar la lista original
function insertar(lista) {
  const resultado = [];

  lista.forEach(function (item) {
    resultado.push(item);
    if (item % 2 === 0) {
      resultado.push(0);
    }
  });

  return resultado;
}

// Convierte el texto escrito en una lista de enteros
// Devuelve null si hay algún valor que no sea entero
function leerLista(texto) {
  const limpio = texto.trim();
  if (limpio === "") return [];

  const partes = limpio.split(",");
  const lista = [];

  for (const p of partes) {
    const valor = p.trim();
    if (!/^-?\d+$/.test(valor)) return null;
    lista.push(Number(valor));
  }
  return lista;
}

const formulario = document.getElementById("formulario");
const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const lista = leerLista(entrada.value);

  if (lista === null) {
    resultado.innerHTML =
      '<p class="error">Solo se permiten números enteros separados por comas. Ejemplo: 1,4,7,8</p>';
    return;
  }

  const conCeros = insertar(lista);
  const pares = lista.filter(function (n) { return n % 2 === 0; });
  const suma = lista.reduce(function (a, b) { return a + b; }, 0);

  resultado.innerHTML = `
    <h3>=== INICIANDO PRUEBAS DEL SISTEMA JAVASCRIPT ===</h3>
    <p><strong>Entrada:</strong> [${lista}]<br>
       <strong>Resultado insertando ceros:</strong> [${conCeros}]</p>
    <p><strong>Números pares encontrados:</strong> [${pares}]<br>
       <strong>Suma total de los elementos:</strong> ${suma}</p>
    <h3>=== PRUEBAS FINALIZADAS CON ÉXITO ===</h3>
  `;
});
