

const imagem = document.querySelector(".img-prin");
const circulo = document.querySelector(".circulo");


function trocarImagem(foto) {
  if (imagem) {
    imagem.src = foto;
  } else {
    console.error("❌ Elemento .img-prin não encontrado!");
  }
}


function trocaCor(cor) {
  if (circulo) {
    circulo.style.background = cor;
  } else {
    console.error("❌ Elemento .circulo não encontrado!");
  }
}
