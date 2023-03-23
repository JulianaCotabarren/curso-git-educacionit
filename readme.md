# GIT (Sistema de Control de Versiones)

Esto es una guia teorico/practica para los alumnos de **GIT Desarrollo Colaborativo** que cursan los dias *Jueves de 18h a 20h*, cuya finalidad es reforzar los conceptos y temas trabajados en clase.

## Configuracion Inicial

Cuando trabajamos con GIT debemos inicializar un proyecto en la carpeta donde querramos llevar un control de los cambios. Para ello es necesario establecer un nombre de usuario y correo con el que se pueda identificar a la persona que realizo dichas modificaciones.

La configuracion puede definirse en 3 niveles (local, global, system) segun como gestionemos los diferentes proyectos. Algunos de los comandos que podemos utilizar para definir o verificar dicha configuracion son:

* __git init:__ inicializa un repositorio en la carpeta actual
* __git config user.name `name`:__ define el nombre de usuario
* __git config user.email `email`:__ define un correo de contacto
* __git config --list:__ muestra la configuracion general