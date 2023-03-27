### Problema
La fecha es 20 de marzo de 2015, trabajando en Reddit se le ocurre como broma de "April fools day" realizar sacar una sección de la página que contenga un botón grande y un contador que indica una cantidad descendente de segundos. 

El contador desciende de 60 segundos a 0 y solo se resetea si alguien con la página abierta presiona el botón. Solo se pude presionar una vez por usuario y cuando un usuario lo presiona le queda asignado como recuerdo un color en función de esta tabla.

### Requirement
Que se realize una single page application que implemente la idea del botón considerando los siguientes aspectos:

- El 'clickeo' del botón es una acción irreversible. Se desea evitar presiones accidentales.
- Se pide que la single page sea minimalista.
- Dado que es para una broma, no se debe explicar nada de como funciona el botón de manera explicita.
- Se puede tomar decisiones de cuanta y que tipo de información contextual proveer.
- Simular clicks de otra gente y que todo funcione de manera offline ( con alguna función de random estándar ).

### Extras
De manera adicional se podrá desarrollar cualquiera de los siguientes puntos:

- Utilizar Angular 7 como framework. Se puede usar Angular Material como libreria de UX.
- Sumar visualizaciones para los distintos eventos que ocurren de manera automática.
- Sumar visualizaciones para indicar el color del usuario.
- Llevar un registro de los clicks automáticos y mostrar alguna estadística o visualización relacionada.
