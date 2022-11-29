var imagenes = ['img/paisaje2.jpg','img/paisaje1.jpg','img/paisaje3.jpg']
    cont = 0;

function carrusel(contenedor1){
    contenedor1.addEventListener('click', e => {
        let atras = contenedor1.querySelector('.atras'),
            adelante = contenedor1.querySelector('.adelante'),
            img = contenedor1.querySelector('img'),
            tgt = e.Target;


            if(tgt == atras){
                if (cont > 0) {
                    img.src = imagenes[cont - 1];
                    cont--;
                }else{
                    img.src = imagenes[imagenes.length -1];
                    cont = imagenes.length -1;
                }
            }else if (tgt == adelante) {
                if (cont < imagenes.length-1) {
                    img.src = imagenes[cont + 1];
                    cont++;
                }else{
                    img.src = imagenes[0];
                    cont = 0;
                }
            }

    });
}

document.addEventListener("DOMContentLoaded", () => {
        let contenedor1 = document.querySelector('.contenedor1');

        carrusel(contenedor1);

});
