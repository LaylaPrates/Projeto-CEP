// Projeto: "Buscador de Endereço (ViaCEP)"
// Objetivo: Criar uma página HTML simples onde o aluno digita um CEP (Código de Endereçamento Postal)
//e, ao clicar em um botão, a página consulta a API pública ViaCEP e preenche os campos de endereço (rua, bairro, cidade, estado) automaticamente.

// Por que este projeto?

// Relevância: É um recurso usado em 99% dos cadastros em sites brasileiros. É algo que vocês vão utilizar no mundo real.

// API Simples: A API ViaCEP é gratuita, pública, não requer chave (API Key) e é muito rápida.

// Foco nos Tópicos:

// DOM: Pegar o valor do input do CEP.

// API (fetch): Fazer a requisição para a API.

// JSON/Objetos JS: Tratar a resposta (que é um objeto JSON) e acessar suas propriedades (ex: dados.logradouro, dados.bairro).

// DOM (de novo): Preencher os campos do formulário com os valores do objeto.

//Link do VaiCEP: https://viacep.com.br/ e um exemplo de consulta: https://viacep.com.br/ws/90010001/json/

//Entrega em um repositório no github, com os arquivos e readme organizados.


/*
01001000
rua = logradouro = Praça da Sé
bairro = bairro = Sé
cidade = localidade = São Paulo
estado = estado = São Paulo
/^[0-9]{8}$/
*/

function pesquisaCEP (){

let cep = document.getElementById("cep").value;
let url = `https://viacep.com.br/ws/${cep}/json/`;
let alerta = document.getElementById("alerta");

let rua = document.getElementById("rua");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");

let valCEP = /^[0-9]{8}$/

    if(cep == ""){
        alerta.innerHTML="Preencha o CEP"
        alerta.style.color='red'
    }else if(valCEP.test(cep)){
        alerta.innerHTML=""
    }else{
        alerta.innerHTML="CEP não encontrado"
        alerta.style.color='red'
    };

    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then((viacep) => {
            rua.value = viacep.logradouro
            bairro.value = viacep.bairro
            cidade.value = viacep.localidade
            estado.value = viacep.estado

            alerta.innerHTML="CEP encontrado com sucesso"
            alerta.style.color='green'
        })
}