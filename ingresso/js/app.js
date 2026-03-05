pistaCompradas = 0;
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = document.getElementById('qtd').value;
    // Calculo da quantidade de ingressos restantes para pista e atualização do valor exibido na tela
    if (tipoIngresso === 'pista') {
        let pista = document.getElementById('qtd-pista');
        let quantidadePista = parseInt(pista.textContent);
        pistaCompradas = quantidadePista - quantidadeIngresso;
        pista.textContent = pistaCompradas;
        // Verificar se a quantidade de ingressos da pista solicitada é maior do que a quantidade disponível
        if (quantidadeIngresso > quantidadePista) {
            alert('Quantidade de ingressos indisponível para pista!');
        } else {
            alert('Compra da pista realizada com sucesso!');
        }

    // Calculo da quantidade de ingressos restantes para cadeira inferior e atualização do valor exibido na tela
    } else if (tipoIngresso === 'inferior') {
        let inferior = document.getElementById('qtd-inferior');
        let quantidadeInferior = parseInt(inferior.textContent);
        inferiorComprados = quantidadeInferior - quantidadeIngresso;
        inferior.textContent = inferiorComprados;
        // Verificar se a quantidade de ingressos da cadeira inferior solicitada é maior do que a quantidade disponível
        if (quantidadeIngresso > quantidadeInferior) {
            alert('Quantidade de ingressos indisponível para cadeira inferior!');
        } else {
            alert('Compra da cadeira inferior realizada com sucesso!');
        }

    // Calculo da quantidade de ingressos restantes para cadeira superior e atualização do valor exibido na tela
    } else {
        let superior = document.getElementById('qtd-superior');
        let quantidadeSuperior = parseInt(superior.textContent);
        superiorComprados = quantidadeSuperior - quantidadeIngresso;
        superior.textContent = superiorComprados;
        // Verificar se a quantidade de ingressos da cadeira superior solicitada é maior do que a quantidade disponível
        if (quantidadeIngresso > quantidadeSuperior) {
            alert('Quantidade de ingressos indisponível para cadeira superior!');
        } else {
            alert('Compra da cadeira superior realizada com sucesso!');
        }
    }
}