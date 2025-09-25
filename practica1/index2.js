function funcion2(cad) {
  let invertida = "";
  for (let index = cad.length - 1; index >= 0; index--) {
    invertida += cad[index];
  }
  return invertida;
}
let cad = funcion2("abcd");
console.log(cad); 