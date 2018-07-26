
English version
============

## include-modules


A simple node module for easily include modules js or configuration files with format json that exist in separate files (make auto-require).
This module return a JavaScript Object Literal that contain all modules and configuration files.


## Changelog

- This module was updated and now support auto-require from a single file.

## Installation
```bash
$ [sudo] npm install include-modules --save
```
## How to use

The following example attaches include-modules to a simple  Node.JS app

#####_Directory structure:_
```
├── test/
│   ├── examples /
│   │   ├── default/
│   │   │   ├── plugins.json
│   │   ├── development/
│   │   │   ├── app.json
│   │   │   ├── test.js
│   │   ├── empty/
│   │   ├── others/
│   │   │   ├── LICENSE
│   │   │   ├── example.xml
│   │   │   ├── app.json
│   │   │   ├── test.js
│   │   │   ├── test.xml
│   ├── index.html
```

## Auto-require multiple files
index.js
```js

var load = require('include-modules');


/*
var paths = {
  'whatever name you'd like to use': 'relative folder path that contain the configuration files or modules',
  'whatever name you'd like to use': 'other relative folder path that contain the configuration files or modules'
}
*/

var paths = { 
  'development':'./examples/development',
  'default':'./examples/default',
  'others':'./examples/others',
  'foo':'./exampleTwo'
};


var modules = load.modules(paths, __dirname, "");

console.log(modules);



```
Run the app:
```
node index.js
```
gives the following output
```bash
{
    development: {
        app: {
            server: [Object],
            debug: true,
            plugins: [Object]
        },
        test: {
            uno: [Function],
            dos: [Function]
        }
    },
    default: {
        plugins: {
            good: true
        }
    },
    others: {
        one: {
            server: [Object],
            debug: false
        },
        two: {
            example: [Function],
            test: [Function]
        }
    },
    foo: {
        example: {
            foo: 'bar'
        }
    }
}


```
## Auto-require single file

index.js
```js

var load = require('include-modules');


/*
var paths = {
  'whatever name you'd like to use': 'relative folder path that contain the configuration files or modules',
  'whatever name you'd like to use': 'other relative folder path that contain the configuration files or modules'
}
*/

var paths = { 
  'single':'./examples/single',
};


var modules = load.modules(paths, __dirname, "example.json");

console.log(modules);



```
Run the app:
```
node index.js
```
gives the following output
```bash
{
    single: {
        example: {
            config: "data-example"
        }
    }
}


## Support

If you need help using include-modules, or have found a bug, please create an issue on the
<a href="https://github.com/davidenq/include-modules/issues" target="_blank">GitHub repo</a>.

## License

MIT Licence


Versión Español
=============

#include-modules

Un modulo para nodejs para incluir de forma fácil módulos js o archivos de configuración json que existen en archivos separados. Es decir, realizar autor require solo con indicar la ruta de las carpetas que contienen los módulos o archivos de configuración.
Este módulo devuelve un objecto literal Javascript el cual contiene los módulos y archivos de configuración.


## Installation
```bash
$ [sudo] npm install include-modules --save
```
## ¿Cómo usar?

A continuación se muestra un ejemplo sensillo de la ejecución del modulo.

#####_Estructura de directorio:_
```
├── test/
│   ├── examples /
│   │   ├── default/
│   │   │   ├── plugins.json
│   │   ├── development/
│   │   │   ├── app.json
│   │   │   ├── test.js
│   │   ├── empty/
│   │   ├── others/
│   │   │   ├── LICENSE
│   │   │   ├── example.xml
│   │   │   ├── app.json
│   │   │   ├── test.js
│   │   │   ├── test.xml
│   ├── index.html
```
index.js
```js

var load = require('include-modules');


/*
var paths = {
  'whatever name you'd like to use': 'relative folder path that contain the configuration files or modules',
  'whatever name you'd like to use': 'other relative folder path that contain the configuration files or modules'
}
*/

var paths = { 
  'development':'./examples/development',
  'default':'./examples/default',
  'others':'./examples/others',
  'foo':'./exampleTwo'
};


var modules = load.modules(paths, __dirname);

console.log(modules);



```
Ejecturar:
```
node index.js
```
A la salida se obtiene:
```bash
{
    development: {
        app: {
            server: [Object],
            debug: true,
            plugins: [Object]
        },
        test: {
            uno: [Function],
            dos: [Function]
        }
    },
    default: {
        plugins: {
            good: true
        }
    },
    others: {
        one: {
            server: [Object],
            debug: false
        },
        two: {
            example: [Function],
            test: [Function]
        }
    },
    foo: {
        example: {
            foo: 'bar'
        }
    }
}


```

## Soporte

Si necesitas ayuda usando el módulo include-modules, o si encuentras un bug, por favor créa un issue en <a href="https://github.com/davidenq/include-modules/issues" target="_blank">GitHub repo</a>.

## Licencia

MIT Licence

