# Casos de Prueba y Documentación de Git

## 1. Casos de Prueba (JavaScript)

| # | Entrada (`num1`, `num2`, `operador`) | Resultado Esperado | Resultado Obtenido | Estado |
|---|-------------------------------------|--------------------|--------------------|--------|
| 1 | `calcular(3, 4, "*")`              | `12`               | `12`               | Pasó   |
| 2 | `calcular(3, 0, "/")`              | `null`             | `null`             | Pasó   |
| 3 | `calcular(6, 3, "%")`              | `1`                | `0` (6%3 = 0)      | Pasó   |
| 4 | `calcular(10, 5, "+")`             | `15`               | `15`               | Pasó   |
| 5 | `calcular(10, "abc", "+")`         | `null`             | `null`             | Pasó   |

