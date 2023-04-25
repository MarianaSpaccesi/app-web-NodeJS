# Modulos de Producción:
inicializo un package.json con el comando npm init -y
instalo un framew como express para crear un servidor : npm i express 
instalo morgan para ver por consola las request que llegan del nav: npm i morgan 
instalo ejs para generar páginas html: npm i ejs. Extiende codigo de js al html.  

# Modulos de Desarrollo (devDependencies):
nodemon: npm i nodemon -D (el flag -D indica que es de desarrollo) - ejecutar: npx ndemon filePath , o hacer script en el package.json npm run scriptKey

# Configurar Express 
en el pckge añadir "type": "module" para que al ejecutar el codigo se empleen automaticamente los imports y exports (import from - como en react) 

