# 1. Node JS Básico

## 1.1. Introducción a Node
- Node.js es un entorno de ejecución de código JavaScript en el lado del servidor.
- Permite crear aplicaciones de servidor, manipular archivos, interactuar con bases de datos y responder a solicitudes de clientes.

## 1.2. Características de Node
### 1.2.1. JavaScript en el lado del servidor
- Permite utilizar el mismo lenguaje en el frontend y el backend.

### 1.2.2. Modelo de E/S sin bloqueo y basado en eventos
- Permite manejar múltiples solicitudes simultáneamente sin bloquear el flujo de ejecución.
- Ideal para aplicaciones de alto rendimiento y en tiempo real.

### 1.2.3. Arquitectura orientada a módulos
- Utiliza el sistema de módulos de CommonJS para la reutilización de código y la creación de aplicaciones modularizadas.

### 1.2.4. Amplia comunidad y ecosistema
- Cuenta con una gran comunidad de desarrolladores y un ecosistema vibrante.
- Hay una amplia gama de bibliotecas, frameworks y herramientas disponibles en el registro de paquetes npm.

### 1.2.5. Escalabilidad
- Capacidad para manejar grandes cantidades de solicitudes concurrentes de manera eficiente.

### 1.2.6. Orientado a eventos
- Se basa en un patrón de programación orientado a eventos para una respuesta rápida a los eventos.

## 1.3. Cómo funciona Node
1. Inicialización del entorno de ejecución.
2. Event loop y manejo de eventos.
3. Gestión de solicitudes.
4. Operaciones de E/S no bloqueantes.
5. Devoluciones de llamada (callbacks).
6. Módulos y npm.

## 1.4. Configuración
### 1.4.1. ¿Qué es Nvm?
- NVM (Node Version Manager) es una herramienta para administrar múltiples versiones de Node.js.

### 1.4.2. Instalación de NVM en Windows
1. Descargar el instalador desde el repositorio oficial de "nvm-windows" en GitHub.
2. Verificar la instalación ejecutando el siguiente comando: `nvm --version`.

### 1.4.3. Comandos básicos de NVM (Windows)
- `nvm arch [32|64]`
- `nvm check`
- `nvm current`
- `nvm install <versión> [arch]`
- `nvm list available`
- `nvm on`
- `nvm off`
- `nvm proxy [url]`
- `nvm uninstall <versión>`
- `nvm use <versión> [arch]`
- `nvm use <arch>`
- `nvm root <ruta>`
- `nvm version`

#### 1.4.4. Instalación de Node usando NVM en Windows
Instalar la versión 18.16.0 de Node.js con NVM para Windows.

#### 1.4.5. Instalación de NVM en Linux
Instalar Curl y luego seguir los pasos para instalar Node.js 

# Resumen: Diferencias de Apis Globales JavaScript en Node.js

## 1. global y window

En JavaScript, la API global varía según el entorno en el que se ejecute el código. En un navegador web, se utiliza la palabra clave "window" como el objeto global, representando la ventana del navegador y proporcionando una interfaz para interactuar con ella. En Node.js, no existe el objeto "window"; en su lugar, se utiliza el objeto "global" como el objeto global para variables, funciones y objetos en la aplicación.

Ejemplo práctico en Node.js:
```js
// Node.js
global.miVariable = 'Hola, soy una variable global';
console.log(miVariable); // Salida: Hola, soy una variable global

En el navegador:

<!-- En el navegador -->
<script>
  window.miVariable = 'Hola, soy una variable global';
  console.log(miVariable); // Salida: Hola, soy una variable global
</script>

## 1.  process

En Node.js, el objeto "process" es otro objeto global que proporciona información y control sobre el proceso actual en ejecución. Es una instancia de la clase EventEmitter, lo que significa que puede emitir y escuchar eventos.

Ejemplo práctico en Node.js:

// Node.js
process.on('exit', (code) => {
  console.log(`El proceso ha finalizado con el código de salida: ${code}`);
});

// Finalizar el proceso con un código de salida 0
process.exit(0);
// Salida: El proceso ha finalizado con el código de salida: 0


El objeto "process" también proporciona propiedades útiles, como "env", que contiene las variables de entorno del sistema.

Ejemplo práctico en Node.js:

// Node.js
console.log(process.env.NODE_ENV); // Obtener el valor de la variable de entorno NODE_ENV

Recuerda que estos ejemplos son para Node.js, y si deseas ejecutarlos en un navegador web, deberás adaptar el código a su entorno específico. Este resumen proporciona una visión general de las diferencias clave entre las APIs globales en JavaScript en el navegador y en Node.js, y cómo se pueden usar en un entorno práctico.

# Resumen: Sistema de módulos en Node.js

El sistema de módulos de Node.js es un componente esencial que permite la modularidad y reutilización de código en aplicaciones y proyectos desarrollados con Node.js. Se basa en el concepto de módulos, que son unidades de código independientes que encapsulan funcionalidades específicas. Cada módulo tiene su propio ámbito y puede exportar funciones, objetos o variables para ser utilizados por otros módulos.

## 1.7.1. CommonJS

CommonJS es una especificación de módulos para JavaScript que define un formato estándar para la organización y carga de módulos en entornos de ejecución, como Node.js. Sus características principales son:

- Síncrono: El sistema de módulos CommonJS utiliza una carga síncrona, lo que permite que los módulos dependientes estén disponibles de inmediato.
- Carga bajo demanda: Los módulos se cargan solo cuando son requeridos mediante la función `require()`, evitando la carga innecesaria de módulos no utilizados.
- Exportación e importación de módulos: CommonJS proporciona una forma estándar de exportar e importar funcionalidades entre módulos utilizando `module.exports` y `require()`.
- Resolución de rutas: CommonJS ofrece una resolución de rutas relativas para cargar módulos locales.

## 1.7.1.1. require JSON

En CommonJS, es posible importar archivos JSON directamente como módulos. Cuando se importa un archivo JSON, se interpreta automáticamente como un objeto JavaScript.

Ejemplo:
```js
const datos = require('./datos.json');
console.log(datos.propiedad); // Acceder a propiedades del objeto JSON
```

### 1.7.1.2. require fs
El módulo fs (File System) en Node.js proporciona una amplia gama de métodos para interactuar con el sistema de archivos del sistema operativo.

Ejemplo práctico:

```js
const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
  } else {
    console.log('Contenido del archivo:', data);
  }
});

```

### 1.7.1.3. require http

El módulo http en Node.js proporciona una API para realizar solicitudes HTTP a través de HTTPS.

Ejemplo práctico:

```js
const https = require('https');

https.get('https://www.ejemplo.com', (res) => {
  console.log('Código de estado:', res.statusCode);
});
```
## NPM (Node Package Manager)
NPM es el administrador de paquetes predeterminado para Node.js. Permite instalar paquetes, gestionar dependencias, actualizar paquetes y publicar tus propios paquetes en el registro de NPM.

Ejemplo práctico (Instalación de un paquete):

```bash
npm install paquete
```

### 1.7.2.1. ES Modules
ES Modules son una forma estándar de organizar y compartir código en JavaScript, introducida en el estándar ECMAScript 2015 (ES6). A diferencia de CommonJS, los módulos ES son una especificación oficial del lenguaje JavaScript y funcionan tanto en navegadores web como en entornos de servidor.

Ejercicio práctico:
Crea un programa que convierta una cantidad en dólares a euros y libras utilizando módulos ES y el administrador de paquetes NPM para organizar el código en diferentes módulos.

Recuerda utilizar los tipos de cambio actuales y formatear los resultados adecuadamente.

```js
// En el archivo "conversor.js"
export const convertirDolaresAEuros = (cantidadDolares) => {
  // Lógica de conversión a euros
};

export const convertirDolaresALibras = (cantidadDolares) => {
  // Lógica de conversión a libras
};

// En el archivo "index.js"
import { convertirDolaresAEuros, convertirDolaresALibras } from './conversor.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la cantidad en dólares: ', (cantidadDolares) => {
  const euros = convertirDolaresAEuros(cantidadDolares);
  const libras = convertirDolaresALibras(cantidadDolares);

  console.log(`${cantidadDolares}
```
# 1.8. ¿Qué es Nodemon?

Nodemon es una herramienta de desarrollo para aplicaciones Node.js que facilita la tarea de reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos del proyecto. En lugar de tener que reiniciar manualmente la aplicación cada vez que se realizan cambios en el código, Nodemon lo hace de forma automática, lo que agiliza el proceso de desarrollo y mejora la productividad.

Cuando se ejecuta una aplicación con Nodemon, este monitorea los archivos del proyecto en busca de cambios. Si se detecta algún cambio en un archivo, Nodemon reinicia automáticamente la aplicación, lo que significa que los cambios realizados en el código se reflejan de inmediato sin tener que detener y reiniciar manualmente la ejecución de la aplicación.

Nodemon también proporciona opciones adicionales, como la capacidad de especificar qué archivos se deben monitorear y reiniciar, ignorar ciertos archivos o directorios, y ejecutar scripts personalizados antes o después de cada reinicio de la aplicación.

## 1.8.1. Características

- Reinicio automático: Nodemon monitorea los archivos del proyecto en busca de cambios y reinicia automáticamente la aplicación cuando se detecta un cambio. Esto evita tener que reiniciar manualmente la aplicación cada vez que se realicen modificaciones en el código.
- Soporte amplio: Nodemon es compatible con una amplia variedad de proyectos y frameworks basados en Node.js. Puede utilizarse en proyectos simples, así como en aplicaciones más complejas y basadas en frameworks como Express, Koa, Hapi, entre otros.
- Detalles de reinicio controlados: Nodemon permite controlar los detalles del reinicio automático de la aplicación. Puedes especificar qué archivos o directorios deben ser monitoreados y reiniciados, y también puedes excluir archivos o directorios específicos del monitoreo.
- Integración con scripts personalizados: Nodemon proporciona la capacidad de ejecutar scripts personalizados antes o después de cada reinicio de la aplicación. Esto permite realizar tareas adicionales, como limpiar la caché, ejecutar pruebas automatizadas o ejecutar comandos de compilación, para que se realicen automáticamente en cada reinicio.
- Modo silencioso: Nodemon tiene un modo silencioso que reduce la cantidad de información de registro que se muestra en la consola. Esto puede ser útil para mantener un flujo de trabajo limpio y sin distracciones durante el desarrollo.
- Configuración flexible: Nodemon proporciona opciones de configuración flexibles que permiten ajustar su comportamiento según las necesidades del proyecto. Puedes especificar opciones como la extensión de archivos a monitorear, el tiempo de espera antes de reiniciar, la exclusión de archivos o directorios, y más.
- Amplia comunidad y soporte activo: Nodemon tiene una comunidad activa de desarrolladores y una amplia base de usuarios. Esto significa que hay una gran cantidad de recursos y soporte disponibles en línea, lo que facilita obtener ayuda y encontrar soluciones a problemas comunes.

## 1.8.2. Instalación para 'Windows y Linux'

Para instalar Nodemon en tu proyecto, sigue los siguientes pasos:

1. Abre una terminal o línea de comandos en la carpeta raíz de tu proyecto.

2. Si aún no tienes un archivo `package.json`, puedes crear uno ejecutando el siguiente comando:

```bash
npm init -y
```

Esto creará un archivo `package.json` con los valores predeterminados.

3. A continuación, instala Nodemon como una dependencia de desarrollo ejecutando el siguiente comando:

```bash
npm i -E -D nodemon
```

4. Una vez completada la instalación, verifica que Nodemon se haya agregado correctamente a tu archivo `package.json` y que se haya instalado en la carpeta "node_modules".

5. Ahora, puedes utilizar Nodemon en tu proyecto agregando un script en tu archivo `package.json`. Abre el archivo `package.json` en un editor de texto y agrega el siguiente código dentro del bloque "scripts":

```json
"scripts": {
"dev": "nodemon app.js"
}
```
En este ejemplo, se crea un script llamado "dev" que ejecuta Nodemon y pasa "app.js" como archivo principal de tu aplicación. Puedes cambiar "app.js" por el nombre del archivo que deseas ejecutar con Nodemon.

6. Guarda los cambios en tu archivo `package.json`.

7. Ahora puedes iniciar tu aplicación ejecutando el siguiente comando en la terminal:

```bash
npm run dev
```
Esto ejecutará tu aplicación con Nodemon, lo que permitirá que se reinicie automáticamente cuando se detecten cambios en los archivos del proyecto.

Recuerda que, para que Nodemon funcione correctamente, debes asegurarte de tener un archivo principal de la aplicación, como "app.js", que contenga el código del servidor que deseas ejecutar.

Con estos pasos, deberías tener Nodemon instalado en tu proyecto y tu servidor HTTP listo para funcionar. Si necesitas más información o tienes alguna pregunta adicional, no dudes en consultarme.

# Introducción a Express.js - Un framework de aplicaciones web para Node.js

## ¿Qué es Express.js?
Express.js es un popular framework de aplicaciones web para Node.js. Proporciona una capa adicional de abstracción sobre el módulo http incorporado de Node.js, lo que facilita la creación de aplicaciones web y APIs de manera más eficiente y con menos código.

## Características principales de Express.js
- **Enrutamiento:** Express proporciona un enrutador flexible que permite definir rutas y manejar las solicitudes HTTP correspondientes. Esto permite establecer la lógica de controladores para diferentes rutas y métodos HTTP.

- **Middleware:** Express utiliza un modelo de middleware, donde se pueden agregar funciones intermediarias (middleware) a la cadena de procesamiento de solicitudes. Esto permite realizar acciones como autenticación, compresión, registro y manipulación de solicitudes y respuestas antes de que lleguen a su controlador final.

- **Gestión de vistas:** Express facilita el renderizado de vistas HTML utilizando cualquier motor de plantillas (como EJS, Pug o Handlebars) para generar contenido dinámico y enviarlo al cliente.

- **Integración con servicios y recursos externos:** Express proporciona una forma sencilla de interactuar con servicios y recursos externos, como bases de datos, servicios de almacenamiento en la nube y APIs de terceros, a través de bibliotecas y módulos adicionales.

## Instalación de Express.js en Windows y Linux
Para instalar Express.js en tu proyecto, sigue estos pasos:

1. Abre una ventana de terminal o línea de comandos.
2. Ejecuta el siguiente comando para instalar Express: `npm i -E express`
3. Una vez que la instalación se haya completado, podrás utilizar Express en tu proyecto. Puedes importarlo en tus archivos de JavaScript para comenzar a construir tu aplicación web con Express.

```javascript
// Ejemplo de inicio de servidor con Express y definición de una ruta "/campus"

const express = require('express');
const expressApp = express();

expressApp.get('/campus', (req, res) => {
  res.send("Hello developer");
});

const serverConfig = {
  host: 'localhost',
  port: 3000
};

expressApp.listen(serverConfig.port, serverConfig.host, () => {
  console.log(`Server is running at http://${serverConfig.host}:${serverConfig.port}`);
});
```

## Obtener parámetros y encabezados en Express.js
En Express, puedes obtener parámetros y encabezados enviados en una solicitud HTTP usando req.params y req.headers respectivamente.

```javascript
// Ejemplo para obtener parámetros y encabezados de una solicitud HTTP en Express

expressApp.get('/campus/:idCamper', (req, res) => {
  const obj = {
    "Datos de la URL": req.params,   // Obtiene los parámetros enviados en la URL
    "Encabezados": req.headers      // Obtiene los encabezados de la solicitud
  };
  
  console.log(obj);   // Muestra los datos en la consola del servidor
  
  res.send(obj);      // Envía los datos de vuelta al cliente
});
```

## Middleware en Express.js
Los middlewares en Express son funciones que se utilizan para procesar las solicitudes HTTP o las respuestas antes de que lleguen a su destino final. Pueden realizar tareas como modificar objetos de solicitud o respuesta, realizar validaciones, autenticar usuarios, etc.

```javascript
// Ejemplo de uso de middleware en Express.js

// Middleware que se ejecuta antes de manejar cualquier ruta
expressApp.use((req, res, next) => {
  console.log(req);    // Imprime la solicitud en la consola del servidor
  next();              // Llama a next() para continuar con el siguiente middleware o ruta
});

// Ruta que captura parámetro de nombre en una solicitud POST
expressApp.post('/ruta', (req, res) => {
  const nombre = req.params.nombre;
  // Lógica para procesar la solicitud POST
  res.send(`Hola, ${nombre}!`);
});
```
## Router en Express.js
Un router en Express es una forma de organizar y gestionar las rutas de una aplicación web de manera modular. Permite agrupar rutas relacionadas y sus controladores en un lugar específico, mejorando la estructura y la legibilidad del código.

```javascript
// Ejemplo de uso de router en Express.js

// Importación del enrutador desde un archivo campus.js
const appCamper = require('./campus');

// Redirección de solicitudes al enrutador appCamper
expressApp.use('/campus', appCamper);
```
En el ejemplo anterior, appCamper es un enrutador que contiene las definiciones de las rutas relacionadas con el campus. Todas las solicitudes que comiencen con /campus serán redirigidas al enrutador appCamper, lo que permite organizar las rutas relacionadas en un lugar específico.

Estos son solo algunos aspectos básicos de Express.js. Con esta información, podrás empezar a construir aplicaciones web y APIs utilizando el poder y la flexibilidad de Express.js en Node.js.

## Que son las variables de entorno ‘dotenv’

Las variables de entorno en Node.js son variables específicas del entorno en el que se ejecuta una aplicación. Son valores que se pueden configurar externamente al código y se utilizan para almacenar información sensible, configuraciones personalizadas u otros datos relevantes para la aplicación. En Node.js, las variables de entorno se pueden acceder utilizando el objeto `process.env`. Este objeto proporciona acceso a todas las variables de entorno definidas en el sistema operativo donde se está ejecutando la aplicación.

Más información: [dotenv en GitHub](https://github.com/motdotla/dotenv)

### 2.2.1. Características
- Configuración de la aplicación: Puedes utilizar variables de entorno para almacenar valores de configuración, como credenciales de bases de datos, claves de API, URL de servicios externos, etc. Esto permite mantener esta información sensible separada del código fuente y facilita la configuración de la aplicación en diferentes entornos (desarrollo, producción, pruebas, etc.).
- Parámetros personalizables: Puedes utilizar variables de entorno para permitir la personalización de ciertos comportamientos de la aplicación. Por ejemplo, podrías tener una variable de entorno que determine el número de elementos a mostrar por página en una paginación, o el idioma predeterminado a utilizar.
- Depuración y registro: Las variables de entorno también pueden ser útiles para habilitar o deshabilitar la depuración o el registro de la aplicación en función de la configuración del entorno. Esto permite tener un mayor control sobre los mensajes de registro o habilitar características adicionales de depuración en entornos de desarrollo o pruebas.

### 2.2.2. Instalación de dotenv para 'Windows y Linux'
Para instalar y utilizar el paquete dotenv en tu proyecto de Node.js, sigue estos pasos:

1. Asegúrate de estar ubicado en la raíz de tu proyecto de Node.js en la línea de comandos.
2. Ejecuta el siguiente comando para instalar dotenv: `npm i -E -D dotenv`
3. Crea un archivo llamado `.env` en la raíz de tu proyecto y agrega las variables de entorno que deseas configurar. Por ejemplo:

```bash
MY_CONFIG={"apiKey": "mi_clave_secreta", "apiURL": "https://api.ejemplo.com"}
```
1. En el archivo donde desees utilizar las variables de entorno (por ejemplo, app.js), agrega las siguientes líneas al principio del archivo:

```js
require('dotenv').config();
```
Esto cargará automáticamente las variables de entorno definidas en el archivo `.env` en el objeto `process.env`. Ten en cuenta que las variables de entorno definidas en el archivo `.env` ahora están disponibles en tu aplicación.

Recuerda que el archivo `.env` debe mantenerse fuera del control de versiones, ya que generalmente contiene información sensible como claves de API o contraseñas. Sin embargo, puedes proporcionar un archivo `.env.example` que incluya las variables de entorno esperadas con valores de ejemplo para que otros desarrolladores puedan configurar su propio archivo `.env`.

### 2.2.3. Configuración de dotenv con Express

Esta línea de código carga las variables de entorno definidas en el archivo `.env` en `process.env`, lo que permite acceder a ellas posteriormente.

```js
require('dotenv').config();
```
Se obtiene la configuración del servidor desde la variable de entorno MY_CONFIG, que se supone contiene una cadena JSON. La cadena se analiza y se convierte en un objeto JavaScript utilizando JSON.parse(), y se guarda en la variable config.

Se define una ruta GET para la ruta /campus. Cuando se accede a esta ruta, se envía la respuesta "Campers :)".
```js
app.get('/campus', (req, res) => {
  res.send("Campers :)");
});
```

# Introducción a Express.js - Un framework de aplicaciones web para Node.js

## 2.3. Conexión a MySQL usando 'mysql2'
`mysql2` es un paquete de Node.js que proporciona una interfaz para interactuar con bases de datos MySQL. Es una biblioteca de cliente MySQL para Node.js que se basa en el paquete mysql original pero con varias mejoras y optimizaciones. `mysql2` ofrece un rendimiento superior en comparación con `mysql`, especialmente en escenarios con altas cargas de trabajo y consultas concurrentes. Utiliza la biblioteca C++ libmysqlclient para comunicarse directamente con el servidor MySQL, lo que permite una mayor eficiencia y velocidad.

Más información: [mysql2 en GitHub](https://github.com/sidorares/node-mysql2)

### 2.3.1. Características
- **Rendimiento mejorado:** `mysql2` ha sido diseñado para proporcionar un rendimiento superior y un menor uso de recursos en comparación con `mysql`. Esto se logra mediante el uso de conexiones de socket TCP/IP más eficientes y un mejor manejo de la memoria.
- **Soporte para consultas preparadas:** `mysql2` permite utilizar consultas preparadas, lo que puede mejorar la seguridad y el rendimiento al ejecutar consultas repetidas con diferentes parámetros.
- **Manejo de resultados de consultas mejorado:** `mysql2` proporciona un manejo mejorado de los resultados de las consultas, lo que permite un procesamiento más eficiente de grandes conjuntos de resultados.
- **Compatibilidad con las últimas características de MySQL:** `mysql2` se mantiene actualizado con las últimas características y mejoras introducidas en MySQL.
- **Streams:** `mysql2` admite el uso de streams para la recuperación de resultados de consultas grandes. Esto significa que puedes leer y procesar los resultados en tiempo real a medida que se recuperan del servidor de MySQL, en lugar de esperar a que se complete toda la consulta.
- **Compatibilidad con promesas:** A diferencia de `mysql`, `mysql2` proporciona una API basada en promesas, lo que facilita el manejo de consultas asíncronas y mejora la legibilidad del código.
- **Pooling de conexiones mejorado:** `mysql2` ofrece un sistema de pooling de conexiones más avanzado que `mysql`. El pooling de conexiones es útil para administrar un grupo de conexiones a la base de datos y reutilizarlas de manera eficiente para consultas sucesivas.
- **Soporte para autenticación segura:** `mysql2` admite la autenticación segura con el servidor de MySQL utilizando los métodos de autenticación más recientes, como la autenticación de enchufe de autenticación (caching_sha2_password).
- **Compatibilidad con múltiples consultas:** `mysql2` permite ejecutar varias consultas en una sola llamada, lo que puede mejorar la eficiencia al reducir la latencia de la red.
- **Enlace nativo opcional:** `mysql2` ofrece la opción de utilizar un enlace nativo opcional para mejorar aún más el rendimiento. Este enlace nativo utiliza la biblioteca C mysqlclient en lugar de libmysqlclient, lo que puede brindar una mejora de rendimiento adicional.

### 2.3.2. Instalación de mysql2 para 'Windows y Linux'
1. Abre una terminal o línea de comandos y navega hasta la ubicación de tu proyecto.
2. Ejecuta el siguiente comando para instalar `mysql2`: `npm i -E -D mysql2`
3. Una vez finalizada la instalación, puedes comenzar a utilizar `mysql2` en tu aplicación. Asegúrate de requerirlo en tu archivo de JavaScript donde necesites interactuar con la base de datos MySQL. Puedes hacerlo utilizando el siguiente código:

```javascript
const mysql = require('mysql2');
```

#### Ejemplos prácticos con Express.js y mysql2

A continuación, te presento ejemplos de cómo realizar operaciones SELECT, INSERT, UPDATE y DELETE utilizando `mysql2` con Express.js.

**SELECT**

```javascript
const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor Express escuchando en el puerto 3000');
});
```
**INSERT INTO**

```javascript
// Supongamos que recibimos datos del usuario a través del cuerpo de la solicitud
app.post('/agregar-usuario', (req, res) => {
  const { nombre, edad, email } = req.body;

  connection.query('INSERT INTO usuarios (nombre, edad, email) VALUES (?, ?, ?)', [nombre, edad, email], (err, results) => {
    if (err) throw err;
    res.send('Usuario agregado correctamente');
  });
});
```

**UPDATE**

```javascript
// Supongamos que recibimos datos del usuario a través del cuerpo de la solicitud
app.put('/actualizar-usuario/:id', (req, res) => {
  const { nombre, edad, email } = req.body;
  const usuarioId = req.params.id;

  connection.query('UPDATE usuarios SET nombre = ?, edad = ?, email = ? WHERE id = ?', [nombre, edad, email, usuarioId], (err, results) => {
    if (err) throw err;
    res.send('Usuario actualizado correctamente');
  });
});
```

**DELETE**

```javascript
app.delete('/eliminar-usuario/:id', (req, res) => {
  const usuarioId = req.params.id;

  connection.query('DELETE FROM usuarios WHERE id = ?', [usuarioId], (err, results) => {
    if (err) throw err;
    res.send('Usuario eliminado correctamente');
  });
});
```

## 3.1. ¿Qué es nanoid?
`nanoid` es una biblioteca de generación de identificadores únicos y aleatorios en Node.js. Proporciona una forma sencilla de generar identificadores únicos que pueden ser utilizados, por ejemplo, como claves primarias en bases de datos, identificadores de objetos, tokens de autenticación, entre otros casos de uso. La biblioteca `nanoid` está diseñada para ser rápida, compacta y segura, generando identificadores únicos de forma eficiente. Utiliza una combinación de caracteres alfanuméricos y se puede configurar para generar identificadores con diferentes longitudes y utilizando diferentes alfabetos.

Más información: [nanoid en GitHub](https://github.com/ai/nanoid)

### 3.1.1. Características
- **Generación de identificadores únicos:** `nanoid` está diseñado específicamente para generar identificadores únicos de manera eficiente. Utiliza algoritmos criptográficamente seguros para garantizar que los identificadores generados sean altamente improbables de repetirse.
- **Tamaño configurable:** Puedes especificar la longitud deseada del identificador generado mediante el parámetro de longitud de la función `nanoid()`. Esto te permite ajustar el tamaño del identificador según tus necesidades específicas.
- **Alfabeto personalizable:** `nanoid` utiliza un conjunto de caracteres alfanuméricos por defecto (a-z, A-Z y 0-9). Sin embargo, también puedes personalizar el alfabeto utilizado para generar los identificadores. Esto te permite, por ejemplo, utilizar solo caracteres en minúscula o añadir caracteres adicionales según tus preferencias.
- **Rendimiento eficiente:** `nanoid` está diseñado para ser rápido y eficiente en términos de rendimiento. Los algoritmos utilizados se optimizan para generar identificadores únicos de manera rápida, lo que es especialmente importante cuando se necesitan generar grandes cantidades de identificadores en poco tiempo.
- **Tamaño compacto:** La biblioteca `nanoid` es relativamente pequeña y liviana, lo que significa que no añade una carga significativa a tus aplicaciones Node.js. Esto es especialmente beneficioso si estás trabajando en entornos con restricciones de recursos.

### 3.1.2. Instalación de nanoid para 'Windows y Linux'
1. Abre una terminal o línea de comandos en el directorio raíz de tu proyecto.
2. Ejecuta el siguiente comando para instalar `nanoid` a través de npm (Node Package Manager): `npm i -E -D nanoid`
Esto descargará la biblioteca `nanoid` y todas sus dependencias en un directorio llamado `node_modules`.
3. Una vez que la instalación esté completa, puedes utilizar `nanoid` en tu proyecto de Node.js importándolo en tus archivos JavaScript. Por ejemplo, si quieres generar un `nanoid` en tu código, puedes hacer lo siguiente:

```javascript
const { nanoid } = require('nanoid');
const uniqueId = nanoid(); // Genera un identificador único
console.log(uniqueId); // Imprime el identificador único generado.
```
Recuerda que `nanoid` genera identificadores únicos que son aleatorios y no se repiten fácilmente. Por lo tanto, cada vez que ejecutes el código anterior, obtendrás un nuevo identificador único.

¡Así de sencillo es utilizar `nanoid` para generar identificadores únicos en tu aplicación Node.js! Puedes utilizar estos identificadores en diversas partes de tu aplicación, como en la creación de usuarios, asignación de tokens de autenticación o cualquier otro caso donde necesites un identificador único y aleatorio.

# Node JS Avanzado - Manejo de Cookies con `cookie-parser`

## 3.2. ¿Qué son las cookies?
Las cookies son pequeños fragmentos de información que se almacenan en el lado del cliente (generalmente en el navegador) y se utilizan para realizar un seguimiento de la información relacionada con la sesión del usuario o para almacenar preferencias específicas. Cuando un cliente realiza una solicitud a un servidor Node.js, puede enviar una cookie junto con la solicitud. El servidor puede leer esa cookie y utilizar la información almacenada en ella para realizar acciones específicas o personalizar la respuesta.

### 3.2.1. ¿Qué es `cookie-parser`?
`cookie-parser` es un middleware popular en Node.js que se utiliza para analizar y manejar cookies en las solicitudes HTTP. Proporciona una forma conveniente de leer y manipular las cookies enviadas por el cliente.

Más información: [cookie-parser en GitHub](https://github.com/expressjs/cookieparser)

### 3.2.2. Características
- **Análisis de cookies:** `cookie-parser` analiza automáticamente las cookies presentes en las solicitudes entrantes y las convierte en un objeto JavaScript accesible en las rutas de tu aplicación.
- **Acceso sencillo:** Una vez que `cookie-parser` ha analizado las cookies, proporciona acceso sencillo a ellas a través de la propiedad `req.cookies` del objeto request (`req`) en Express. Puedes leer los valores de las cookies y utilizarlos en tus manejadores de rutas.
- **Soporte para firmado de cookies:** `cookie-parser` también admite la firma de cookies utilizando una clave secreta. Puedes especificar una clave al configurar `cookie-parser` para que las cookies se firmen automáticamente y se verifiquen cuando sean recibidas.
- **Configuración de opciones:** Puedes personalizar el comportamiento de `cookie-parser` configurando diversas opciones. Algunas opciones comunes incluyen la configuración de las opciones de firma, la duración de las cookies, la ruta de acceso, el dominio, etc.
- **Establecimiento de cookies:** Además de analizar las cookies entrantes, `cookie-parser` te permite establecer fácilmente nuevas cookies en las respuestas salientes utilizando el método `res.cookie()` en Express. Esto simplifica el proceso de establecer y enviar cookies al cliente.
- **Middleware de alto rendimiento:** `cookie-parser` está diseñado para ser un middleware de alto rendimiento que procesa eficientemente las cookies en las solicitudes entrantes. Puede manejar múltiples cookies y realizar las tareas de análisis y manipulación de cookies de manera eficaz.

### 3.2.3. Instalación de `cookie-parser` para 'Windows y Linux'
1. Inicia un nuevo proyecto Node.js o ve al directorio de tu proyecto existente desde la línea de comandos.
2. Ejecuta el siguiente comando para instalar `cookie-parser` utilizando el gestor de paquetes npm: `npm i -E -D cookie-parser`
Esto descargará e instalará el paquete `cookie-parser` y todas sus dependencias en tu proyecto.
3. Una vez que se haya completado la instalación, puedes usar `cookie-parser` en tu aplicación Node.js incluyendo el siguiente código en tu archivo JavaScript:

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const { nanoid } = require('nanoid');

// Inicialización de Express
const appExpress = express();

// Uso de middleware cookie-parser
appExpress.use(cookieParser());

// Definición de rutas
appExpress.get('/', (req, res) => {
  // Configura una cookie llamada 'sessionId' con un valor único generado por nanoid
  res.cookie('sessionId', nanoid(), { httpOnly: true });
  res.send('Welcome');
});

appExpress.post('/', (req, res) => {
  // Comprueba si existe una cookie llamada 'sessionId'
  if (!req.cookies.sessionId) {
    // Devuelve un estado HTTP 401 (no autorizado) con un mensaje de error
    return res.status(401).send('Unauthorized');
  }

  // Borra la cookie 'sessionId'
  res.clearCookie('sessionId');
  // Envía un estado HTTP 200, lo que indica que la solicitud ha tenido éxito
  res.sendStatus(200);
});

// Configuración del servidor
const PORT = 3000;
const HOST = '127.0.0.1';

// Escucha del servidor
appExpress.listen(PORT, HOST, () => {
  console.log(`Servidor en ejecución en http://${HOST}:${PORT}`);
});
```
# Node JS Avanzado - Data Transfer Object (DTO) y class-transformer

## 3.3. ¿Qué es DTO (Data Transfer Object)?
DTO significa Data Transfer Object (Objeto de Transferencia de Datos). Es un patrón de diseño que se utiliza en la programación de software, especialmente en arquitecturas de varias capas, donde se necesita transferir datos entre capas o componentes del software.

Un DTO es esencialmente un objeto simple, a menudo sin lógica de negocio, que contiene solo campos y métodos de acceso (getters y setters). Su objetivo principal es encapsular los datos y permitir su transporte de un sistema a otro de manera eficiente. Se utilizan para serializar los datos que deben enviarse a través de la red, lo que puede ser costoso en términos de recursos de tiempo y CPU.

Más información: [class-transformer en GitHub](https://github.com/typestack/class-transformer)

### 3.3.2. Características
- **Simplicidad:** Un DTO es un objeto simple que contiene atributos y métodos para acceder y modificar estos atributos (getters y setters). No contiene lógica empresarial ni comportamientos complejos.
- **Eficiencia:** Los DTOs son utilizados para agrupar y transferir múltiples datos en una sola llamada de red o entre componentes de un sistema, lo que puede reducir la sobrecarga de la red y aumentar la eficiencia.
- **Encapsulación:** Encapsulan los datos que necesitan ser transferidos entre procesos o entre la red, asegurándose de que los datos internos del objeto no sean expuestos directamente.
- **Serialización:** Los DTOs se pueden serializar en varios formatos como XML, JSON, etc., lo que permite una fácil transferencia de datos a través de la red.
- **Estructurados según las necesidades del cliente:** A diferencia de los objetos de dominio que están estructurados según las necesidades de la lógica empresarial, los DTOs se estructuran según las necesidades del cliente que recibe los datos. Esto significa que puedes tener varios DTOs para el mismo objeto de dominio, cada uno optimizado para diferentes vistas o diferentes consumidores de los datos.
- **Reducen el acoplamiento:** Debido a que los DTOs se utilizan para transferir datos entre capas o componentes, ayudan a reducir el acoplamiento entre estos componentes. Esto significa que los cambios en un componente no necesitan propagarse a otros componentes siempre y cuando el DTO se mantenga constante.

### 3.3.3. ¿Qué es class-transformer?
class-transformer es una biblioteca en Node.js que permite transformar objetos de tipo "plano" o JSON en instancias de clases y viceversa. Esta librería es muy útil en conjunción con el patrón Data Transfer Object (DTO), donde los DTOs a menudo se crean como clases.

La biblioteca ofrece un conjunto de funciones útiles, como:
- `classToPlain`: Convierte la instancia de una clase a un objeto plano.
- `plainToClass`: Convierte un objeto plano a una instancia de una clase específica.
- `classToClass`: Crea una nueva copia de la instancia de una clase.
- `classToClassFromExist`: Crea una nueva copia de la instancia de una clase, manteniendo los valores existentes en la instancia objetivo.

Además, la biblioteca class-transformer permite controlar más a fondo el proceso de transformación utilizando decoradores, lo que te permite especificar cómo se deben manejar ciertos campos durante la transformación. Por ejemplo, puedes excluir ciertos campos de la transformación, cambiar el nombre de un campo, transformar el valor de un campo, y mucho más.

Esta biblioteca es especialmente útil cuando se trabaja con marcos como Express.js y se utiliza junto con la biblioteca class-validator para la validación del lado del servidor en aplicaciones Node.js.

### 3.3.4. Instalación de class-transformer para 'Windows y Linux'
Para instalar class-transformer en un sistema Linux con Node.js, necesitarás usar npm (el administrador de paquetes de Node.js). Abre una terminal y escribe los siguientes comandos:

1. Instalar class-transformer:
```bash
npm i -E -D class-transformer
```
2. Instalar reflect-metadata (polyfill para la propuesta de metadatos de reflexión):

```bash
npm i -E -D reflect-metadata
```

3. Instalar class-validator (biblioteca para la validación de campos):

```bash
npm i -E -D class-validator
```

4. Instalar TypeScript (si aún no lo tienes instalado):

```bash
npm i -E -D typescript
```

Una vez que tienes TypeScript instalado, puedes iniciar un archivo tsconfig.json usando el siguiente comando en la raíz de tu proyecto:

```bash
npx tsc --init
```

Esto creará un archivo tsconfig.json en tu directorio de proyecto con una configuración predeterminada. Puedes modificar este archivo según las necesidades de tu proyecto.

A continuación, se muestra un ejemplo del archivo user.ts que utiliza class-transformer y class-validator para definir un DTO llamado User.

```typescript
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsEmail, IsString } from 'class-validator';

export class User {
  @Expose({ name: 'id' })
  @IsNumber({}, { message: 'El id no cumple con el formato' })
  @IsDefined({ message: 'El parámetro id es obligatorio' })
  ID: number;

  @Expose({ name: 'nom_com' })
  @IsString()
  @IsDefined({ message: 'El parámetro nom_com es obligatorio' })
  @MaxLength(100, { message: 'El parámetro nom_com debe tener como máximo 100 caracteres' })
  @MinLength(2, { message: 'El parámetro nom_com debe tener al menos 2 caracteres' })
  nom_com: string;

  @Expose({ name: 'ema' })
  @IsEmail({}, { message: 'El parámetro ema debe tener un formato de correo electrónico válido' })
  @IsDefined({ message: 'El parámetro ema es obligatorio' })
  ema: string;

  @Expose({ name: 'psw' })
  @IsString()
  @IsDefined({ message: 'El parámetro psw es obligatorio' })
  @MaxLength(12, { message: 'El parámetro psw debe tener como máximo 12 caracteres' })
  @MinLength(8, { message: 'El parámetro psw debe tener al menos 8 caracteres' })
  psw: string;

  constructor(ID: number, nom_com: string, ema: string, psw:

```

# Node JS Avanzado - JSON Web Token (JWT) y "jose"

## 3.4. ¿Qué es JWT (JSON Web Token)?

JWT (JSON Web Token) es un estándar abierto (RFC 7519) que define una forma compacta y autónoma de transmitir información entre dos partes en forma de objeto JSON. Es comúnmente utilizado para autenticar usuarios y garantizar la integridad de la información entre un cliente (generalmente un navegador web) y un servidor o servicio.

Un JWT consta de tres partes separadas por puntos ('.'): el encabezado, los datos o carga útil (payload) y una firma. La estructura general de un JWT es la siguiente:

```bash
xxxxx.yyyyy.zzzzz
```

- **xxxxx:** Encabezado (Header) codificado en Base64url, que contiene información sobre el algoritmo de firma y el tipo de token.
- **yyyyy:** Datos o carga útil (Payload) codificado en Base64url, que contiene los datos que se desean transmitir entre las partes. Puede incluir información como el identificador del usuario, roles, permisos, etc.
- **zzzzz:** Firma digital que asegura que el token no ha sido modificado en el camino y puede ser verificado por el servidor. La firma se genera utilizando el encabezado codificado, la carga útil codificada, una clave secreta (en el caso de JWT con cifrado HMAC) o una clave pública/privada (en el caso de JWT con cifrado RSA).

Los JWT son ampliamente utilizados en aplicaciones web y API RESTful como mecanismo de autenticación y autorización, ya que son compactos, seguros y autocontenido. Almacenar la información relevante en el token permite que los servidores no necesiten mantener un estado de sesión, lo que facilita la escalabilidad y la distribución del sistema.

Es importante tener en cuenta que, debido a que el contenido de un JWT está codificado en Base64url y no cifrado, cualquier persona que tenga acceso al token puede leer su contenido. Por lo tanto, es esencial no almacenar información sensible como contraseñas en el token y utilizar siempre una conexión segura (HTTPS) para transmitir los tokens entre el cliente y el servidor.

Más información: [jwt.io](https://jwt.io/)

### 3.4.1. ¿Qué es "jose"?

En el contexto de npm, "jose" es una librería que proporciona funcionalidades relacionadas con JSON Object Signing and Encryption (JOSE). JOSE es un conjunto de especificaciones que define métodos para firmar y cifrar objetos JSON, que a su vez se utilizan para crear y validar JSON Web Tokens (JWT).

La librería "jose" de npm permite trabajar con tokens JWT de una manera más sencilla y segura, ya que proporciona métodos para generar firmas digitales (JWS - JSON Web Signature) y cifrado (JWE - JSON Web Encryption), además de permitir verificar la autenticidad de los tokens y desencriptarlos.

Algunas de las funcionalidades que ofrece la librería "jose" incluyen:
- Generar y verificar tokens JWT firmados.
- Generar y verificar tokens JWT cifrados.
- Soporte para múltiples algoritmos de firma y cifrado, como RS256, HS256, ES256, entre otros.
- Manipulación de claves públicas y privadas para la firma y el cifrado.
- Creación y verificación de claves JSON Web Key (JWK).

Esta librería puede ser útil para implementar autenticación y autorización en aplicaciones web y servicios que utilicen tokens JWT, ya que simplifica el proceso de generación y validación de estos tokens. Es importante utilizar la librería "jose" con precaución y siguiendo buenas prácticas de seguridad para garantizar la integridad y la confidencialidad de los tokens utilizados en la aplicación.

### 3.4.2. Instalación de "jose" para Windows y Linux

Para instalar "jose" en un sistema Windows o Linux utilizando npm, sigue estos pasos:

1. Abre una terminal o línea de comandos en tu sistema operativo.
2. Navega hasta el directorio de tu proyecto o donde desees instalar la librería "jose".
3. Ejecuta el siguiente comando para instalar "jose" desde npm:

```bash
npm i -E -D jose
```
Este comando descargará la última versión de la librería "jose" y la agregará como dependencia en tu proyecto. Una vez completada la instalación, podrás utilizar la librería "jose" en tu código.

Después de instalar "jose", podrás utilizar las funcionalidades proporcionadas por esta librería para trabajar con tokens JWT de forma más segura y eficiente en tu aplicación.

Recuerda siempre seguir las buenas prácticas de seguridad al utilizar tokens JWT y proteger la clave privada utilizada para firmar y desencriptar los tokens.