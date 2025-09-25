// promesas anidadas
function funcion1() {
  return new Promise(resolve => 
    setTimeout(() => resolve("funcion 1"), 1000));
}
function funcion2() {
  return new Promise(resolve => 
    setTimeout(() => resolve("funcion 2"), 1000));
}

funcion1()
  .then(mensaje => {
    console.log(mensaje);
    return funcion2();
  })
  .then(mensaje => {
    console.log(mensaje);
  });

// usando async
async function funcion() {
  let a1 = await funcion1();
  console.log(a1);
  let a2 = await funcion2();
  console.log(a2);
}
funcion();
