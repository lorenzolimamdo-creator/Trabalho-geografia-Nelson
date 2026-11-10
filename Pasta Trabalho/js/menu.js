
const menu = document.getElementById("menu-links");
const botaoMenu = document.getElementById("botao-menu");

// Gera os links do menu
MENU.forEach(item => {
    menu.innerHTML += `
        <a href="${item.link}">${item.nome}</a>
    `;
});

// Destaca a página atual
const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

menu.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === paginaAtual) {
        link.style.fontWeight = "bold";
        link.setAttribute("aria-current", "page");
    }
});

// Abre e fecha o menu
botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("aberto");

    const aberto = menu.classList.contains("aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});
