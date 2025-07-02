# proyectoNodejs
* npm init --yes para iniciar //inicaliza el proyecto
1. instalar dependencias
* npm i express : este nos permite definir rutas, manjeas solicitudes http
* npm i nodemon: automatiza el reinicio del servidor cada vez que se guardan cambios
* npm i mongodb: Es una base de datos noSQL (no relacional)
* npm i mongoose: Es un hijo de mondodb -> proporciona una internfaz mas amigable para la base de datos
* npm i fs-extra: Amplialas funcionalidad es modulo de nodeJs (trabaja con archivos)
* npm i bcryptjs: encripta la contraseña o hashear
* npm i jsonwebtoken: Nos permite implementar autentificacion y autorizacion de las aplicaciones web.
* npm i cors: nos permite interactuar con diferentes aplicacione entre si
* npm i dotenv: sirve como varible de entorno para guardar cosas sensibles 
* npm i multer: Se usa para manejear el enviar de archivos por medio de formularios html.
* npm i morgan: Es un middleware de Express y registra las solicitudes http.

2. sobre la misma linea de mi package.json voy a crear una carpeta que sera nuestro "src" --> dentro creo tres archivos index, conexion y servidor.

- npm run dev