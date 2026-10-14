let tamanhoFonte = 16;

const tamanhoMinimo = 12;
const tamanhoMaximo = 28;
const passoFonte = 2;

function modoNoturno() {
    document.body.classList.toggle("noturno");

    const ativado = document.body.classList.contains("noturno");

    const botao = document.querySelector(
        'button[onclick="modoNoturno()"]'
    );

    if (botao) {
        botao.setAttribute("aria-pressed", String(ativado));
        botao.textContent = ativado
            ? "Modo claro"
            : "Modo noturno";
    }
}

function atualizarFonte() {
    document.body.style.fontSize = `${tamanhoFonte}px`;

    // Mantém o tamanho da fonte sincronizado com o documento.
    document.documentElement.style.setProperty(
        "--tamanho-fonte",
        `${tamanhoFonte}px`
    );
}

function aumentarFonte() {
    tamanhoFonte = Math.min(
        tamanhoFonte + passoFonte,
        tamanhoMaximo
    );

    atualizarFonte();
}

function diminuirFonte() {
    tamanhoFonte = Math.max(
        tamanhoFonte - passoFonte,
        tamanhoMinimo
    );

    atualizarFonte();
}

 
