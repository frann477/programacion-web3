function f1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("funcion1"), 1000);
  });
}

function f2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("funcion2"), 1000);
  });
}

f1().then(mensaje => {
    console.log(mensaje);
    return f2();
  }).then(mensaje => {
    console.log(mensaje);
  });
