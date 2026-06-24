let tamanhoFonte = 16;

function modoNoturno() {
    document.body.classList.toggle("noturno");
}

function aumentarFonte() {

    tamanhoFonte += 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";
}

function diminuirFonte() {

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";
    }
} 
