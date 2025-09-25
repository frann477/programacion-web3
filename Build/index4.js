function funcion4(arr) {
  let mayor = arr[0];
  let menor = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > mayor) {
      mayor = arr[index];
    }
    if (arr[index] < menor) {
      menor = arr[index];
    }
  }
  return { mayor: mayor, menor: menor };
}
let det = funcion4([3, 1, 5, 4, 2]);
console.log(det); 