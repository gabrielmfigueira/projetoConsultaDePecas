var campoCodigo = document.querySelector("#campoCodigo");
var campoNome = document.querySelector("#campoNome");
var botao = document.querySelector("#bntPesquisar");

var tabela = document.querySelector("#tabela");

var pecas = [{codigoDaPeca: 50291167, nomeDaPeca: "SOLEIRA EM LED RAMPAGE", corDaPeca: "PRATA"},
             {codigoDaPeca: 52227286, nomeDaPeca: "DIVISOR DE CAÇAMBA", corDaPeca: "PRETA"}
            ];

botao.addEventListener("click", function(e){
    e.preventDefault();
    tabela.innerHTML = ``;
    buscandoPecaPeloNome(campoNome.value);
});

function buscandoPecaPeloNome(nomePeca){

    for( var i = 0; i < pecas.length; i++){

        if(pecas[i].nomeDaPeca.includes(nomePeca.toLocaleUpperCase()) == true){
            tabela.innerHTML += 
            `
                <tr>
                    <td>${pecas[i].codigoDaPeca}</td>
                    <td>${pecas[i].nomeDaPeca}</td>
                    <td>${pecas[i].corDaPeca}</td>
                </tr>
            `
        }else{

        }
    }
}

function buscandoPecaPeloCodigo(nomePeca){

}