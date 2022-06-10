import './scss/estilos.scss';
import urlGato1 from './imgs/gato01.png';
import urlGato2 from './imgs/gato02.png';

const imgs = [{ url: urlGato1 }, { url: urlGato2 }];

const lienzo = document.getElementById('lienzo');
const lienzo2 = document.createElement('canvas');
const ctx = lienzo.getContext('2d');
const ctx2 = lienzo2.getContext('2d');

lienzo.width = lienzo2.width = 512;
lienzo.height = lienzo2.height = 512;

Object.assign(lienzo.style, {
  width: '512px',
  height: '512px',
});

Object.assign(lienzo2.style, {
  width: '512px',
  height: '512px',
});

function cargarImgs() {
  let contador = 0;
  const total = imgs.length;

  imgs.forEach((instanciaImagen) => {
    const img = new Image();
    img.onload = () => {
      instanciaImagen.img = img;
      contador++;

      if (contador === total) {
        inicio();
      }
    };
    img.src = instanciaImagen.url;
  });
}

function inicio() {
  console.log(imgs, imgs[0].img.naturalWidth);

  ctx2.drawImage(imgs[0].img, 0, 0);
  const datosImg1 = ctx2.getImageData(0, 0, lienzo2.width, lienzo2.height);
  ctx2.drawImage(imgs[1].img, 0, 0);
  const datosImg2 = ctx2.getImageData(0, 0, lienzo2.width, lienzo2.height);
  const pixeles1 = datosImg1.data;
  const pixeles2 = datosImg2.data;

  // ctx.
}

cargarImgs();
