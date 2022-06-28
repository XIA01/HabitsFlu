/*Qué son (y para qué sirven) los sistemas de control de versiones y cómo pueden ayudar a nuestro flujo de desarrollo
Nos ayudan a mantener un historial de cambios;
Nos ayudan a tener control sobre cada cambio en el código;
Nos ayudan a que un cambio de una persona no influya en el cambio realizado por otra;
Etc.
Qué es Git y cómo instalarlo
Que con el comando git init pudimos crear un repositorio Git;
Cómo analizar el estado de nuestro repositorio usando el comando git status.*/
 /*Antes de cualquier interacción con git, es necesario informar quién eres para que almacene correctamente los datos del autor de cada uno de los cambios en el código.

Simplemente escribe los siguientes comandos (estando en la carpeta del repositorio de git):

git config --local user.name "Tu nombre aquí"
git config --local user.email "Tu@email.aqui”
La configuración de usuario es una opción que se puede usar para configurar el usuario que se usará para almacenar los cambios en el repositorio.*/

/*Que un commit es la forma de guardar un estado o versión de nuestro código;
Cómo agregar archivos para commitear con git add;
Cómo commitear archivos usando el comando git commit;
Cómo verificar el historial de commits, a través de git log y algunas de sus opciones:
git log --oneline
git log -p
git log --pretty="parámetros de formato"
Cómo hacer que Git no monitoree archivos, a través de .gitignore
Que no debemos realizar commits, es decir, guardar un estado, de nuestra aplicación que no esté funcionando.*/

