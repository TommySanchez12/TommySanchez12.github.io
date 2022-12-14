window.onload= function(){
    
    const IMAGENES = [
        'img/paisaje1.jpg',
        'img/paisaje2.jpg',
        'img/paisaje3.jpg',
    ];

let posicionActual =0;
let $botonRetroceder = document.querySelector ('#retroceder');
let $botonAvanzar = document.querySelector ('#avanzar');
let $imagen = document.querySelector ('#imagen');



function pasarFoto(){
    if(posicionActual >= IMAGENES.length -1 ){
        posicionActual = 0;
    }else{
        posicionActual++;
    }
    renderizarImagen();
}


function retrocederFoto(){
    if(posicionActual <= 0) {
        posicionActual = IMAGENES.length -1 ;
        
    }else{
        posicionActual--;
    }
    renderizarImagen();
}


function renderizarImagen() {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}

$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
renderizarImagen();
}