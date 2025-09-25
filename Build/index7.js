function miFuncion7(arr) {
  let [ , , ...resto] = arr; 
  console.log("resto:", resto);
}
miFuncion7([10, 20, 30, 40, 50]); 
