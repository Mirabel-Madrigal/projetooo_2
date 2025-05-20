const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for (let i = 0; i <botoes.leng; i++){
    botoes [i].onclick = function (){

        for (let j = 0; j <botoes.length; j++){
            botoes[j].classlist.remove("ativo");
            textos[j].classList.remove("ativo");
        }
    
        botoes[i].classlist.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const contadores = document.querySelectorAll ("contador");
const tempoObjetivo1 = new Date ("2025-08-26t00:00:00");