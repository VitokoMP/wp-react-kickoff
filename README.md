
# wp-react-Plugin-PDF

A React JS WordPress Plugin Starter
**Diseñado con codigo libre**
Licencia APACHE 2.0
tengo el agrado de entregar esta version que contiene las mejores practicas de implementacion para Babel y webPack con REACT!
version 1.1.5
Necesitas instalar cross-env --save-dev
# npm install at package.json
{
  "name": "wp-react-pdf-cotizacion",
  "version": "1.1.5",
  "main": "index.js",
  "dependencies": {
    "axios": "^1.7.7",
    "file-saver": "^2.0.5",
    "pdf-lib": "^1.17.1",
    "php-serialize": "^5.0.1",
    "php-unserialize": "^0.0.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-modal": "^3.16.1",
    "react-router-dom": "^6.26.1"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.4",
    "@babel/preset-react": "^7.24.7",
    "babel-loader": "^9.1.3",
    "cross-env": "^7.0.3",
    "css-loader": "^7.1.2",
    "style-loader": "^4.0.0",
    "terser-webpack-plugin": "^5.3.10",
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "cross-env NODE_ENV=production webpack",
    "start": "cross-env NODE_ENV=development webpack --watch"
  }
}



**Optimizado por AlekhArt.codes**
> Written with [StackEdit](https://stackedit.io/).