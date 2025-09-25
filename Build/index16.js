// con promesa
function miPromesa() {
  return new Promise(resolve => {
    setTimeout(() => resolve("mipromesa1"), 1000);
  });
}

miPromesa().then(mensaje => console.log("con promesa: ", mensaje));

// con async
async function funcioncAsync() {
  let mensaje = await miPromesa();
  console.log("con async: ", mensaje);
}
funcioncAsync();
