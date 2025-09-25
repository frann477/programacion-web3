function funcion5(cad) {
  cad = cad.toLowerCase();
  let invertida = "";
  for (let index = cad.length - 1; index >= 0; index--) {
    invertida += cad[index];
  }
  if (cad === invertida) {
    return true;
  } else {
    return false;
  }
}
let p1 = funcion5("oruro");
console.log(p1); 
let p2 = funcion5("hola");
console.log(p2);