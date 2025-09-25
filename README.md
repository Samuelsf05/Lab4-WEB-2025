# Labo 4:
## ¿Qué ocurre en cada caso con los operadores y por qué JS lo permite?
- En JavaScript, el operador '+' sirve tanto para sumar números como para concatenar cadenas. Por eso:
- - 2 + 2 = 4 (suma normal).
- - "2" + 2 = "22" (convierte el número a texto y los une).
- - "hola" + 5 = "hola5".
- Esto ocurre porque JavaScript convierte automáticamente los valores al tipo más conveniente (coerción de tipos).

## ¿El comportamiento de los flujos de control es similar a otros lenguajes?
- Sí, es bastante parecido. En if/else, JavaScript evalúa una condición booleana y ejecuta un bloque de código si es verdadera, y otro si es falsa. 
Funciona igual que en lenguajes como Java, C o Python, solo que en JS se permite mayor flexibilidad en los tipos (por ejemplo, considera 0, "" o null como false).