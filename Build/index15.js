function callback(x) {
  setTimeout(() => {
    x("con callback");
  }, 1000);
}

function callbackComoPromesa() {
  return new Promise(resolve => {
    callback(resultado => 
    {
      resolve(resultado);
    });
  });
}

callbackComoPromesa().then(mensaje => 
    console.log("conv a promesa ", mensaje));
