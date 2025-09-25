function miPromesa() {
  return new Promise(resolve => {
    setTimeout(() =>
         resolve("promesa1"), 1000);
  });
}

function promesaComoCallback(callback) {
  miPromesa().then(resultado => callback(resultado));
}

promesaComoCallback(function(mensaje) {
  console.log("callback ", mensaje);
});
