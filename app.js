// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = []; // variable declarada array o lista

function agregarAmigo() { //funcion para asignar el id amigo de HTML que es el texto o nombre que se ingresa
  let nombre = document.getElementById("amigo").value;
  if (nombre ==="") {
    alert(`Por favor, inserte un nombre`);
    return;
  }
  listaDeAmigos[listaDeAmigos.length] = nombre; // añade un nuevo elemento a listaDeAmigos
  document.getElementById("amigo").value = ""; //Limpia el campo de entrada luego de ingresar nombre y boton

  let mostrarLista = ""; 
  for(let i=0; i< listaDeAmigos.length; i++){ //para i=o, i tiene que ser menor a array, y aumenta 1
    mostrarLista = mostrarLista + "<li>" + listaDeAmigos[i] + "<li>"; //variable mostrar lista se agrega nuevos nombres de listaDeAmigos
}
document.getElementById("listaAmigos").innerHTML = mostrarLista; //Inserta el HTML acumulado de mostrar lista con todos los nombres como una lista en la web.
document.getElementById("resultado").innerHTML = "";// limpia el ganador de sorteo
}
function sortearAmigo(){ // funcion para asignar el amigo ganador y no puede estar vacio los datos
  if(listaDeAmigos.length=== 0){ 
    alert(`Por favor, Agregue al menos un nombre`); 
    return;
  }
  let valorAleatorio = Math.floor(Math.random() * listaDeAmigos.length);// razon matematica para calcular un valor aleatorio entre 0 y 0.99 y elegir uno al azar
  let nombreSorteado = listaDeAmigos[valorAleatorio]; 
  document.getElementById("resultado").innerHTML = `<li>${nombreSorteado}</li>`;//Muestra el nombre sorteado en la lista con ID resultado
  listaDeAmigos = []; // vacía la lista
  document.getElementById("amigo").value = ""; // limpia el input
  }

