let doc = document;

let bodyEl = doc.querySelector('body');

let balaozinho =  doc.querySelector('#balaozinho');

let marcacoes =  doc.querySelectorAll('.marcacao');

let movermause = (e) =>{
    balaozinho.style.top = e.pageY+'px';
    balaozinho.style.left = e.pageX+'px';
};

marcacoes.forEach(marcacao => {

    marcacao.addEventListener('mouseover', () => {
        balaozinho.style.color = marcacao.getAttribute('data-cor');
        balaozinho.innerHTML = '<h2>'+marcacao.getAttribute('data-titulo')+'</h2>\n ';
        '<p>'+marcacao.getAttribute('data-conteudo')+'</p>';
        bodyEl.addEventListener('mousemove', movermause);
    });

    marcacao.addEventListener('mouseout', () => {
        balaozinho.innerHTML = '';
        bodyEl.removeEventListener('mousemove',movermause);
    });
    
});
