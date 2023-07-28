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