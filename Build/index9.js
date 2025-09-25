function funcion9() {
  return new Promise(function(resolve, reject) {
    setTimeout((x)=> {
      resolve("hola en 3seg");
    }, 3000);
  });
}

funcion9().then(function(mensaje) {
  console.log(mensaje);
});
