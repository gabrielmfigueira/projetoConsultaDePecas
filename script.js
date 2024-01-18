var campoCodigo = document.querySelector("#campoCodigo");
var campoNome = document.querySelector("#campoNome");
var botao = document.querySelector("#bntPesquisar");

var tabela = document.querySelector("#tabela");

var pecas = [{codigoDaPeca: 50291167, nomeDaPeca: "SOLEIRA EM LED RAMPAGE", corDaPeca: "PRATA"},{ codigoDaPeca: 52227286, nomeDaPeca: "DIVISOR DE CAÇAMBA", corDaPeca: "PRETA"}] ;

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

// if(pecas[1].nomeDaPeca.includes(campoNome.value) == true){console.log(10)};

// Estou com uma ideia para essa linha de código comentada.
// Percebi que o 'includes' ele retorna true ou false se ele encontra uma string chave que eu escrever.
// Vou tentar usar isso a meu favor.