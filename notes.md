### Local Storage
- localStorage.getItem('key') es para obtener informacion guardade en el localStorage
- localStorage.setItem('key') es para crear
- localStorage.removeItem('key') sirve para eliminar lo que tenemos en localStorage
- JSON.stringify nos convierte en string javascript
- JSON.parse nos convierte en javascript

## Nota
Cada vez que querramos guardar algo en localStorage tenemos que stringifearlo (JSON.stringify()) y cada vez que querramos leer algo del localStorage tenemos que parsearlo (JSON.parse()) para volver a convertir ese string en algo de javascript

### Custome Hooks
la sintaxis usual para usar Custom Hooks es iniciar la funcion con la parabra 'use'
```
    // De esta manera react sabe que esamos usando un custom hook
    function useLocalStorage() {

    }
```