/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  arreglo = [];
  for (var clave in objeto) {
    arreglo.push([clave, objeto[clave]]);
  }
  return arreglo;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var arregloLetras = [];
  var objeto = {};
  arregloLetras = string.split("");
  arregloLetras.sort();
  for (var letra of arregloLetras) {
    if (!objeto[letra]) {
      //preguntamos si no existe la letra en el objeto
      objeto[letra] = 1; //Si no existe la creamos y le asignamos el numero 1
    } else {
      objeto[letra] += 1; //Si existe se suma
    }
  }
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var arreglo = string.split("");
  var mayusculas = [];
  var minusculas = [];
  for (var letra of arreglo) {
    if (letra === letra.toUpperCase()) {
      mayusculas.push(letra);
    } else {
      minusculas.push(letra);
    }
  }
  return mayusculas.join("") + minusculas.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arreglo = frase.split(" ");
  var final = [];
  for (var palabra of arreglo) {
    var reves = palabra.split("");
    reves.reverse();
    final.push(reves.join(""));
  }
  return final.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  num2 = numero.toString();
  var reves = num2.split("").reverse().join("");
  if (numero == reves) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var final = [];
  var arreglo = string.split("");
  for (var letra of arreglo) {
    if (letra !== "a" && letra !== "b" && letra !== "c") {
      final.push(letra);
    }
  }
  return final.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort(function (a, b) {
    return a.length - b.length;
  });
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var arreglo = [];
  for (var num1 of array1) {
    for (var num2 of array2) {
      if (num1 === num2) {
        arreglo.push(num1);
      }
    }
  }
  return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
