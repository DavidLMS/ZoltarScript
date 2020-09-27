# ZoltarScript
Script básico para la planificación de sesiones semanales de una formación usando una Hoja de Cálculo de Google. Permite generar todas las sesiones y trasladarlas como eventos a un calendario, con la posibilidad de añadir una descripción en cada uno.

**Nota importante**: Este script está en estado alfa, únicamente lo he probado para generar las sesiones de mis módulos y ha funcionado correctamente de momento. El código es muy poco elegante, lo justo para que funcione. Intentaré mejorarlo con el paso del tiempo, también puedes ayudarme a ello usando un pull request. Si llega a estar lo suficientemente maduro, me plantearé publicarlo como complemento gratuito para facilitar su instalación.

## Instalación
Para comenzar a usar el script, necesitas **abrir una Hoja de Cálculo de Google** donde quieras ejecutarlo.

El segundo paso es abrir el menú **Herramientas -> Editor de secuencias de comandos**.

**Copia y pega todo el código** del repositorio en el editor que aparece, sustituyendo las tres líneas de código que hay por defecto.

Pulsa en el menú **Editar -> Activadores del proyecto activo**.

Si no lo has hecho antes, te pedirá que le pongas un nombre al proyecto. Puedes ponerle el que te apetezca.

En la nueva ventana, pulsa el botón **Añadir activador** en la esquina inferior derecha.

Deja todo tal y como está en la ventana que aparece y dale a **Guardar**.

Te pedirá que le des permisos al script, inicia sesión con tu cuenta de Google si no lo has hecho ya y pulsa **Permitir**.

**Actualiza** la Hoja de Cálculo de Google en la que comenzaste. Si todo ha ido bien, aparecerá en el menú la opción **ZoltarScript** a la derecha de Ayuda.

## Uso

La primera vez que vayas a usarlo en una Hoja de Cálculo de Google, elige la opción en el menú **ZoltarScript -> Preparar hoja**. Esto borrará todo lo que tengas previamente en esa hoja y escribirá las cabeceras necesarias para la ejecución del script.

En la celda debajo de Calendario pones el **nombre del Calendario de Google** en el que se crearán los eventos con las sesiones. Si el calendario no existe, lo creará.

En **Fecha inicio** pones la fecha a partir de la cuál se crearán las sesiones. Y en **Fecha fin** el último día que podrá tener sesiones.

En **Asignatura/Módulo** puedes poner el nombre de la materia, aunque luego lo que pongas aquí será el nombre de todos los eventos que se creen en el calendario, por lo que puedes poner uno a tu elección.

Debajo de **Día** y **Hora** (los primeros que aparecen) pones los días de la semana y las horas en las que tienes cada una de las sesiones. Los días los tienes que poner con la primera en mayúscula y con acento si tuviese. Es decir, deben estar escritos exactamente como en la siguiente lista: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado o Domingo. De momento, a la hora de crear el evento para cada una de las sesiones en el calendario, todas tendrán una duración de una hora. Puedes repetir días en las filas si tienes más de una sesión.

Para terminar la configuración, debajo de **Días festivos** pones las distintas fechas (una por fila) en las que la formación no va a llevarse a cabo, ya sea por ser festivo o cualquier otra circunstancia.

Si pulsas en el menú **ZoltarScript -> Generar sesiones**, se rellenará una fila por cada sesión de formación, indicando el número, fecha y hora de la misma.

Ahora puedes comenzar a planificar, escribiendo en la columna **Desarrollo** lo que harás en cada sesión.

Cuando termines, pulsa en el menú **ZoltarScript -> Sincronizar calendario**. El script creará un evento en el calendario (indicado en la primera columna) con cada sesión, incluyendo el desarrollo en la descripción. Si quieres puedes exportarlo en formato .icalc para importar las sesiones en tu aplicación favorita de calendario (si no tuviese la posibilidad de sincronizarse con un Calendario de Google).

Solo un par de aclaraciones:
- La columna opcional **Comentarios** es para rellenarla después de realizar cada sesión, pudiendo utilizarse para proponer mejoras de la misma. No tiene ningún efecto en el script, y no se traslada a ninguna parte.
- No es necesario escribir el desarrollo de una sola vez en todas las sesiones, puedes rellenar solamente una semana, por ejemplo. Cuando rellenes la siguiente semana, pulsa de nuevo en **ZoltarScript -> Sincronizar calendario** para actualizar los eventos.

## ¿Quieres colaborar?

Puedes hacerlo de muchas maneras:

- [Crea un issue para proponer una nueva función o indicar un error](https://github.com/DavidLMS/ZoltarScript/issues).
- [Mejora el script y solicita un pull request](https://github.com/DavidLMS/ZoltarScript/pulls).
- [Invítame a un café](https://ko-fi.com/davidlms):

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W714LIE)
