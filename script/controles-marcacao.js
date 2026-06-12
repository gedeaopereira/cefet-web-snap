let marcacaocheck = doc.querySelector('#visibilidade-das-marcacoes');

marcacaocheck.addEventListener('change', function() {

    if (marcacaocheck.checked) {
        marcacoes.forEach(marcacao => {
            marcacao.classList.add('marcacoes-ocultas');
        });
    } else {
        marcacoes.forEach(marcacao => {
            marcacao.classList.remove('marcacoes-ocultas');
        });
    }

});

function atualizaControles(marcacaoEl) {

    doc.querySelector('#x-da-marcacao').value =
        parseInt(marcacaoEl.style.left);

    doc.querySelector('#y-da-marcacao').value =
        parseInt(marcacaoEl.style.top);

    doc.querySelector('#largura-da-marcacao').value =
        parseInt(marcacaoEl.style.width);

    doc.querySelector('#altura-da-marcacao').value =
        parseInt(marcacaoEl.style.height);

    doc.querySelector('#titulo-da-marcacao').value =
        marcacaoEl.dataset.titulo;

    doc.querySelector('#conteudo-da-marcacao').value =
        marcacaoEl.dataset.conteudo;

    doc.querySelector('#cor-da-marcacao').value =
        marcacaoEl.dataset.cor;

    const formato = marcacaoEl.classList.contains('formato-oval')
        ? 'formato-oval'
        : 'formato-retangular';

    doc.querySelector(`input[value="${formato}"]`).checked = true;
}

const radiosFormato = doc.querySelectorAll('input[name="formato-da-marcacao"]');

radiosFormato.forEach(radio => {

    radio.addEventListener('change', function() {

        const marcacaoSelecionada =
            doc.querySelector('.marcacao.selecionada');

        if (!marcacaoSelecionada) {
            return;
        }

        marcacaoSelecionada.classList.remove('formato-oval');
        marcacaoSelecionada.classList.remove('formato-retangular');

        marcacaoSelecionada.classList.add(radio.value);

    });

});

marcacoes.forEach(marcacao => {

    marcacao.addEventListener('click', function() {

        marcacoes.forEach(m => {
            m.classList.remove('selecionada');
        });

        marcacao.classList.add('selecionada');

        atualizaControles(marcacao);

    });

});

const campoX = doc.querySelector('#x-da-marcacao');
const campoY = doc.querySelector('#y-da-marcacao');
const campoLargura = doc.querySelector('#largura-da-marcacao');
const campoAltura = doc.querySelector('#altura-da-marcacao');

function atualizarMarcacao() {

    const marcacaoSelecionada =
        doc.querySelector('.marcacao.selecionada');

    if (!marcacaoSelecionada) {
        return;
    }

    marcacaoSelecionada.style.left = campoX.value + 'px';
    marcacaoSelecionada.style.top = campoY.value + 'px';
    marcacaoSelecionada.style.width = campoLargura.value + 'px';
    marcacaoSelecionada.style.height = campoAltura.value + 'px';
}

campoX.addEventListener('input', atualizarMarcacao);
campoY.addEventListener('input', atualizarMarcacao);
campoLargura.addEventListener('input', atualizarMarcacao);
campoAltura.addEventListener('input', atualizarMarcacao);