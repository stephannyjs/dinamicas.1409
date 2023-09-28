// Pom ---------------------------------------- 
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

 const listaDeTeclas = document.querySelectorAll('.tecla');

 listaDeTeclas[0].onclik = tocaSomPom

 //enquanto
 while (contador < listaDeTeclas.length){
  
    listaDeTeclas[contador].onclik = tocaSomPom

contador = contador + 1;

console.log(contador)
 }
