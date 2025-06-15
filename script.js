//1 - pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".tab"); 

//2 - identificando o click no elemento da aba
abas.forEach(aba => { 
    aba.addEventListener("click", function() {

        if (aba.classList.contains("select")){
            return;
        }
        selectTab(aba)
        showTabInfo(aba)
    });
});

function selectTab(aba){
    //3 - remover o selecionado da aba que estava selecionada antes
    const abaSelecionada = document.querySelector(".tab.select");
    abaSelecionada.classList.remove("select");

    //4 - marcar a aba clicada como selecionada
    aba.classList.add("select");
}

function showTabInfo (aba) {
    //5 - esconder o conteúdo da anterior, que não está selecionada
    const infoSelecionada = document.querySelector(".info.select");
    infoSelecionada.classList.remove("select");

   //6 - mostrar o conteúdo da aba selecionada
   const idElementoInfoAba = `info-${aba.id}`
   
   const showInfo = document.getElementById(idElementoInfoAba);

   showInfo.classList.add("select")
}

const botoesProjetos = document.querySelectorAll(".projeto-titulo");

botoesProjetos.forEach(botao => {
    botao.addEventListener("click", () => {
        const descricao = botao.nextElementSibling;

        if (descricao.style.display === "block") {
            descricao.style.display = "none";
        } else {
            descricao.style.display = "block";
        }
    });
});
