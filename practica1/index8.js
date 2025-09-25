function funcion8(callback) {
  setTimeout(function() {
    callback();
  }, 2000); 
}

funcion8(x=()=> {
  console.log("hola en 2seg");
});
