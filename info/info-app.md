Documentación del back-end robusto

# Paquetes de instalación

```npm i bcryptjs``` hash de las contraseñas
```npm i cors``` conexiones a nuestro back
```npm i dotenv```  (ya instalado)
```npm i express``` (ya instalado)
```npm i express-validator``` validaciones de la info entrante
```npm i jsonwebtoken``` creacion de token de auth
```npm i mongoose``` posibilita la conexión a mongo db atlas

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
