Documentación del back-end robusto

# Paquetes de instalación

1. ```npm i bcryptjs``` hash de las contraseñas
2. ```npm i cors``` conexiones a nuestro back
3. ```npm i dotenv```  (ya instalado)
4. ```npm i express``` (ya instalado)
5. ```npm i express-validator``` validaciones de la info entrante
6. ```npm i jsonwebtoken``` creacion de token de auth
7. ```npm i mongoose``` posibilita la conexión a mongo db atlas

# Crear database

Se genera una org y luego en generar database, free tier y en database access creamos un user que sera el encargado de conectar el back-end a la base de datos.

Procedemos a darle a conectar, habilitamos conecciones de todas las partes y creamos el string de autenticación que se conforma de username y password del usuario recientemente creado. Quito el test del final del url entregado.

Luego en mongo compass nos conectamos a la base de datos de mongo atlas

# Conexion de mongo con el back

Mirar config.js en database

# Creación de modelos 

Mirar archivos:

1. usuario.js
2. mensaje.js

# Definición de end points

Mirar en eel archivo auth.js

# Creacion de controllers

Funciones que manejan el flujo del router

# Creación de middlewares

Sirven para serializar la entrada del request a JSON y eso poderlo trabajar

# Express validators

Para prevenir que llegue a controladores si no tiene los requisitos deseados en el body

El middleware check no se encarga de bloquear la funcionalidad del controlador, lo que hace es que en req acumula todas las posibles validaciones para ser trabajadas desde el controlador.

# Craer Usuario

Al crear usuario en el controlador, verificar que este haya quedado en la coleccion deseada y no en test como esta por defecto

Coleccion test( se crea por defecto)
```DB_CNN_STRING=mongodb+srv://chat_main_user:nj9ztsbIM4d1Cngi@cluster0.p5lbz.mongodb.net```

Coleccion chat db
```DB_CNN_STRING=mongodb+srv://chat_main_user:nj9ztsbIM4d1Cngi@cluster0.p5lbz.mongodb.net/chatDB```

# Encriptar contraseña 

Hash de una sola via, esot hace que inclusive para nostros sea imposible reconstruirla.

# Generación jwt 

Validez de la sesión del usuario. 

HEADER / PAYLOAD/ FIRMA 

Lo creo en el momento en que se crea un usuario y cuando hago el login

# Genero middlewares para verificar JWT

Si quiero inhabilitar los token creados simplemente cambio la public key