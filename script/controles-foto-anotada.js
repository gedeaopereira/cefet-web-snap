const seletorFiltro = doc.querySelector('#filtro-da-foto');
const imagem = doc.querySelector('.foto-anotada > img');

seletorFiltro.addEventListener('change', function(event) {
    imagem.style.filter = event.target.value;
});
