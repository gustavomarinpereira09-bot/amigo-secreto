let nomesSorteio = [];

function adicionar() {
    let nomes = document.getElementById('nome-amigo');
    if (nomes.value == '') {
        alert('Informe um Nome!');
        return;
    }

    if (nomesSorteio.includes(nomes.value)) {
        alert('Informe outro nome não existente!');
        return;
       // nomes.value = '';
    }
    let lista = document.getElementById('lista-amigos');
    nomesSorteio.push(nomes.value);
    lista.textContent = nomesSorteio.join(', '); 

    nomes.value = '';
}

function sortear() {
    if (nomesSorteio.length <= 2) {
        alert('Adicione no minimo 3 nomes!');
        return;
    }
    embaralha(nomesSorteio);
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < nomesSorteio.length; i++) {
        if ( i == nomesSorteio.length - 1) {
            listaSorteio.innerHTML += nomesSorteio[i] + ' --> ' + nomesSorteio[0] + '<br>';
        } else {
            listaSorteio.innerHTML += nomesSorteio[i] + ' --> ' + nomesSorteio[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    nomesSorteio = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

