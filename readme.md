#Descripcion 
- Un blog con vista  pública y administrativa , la vista pública consta de una vista que consume los post de el blog y otra vista la cual muestra el detalle de el post .
- la parte administrativa administra los post pudiendo crear , eliminar y actualiza, también gestionado los autores 

#Instalación 
- Backend 
- Una vez clonado el repositorio en la carpeta raiz se encuentra el script de la base de datos debe ser montanto en un motor de base de datos mysql 
- luego de montar la db lo siguiente es instalar las dependencias de composer que es el gestor de paquetes de laravel con el comando "composer install" Automáticamente composer leerá el archivo composer.json y comenzará a instalar todas las dependencias.
- por último levantamos nuestra api rest con el comando "php artisan serve"

#Frontend

- Con el comando npm i instalamos las dependencias de node js 
- Levantamos nuestra app con el comando "ng serve --o"
- ya podremos consumir nuestro blog 
- para ingresar en nuestro panel adminstrativo nos pedira las siguientes credenciales 
email : morales@gmail.com
password : 123456