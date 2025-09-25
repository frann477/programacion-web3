//con callback
function tarea1(x) {
  setTimeout(() => {
    console.log("hola tarea1");
    x();
  }, 1000);
}

function tarea2(x) {
  setTimeout(() => {
    console.log("tarea 2..");
    x();
  }, 1000);
}

tarea1(() => {
  tarea2(() => {
    console.log("la vida sigue");
  });
});

// con async
function miPromesa() {
  return new Promise(resolve => setTimeout(() => {
    console.log("hola tarea 1 en async");
    resolve();
  }, 1000));
}

function miPromesa() {
  return new Promise(resolve => setTimeout(() => {
    console.log("hola tarea 2 en async");
    resolve();
  }, 1000));
}

async function funcion() {
  await miPromesa();
  await miPromesa();
  console.log("la vida sigue async");
}
funcion();
