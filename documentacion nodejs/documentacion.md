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