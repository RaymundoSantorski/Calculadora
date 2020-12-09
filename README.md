# Calculadora de consola

## Configuraciones
- Recuerda instalar las dependencias
```
        npm install
```

- El primer comando debe ser la operación a realizar
Después se pueden introducir tantos valores como se desee

- En cualquier punto de la operación se puede agregar el comando **last**, que retorna el ultimo valor calculado y se puede usar cuantas veces se necesite

- Solo puede realizar un tipo de operacion por cada vez que se ejecute el programa

## Último guardado

Puedes ver el ultimo valor calculado con el siguiente comando:
```
        node app saved
```

Por ejemplo:
```
        > node app saved
        20
```

## Suma
```
        node app sumar <valor> <valor> ...
```

Por ejemplo:
```
        > node app sumar last 30 50
        100
```

## Resta
```
        node app restar <valor> <valor> ...
```

Por ejemplo:
```
        > node app restar last 10
        90
```

## Multiplicación
```
        node app multiplicar <valor> <valor> ...
```

Por ejemplo:
```
        > node app multiplicar last 2 10
        1800
```

## División
```
        node app dividir <valor> <valor> ...
```

Pro ejemplo:
```
        > node app dividir last last
        1
```

## Potencia
```
        node app elevar <valor> <valor> ...
        
```

Por ejemplo:
```
        > node app elevar 2 2
        4
```
```
        > node app elevar last 4
        256
```