/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:
  var nombre2 = nombre[0].toUpperCase();
  for (var i = 1; i < nombre.length; i++) {
    nombre2 += nombre[i];
  }
  return nombre2;
  //let resto = nombre.substr(1); //devuelve todos los caracteres desde la posición 1
  //return nombre2 + resto;
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  cb();
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
  return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  var suma = 0;
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    suma += arrayOfNumbers[i];
  }
  cb(suma);
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    cb(array[i]);
  }
  //array.forEach((element) => {cb(element);});
}

function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    array2[i] = cb(array[i]);
    //array2.push(cb(array[i]);
  }
  //array.forEach(elemento => {array2.push(cb(elemento));});
  return array2;
}

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var arreglo = [];
  arrayOfStrings.forEach((element) => {
    if (element[0] === "a") {
      arreglo.push(element);
    }
  });
  //arreglo = arrayOfStrings.filter(element =>element[0]==="a");
  return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
