function miFuncion1(texto) {
  let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  texto = texto.toLowerCase();
  for (let index = 0; index < texto.length; index++) {
    let letra = texto[index];
    if (letra === "a") vocales.a++;
    if (letra === "e") vocales.e++;
    if (letra === "i") vocales.i++;
    if (letra === "o") vocales.o++;
    if (letra === "u") vocales.u++;
  }
  return vocales;
}
let voc = miFuncion1("euforia");
console.log(voc); 