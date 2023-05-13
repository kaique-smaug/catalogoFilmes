// Listando os fimes na página filmes.html

let button = document.getElementById('button');

function getFilmes() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://localhost/ajax/filmes.json')

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let JSONFilmes = xmlHttp.responseText

            let objJSONFilmes = JSON.parse(JSONFilmes)

            // console.log(objJSONFilmes);

            for (let title in objJSONFilmes.filmes) {

                let item = objJSONFilmes.filmes[title];
                // console.log(item);

                let divRow = document.createElement('div');
                divRow.className = 'row';

                let divCol = document.createElement('div');
                divCol.className = 'col';

                let p1 = document.createElement('div');
                p1.className = `<strong>Título:</strong>  ${item.titulo}`;

                let p2 = document.createElement('p');
                p2.innerHTML = `<strong>Resumo:</strong> ${item.resumo}`;

                let genero = '';
                for (let gen in objJSONFilmes.generos) {
                    if (genero) genero += ', '

                    genero += item.generos[gen].genero;
                };

                let p3 = document.createElement('p');
                p3.innerHTML = `<strong>Gênero:</strong> ${genero}`;

                let elenco = ''
                for (let e in item.elenco) {
                    if (elenco) elenco += ', '

                    elenco += item.elenco[e].ator;
                };

                let p4 = document.createElement('p');
                p4.innerHTML = `<strong>Elenco:</strong> ${elenco}`;

                let p5 = document.createElement('p');
                p5.innerHTML = `<strong>Data de lançamento:</strong> (${item.dataLancamento.data}) (${item.dataLancamento.pais})`;

                let hr = document.createElement('hr');

                divRow.appendChild(divCol);
                divCol.appendChild(p1);
                divCol.appendChild(p2);
                divCol.appendChild(p3);
                divCol.appendChild(p4);
                divCol.appendChild(p5);
                divCol.appendChild(hr);

                document.getElementById('lista').appendChild(divRow);
            };
        };
        if(xmlHttp.readyState == 4 && xmlHttp.status == 404) {
            errorHttp();
        };
        
    };

    xmlHttp.send();

};

// Criando a funcção de erro 404

function errorHttp() {
    let error = 404;
    let divRowError = document.createElement('div');
    divRowError.className = 'row';

    let divColError = document.createElement('div');
    divColError.className = 'col';

    let pError = document.createElement('p');
    pError.innerHTML = `<strong>Error:</strong> ${error}`;
    
    divRowError.appendChild(divColError);
    divColError.appendChild(pError);

    let showError = document.querySelector('#error')
    showError.appendChild(divColError)
    console.log('ok');
}

button.addEventListener('click', () => {
    getFilmes();
});