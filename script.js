var campoCodigo = document.querySelector("#campoCodigo");
var campoNome = document.querySelector("#campoNome");
var botao = document.querySelector("#bntPesquisar");

var pecas = [{codigoDaPeca: 50291167, nomeDaPeca: "SOLEIRA EM LED RAMPAGE", corDaPeca: "Prata"},{ codigoDaPeca: 52227286, nomeDaPeca: "DIVISOR DE CAÇAMBA", corDaPeca: "Preta"}] ;

botao.addEventListener("click", function(e){
    e.preventDefault();
    buscandoPecaPeloNome(campoNome.value);
});

function buscandoPecaPeloNome(nomePeca){

var filtrandoPecaPeloNome =    

    pecas.filter(function(obj)
    {
        return obj.nomeDaPeca == nomePeca.value;
    });

    console.log(filtrandoPecaPeloNome);
}

// if(pecas[1].nomeDaPeca.includes(campoNome.value) == true){console.log(10)};

// Estou com uma ideia para essa linha de código comentada.
// Percebi que o 'includes' ele retorna true ou false se ele encontra uma string chave que eu escrever.
// Vou tentar usar isso a meu favor.