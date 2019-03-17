# SistemaBus

Este proyecto se generó con Angular CLI

Angular CLI: 6.1.4

Node: 10.8.0

Angular: 6.1.4

typescript: 2.9.2

## INSTALACIÓN
Para levantar el proyecto, es necesario descargar e instalar las siguientes herramientas:

- NODE JS 10.X (Incluye NPM)

  Windows: https://nodejs.org/es/download/

  Linux:
  ```
  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  ```
  ```
  sudo apt-get install -y nodejs
  ```

- GIT

  Windows: https://git-scm.com/downloads

  Linux:
  ```
  apt-get install git
  ```
  
- Ionic

  windows && Linux:
  ```
  npm install -g ionic
  ```


- CLI Angular

  windows && Linux:
  ```
  npm install -g @angular/cli
  ```

Para descargarnos el proyecto, desde la terminal

  windows && Linux:
  ```
  git clone https://github.com/byjose007/SistemaBus.git
  ```
  Una vez clonado el repositorio, nos situamos en la carpeta del  proyecto `idd-frontend`
  ```
  cd idd/idd-frontend
  ```
  Descargar las dependencias.
  ```
  npm install
  ```

## EJECUCIÓN

### Despliegue local
  Desde la carpeta del proyecto, lanzamos el comando
  
   ```
   ng serve
   ```

  Si navegamos a `http://localhost:4200/` podremos ver la app.

### Creación de nuevos componentes
  Ejecutar `ng generate component <component-name>` para generar un nuevo componente. Para otro tipo de clases se puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
  Ejecutar `ng build` para hacer el build del proyecto. Los archivos apareceran en la carpeta `dist/`. Para prod se debe añadir el flag `--prod`.

### Ejecución de tests unitarios
  Ejecutar `ng test` para lanzar los tests unitarios con [Karma](https://karma-runner.github.io).

### Ejecución de tests end-to-end
  Ejecutar `ng e2e` para lanzar los tests end-to-end tests con [Protractor](http://www.protractortest.org/).

## ESTRUCTURA

El proyecto está estructurado por carpetas de la siguiente manera:

      src/
      |-- app/
           |-- modules/
             Modulos independientess
             |-- home/
                 |-- [+] components/
                 |-- [+] pages/
                 |-- home-routing.module.ts
                 |-- home.module.ts
           |-- core/
                Aquí deben ir las funcionalidades principales, en su mayoría servicios globales, que se utilizarán en
                 toda la aplicación a nivel global. No deberían ser importados por otros módulos.
             |-- [+] authentication/
             |-- [+] footer/
             |-- [+] guards/
             |-- [+] http/
             |-- [+] interceptors/
             |-- [+] mocks/
             |-- [+] services/
             |-- [+] header/
             |-- core.module.ts
             |-- ensureModuleLoadedOnceGuard.ts
             |-- logger.service.ts
           |
           |-- shared/
                por lo general, aquí van los componentes o servicios que se reutilizan en otros módulos
                pero que no se aplican globalmente. Son compartidos con los modulos independientes
                |-- [+] components/
                |-- [+] directives/
                |-- [+] pipes/
           |
           |-- [+] configs/
      |-- assets/
           |-- scss/
                |-- [+] partials
                |-- _base.scss
                |-- styles.scss
                


##Referencias:
 
[Tipos de componentes](https://blog.angular-university.io/angular-component-design-how-to-avoid-custom-event-bubbling-and-extraneous-properties-in-the-local-component-tree/)

[Estructura Escalable ](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)



## Guía de buenas prácticas de git-IDD


### Introducción

Este documento tiene como fin, tener una wiki común con las buenas prácticas que
tenemos que seguir para conservar ordenado el repositorio.

### Inicializar gitflow

Para inciar un git-flow debemos lanzar el comando:
> git flow init

Despues se nos haran una serie de preguntas para configurar el gitflow correctamente:

Which branch should be used for bringing forth production releases?

Branch name for production releases: [master] > pre

Which branch should be used for integration of the "next release"?

Branch name for "next release" development: [develop] > develop

(aquí los dejamos sin prefijo(todo vacío))
How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [C:/Users/**/.git/hooks]

 ### Funcionalidad nueva(Feature)

 Para añadir una funcionalidad utilizaremos "feature", aquí dejo una referencia
 donde se explica como utilizar los features:
 https://danielkummer.github.io/git-flow-cheatsheet/#features

Importante: al crear una feature debemos de incluir como nombre el identificador
de la tarea de Jira, de esta forma nos aseguraremos de que está todo registrado.


 ### Solucionar bugs (Bugfix)

 Cuando en Jira tengamos una tarea que sea catalogada como error, utilizaremos los
 bugfix (NO CONFUNDIR CON HOTFIX). Los comandos básicos serían:

 empezar bugfix:
` git flow bugfix start identificador_bugfix`

 terminar bugfix para que se mergee con la rama padre
 `git flow bugfix finish`

 para publicar el bug en remoto
 `git flow bugfix publish`


fuentes interesantes:
https://medium.com/@nuno.caneco/using-git-flow-243581525aee


