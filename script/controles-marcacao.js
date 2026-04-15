let marcacaocheck =  doc.querySelector('#visibilidade-das-marcacoes');

marcacaocheck.addEventListener('change', function() {

    if(marcacaocheck.checked){
        marcacoes.forEach(marcacao => {
            marcacao.classList.remove('marcacao');
            marcacao.classList.add('marcacoes-ocultas');
        });
    }else{
        marcacoes.forEach(marcacao => {
            marcacao.classList.add('marcacao');
            marcacao.classList.remove('marcacoes-ocultas');
        });
    }
});

marcacoes.forEach(marcacao => {
    marcacao.addEventListener('click', function() {
        marcacoes.forEach(marcacao => {
            marcacao.classList.remove('selecionada');
        })
        marcacao.classList.add('selecionada');

        x-da-marcacao
              <label>y: <input type="number" value="50" id="y-da-marcacao"></label>
              <label>largura: <input type="number" value="120" id="largura-da-marcacao"></label>
              <label>altura: <input type="number" value="135" id="altura-da-marcacao"></label>

        marcacao.style.left
    });
});