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
### useEffect
-  Si guardamos algo en un efecto no se va a ejecutar en el mismo orden de siempre, sino que se va a ejecutar después, al final, si le enviamos un segundo argumento al efecto por ejemplo un array por ejemplo el contenido de nuestro efecto solo se va a ejecutar una vez, si le enviamos un estado en particular a ese efecto éste se va a volver a ejecutar todas las veces que cambie ese estado si cambia el segundo argumento, se dispara el efecto
useEffect es un ciclo infinito
```
    console.log('Log 1');
  // React.useEffect(() => {
  //   console.log('Looooooog 2');
  // });
  // React.useEffect(() => {
  //   console.log('Looooooog 2');
  // }, []); // prevenimos que se ejecute infinitamente y solo se carga la primera vez
  React.useEffect(() => {
    console.log('Looooooog 2');
  }, [totalTodos]);
  console.log('Log 3');
```