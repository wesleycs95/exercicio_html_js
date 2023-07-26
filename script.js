document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoAValue = parseFloat(document.getElementById('campoA').value);
    const campoBValue = parseFloat(document.getElementById('campoB').value);

    if (campoBValue > campoAValue) {
        exibirMensagem('Formulário válido!', true);

        } else {
        exibirMensagem('O número do Campo B deve ser maior que o número do Campo A.', false);
    }
    });

    function exibirMensagem(mensagem, eValido) {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = eValido ? 'green' : 'red';
    }