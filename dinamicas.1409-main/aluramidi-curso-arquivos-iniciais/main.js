function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

 const listaDeTeclas = document.querySelectorAll('.tecla');

 //para
 for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento listaDeTeclas[contador].classList[1];
    const idAudio = '#som_${instrumento}';

    tecla.onclik = function () {
        tocaSom(idAudio);
 }

 tecla.onkeydown = function () {

    if ('Espaço'){
tecla.classList.add(ativa){}
    }
    tecla.classList.add('ativa')
 }

 tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
 }

}

