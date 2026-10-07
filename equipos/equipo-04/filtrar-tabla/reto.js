const input = document.getElementById("search-input");
const tabla = document.getElementById("data-table");
const mensaje = document.getElementById("sin-resultados");

// Filtra las filas del cuerpo de la tabla según el texto escrito.
// Busca en cualquier columna y no distingue mayúsculas de minúsculas.
function filterTable() {
  const filtro = input.value.trim().toLowerCase();
  const filas = tabla.querySelectorAll("tbody tr");
  let visibles = 0;

  filas.forEach((fila) => {
    const celdas = fila.getElementsByTagName("td");
    let mostrar = false;

    for (let j = 0; j < celdas.length; j++) {
      if (celdas[j].textContent.toLowerCase().includes(filtro)) {
        mostrar = true;
        break;
      }
    }

    fila.style.display = mostrar ? "" : "none";
    if (mostrar) visibles++;
  });

  // Avisa cuando ninguna fila coincide
  mensaje.hidden = visibles > 0;
}

// "input" se dispara con cada cambio, incluso al pegar texto o borrar
input.addEventListener("input", filterTable);