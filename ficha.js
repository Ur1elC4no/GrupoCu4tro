const fichaReto = {
  equipo: "GrupoCu4tro",
  integrantes: [
    "Leonardo Rodríguez",
    "Javier Alexander",
    "Jairo Antonio",
    "Clara Paulina",
    "Oscar Uriel"
  ],
  reto: "Calculadora con manejo de errores (3 argumentos)",
  
  conceptosExplicados: [
    {
      concepto: "Estructura de control switch",
      referencia: "calculadora.js",
      uso: "Permite seleccionar el bloque de código a ejecutar según el operador recibido (+, -, *, /, %)."
    },
    {
      concepto: "Validación de tipos y NaN",
      referencia: "calculadora.js",
      uso: "Asegura que los dos primeros parámetros sean numéricos usando typeof e isNaN."
    },
    {
      concepto: "Manejo de casos borde (División por cero)",
      referencia: "calculadora.js",
      uso: "Evalúa si el divisor es 0 para devolver 'null' y prevenir indeterminado matemático."
    }
  ],

  resena: "El desarrollo del reto nos permitió repasar condicionales y control de errores en JavaScript, garantizando que una función responda de manera segura ante escenarios de datos inválidos.",

  conclusion: {
    decision: "Optamos por utilizar switch en lugar de múltiples condicionales if-else para mejorar la legibilidad.",
    dificultadResuelta: "Manejar la devolución explícita de null en operaciones indebidas como 3 / 0 sin romper la ejecución.",
    limitacion: "La calculadora solo soporta operaciones binarias simples de dos operandos.",
    aprendizajeGit: "Reforzamos el flujo de trabajo colaborativo en ramas separadas y resolución de conflictos."
  }
};