function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    
    if(elemento && elemento.localName === 'audio'){
        //console.log(elemento.localName);
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou seletor invalido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for ( let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla =listaDeTeclas[contador];
    const  instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        //console.log(evento.code)
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }     
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }


    //console.log(contador);
    //console.log(idAudio);
}
