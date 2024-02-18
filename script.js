var campoCodigo = document.querySelector("#campoCodigo");
var campoNome = document.querySelector("#campoNome");
var botao = document.querySelector("#bntPesquisar");

var tabela = document.querySelector("#tabela");
   
const jsonAcessorios = "acessorios.json"; 

botao.addEventListener("click", function(e){ 

    e.preventDefault();
    tabela.innerHTML = ``;
    buscandoPecaPeloNome(campoNome.value);
});

function buscandoPecaPeloNome(nomePeca){
  
    fetch(jsonAcessorios)
    .then(res => res.json())
    .then(dados => {

        for( var i = 0; i < dados.acessorios.length; i++){

            if(dados.acessorios[i].nomeDaPeca.includes(nomePeca.toLocaleUpperCase()) == true || dados.acessorios[i].corDaPeca.includes(nomePeca.toLocaleUpperCase()) == true){
                tabela.innerHTML += 
                `
                    <tr>
                        <td>${dados.acessorios[i].codigoDaPeca}</td>
                        <td>${dados.acessorios[i].nomeDaPeca}</td>
                        <td>${dados.acessorios[i].corDaPeca}</td>
                    </tr>
                `
            }else{

            };
        }

    });  
}
