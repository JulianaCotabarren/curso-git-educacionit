# GIT (Sistema de Control de Versiones)

Esto es una guia teorico/practica para los alumnos de **GIT Desarrollo Colaborativo** que cursan los dias *Jueves de 18h a 20h*, cuya finalidad es reforzar los conceptos y temas trabajados en clase.

## Configuracion Inicial

Cuando trabajamos con GIT debemos inicializar un proyecto en la carpeta donde querramos llevar un control de los cambios. Para ello es necesario establecer un nombre de usuario y correo con el que se pueda identificar a la persona que realizo dichas modificaciones.

La configuracion puede definirse en 3 niveles (local, global, system) segun como gestionemos los diferentes proyectos. Algunos de los comandos que podemos utilizar para definir o verificar dicha configuracion son:

* __git init:__ inicializa un repositorio en la carpeta actual
* __git config user.name `name`:__ define el nombre de usuario
* __git config user.email `email`:__ define un correo de contacto
* __git config --list:__ muestra la configuracion general

## Apuntadores de GIT

Son referencias que permiten al usuario navegar dentro del historial de confirmaciones, ademas que facilitan la identificacion de ciertos puntos dentro del registro de cambios. Entre los apuntadores que existen en GIT, se encuentran los siguientes:

* __HEAD:__ Apuntador Movil que indica donde nos encontramos dentro del historial de confirmaciones, ademas sirve como referencia para desplazarse dentro del mismo (ej: git checkout HEAD~15 | regresa 15 commits hacia atras)
* __BRANCH:__ Apuntador Dinamico que siempre se corresponde con el ultimo commit de la historia actual, sirve como referencia cuando necesitamos ir hacia adelante.
* __TAG:__ Apuntador Estatico que se corresponde con un commit en concreto y se utiliza para el versionado del proyecto y facilitar la navegacion a ciertos puntos de la historia.
* __STASH:__ Apuntador de la Zona Temporal de cambios, se utiliza cuando debemos cambiar entre ramas, pero tenemos trabajo en progreso y no amerita un commit, genera una referencia.
## Gestion de Repositorios

Si necesitamos agregar una direccion de un servidor de GIT, para subir nuestro historial de confirmaciones, o simplemente sincronizar los cambios con dicho remoto, podemos utilizar alguno de los siguientes comandos:

*__git remote add `alias` `url`:__ agrega una direccion remota al repositorio local
*__git fetch `remote`:__ descarga el historial de confirmaciones del repositorio remoto (no integra los cambios)
*__git pull `remote` `branch`:__ descarga e integra los cambios del repositorio remoto al working directory
*__git push `remote` `branch`:__ envia el historial de confirmaciones al repositorio remoto

---

## Contacto

Para mas informacion sobre este y otros cursos puede visitar el sitio de [EducacionIT](https://educacionit.com.ar), tambien pueden acceder al material y las grases grabadas desde la plataforma [Alumni](https://alumni.education).