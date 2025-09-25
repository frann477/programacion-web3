function funcion3(arr) {
  let obj = { pares: [], impares: [] };
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      obj.pares.push(arr[index]);
    } else {
      obj.impares.push(arr[index]);
    }
  }
  return obj;
}
let array = funcion3([1, 2, 3, 4, 5]);
console.log(array); 
