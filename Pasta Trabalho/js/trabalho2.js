
const detalhes = document.getElementById("detalhes-trabalho");

// Identifica a pesquisa pelo ID na URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const trabalho = trabalhos.find(item => item.id === id);

// Exibe a pesquisa
if (trabalho) {
    detalhes.innerHTML = `
        <article>
            <h1>${trabalho.titulo}</h1>

            <p>Modalidade: ${trabalho.modo}</p>
            <p>Autores: ${trabalho.autores.join(", ")}</p>
            <p>${trabalho.grupo}</p>
            <p>Data: ${trabalho.data}</p>

            <img
                src="${trabalho.imagem.src}"
                alt="${trabalho.imagem.alt}"
                width="100%"
            >

            <p>${trabalho.resumo}</p>

            ${trabalho.texto.map(paragrafo => `
                <p>${paragrafo}</p>
            `).join("")}

            ${trabalho.video ? `
                <video controls width="100%">
                    <source src="${trabalho.video}" type="video/mp4">
                </video>
            ` : ""}

            <h2>Fontes consultadas</h2>

            ${trabalho.links.map(link => `
                <p>
                    <a href="${link.url}" target="_blank" rel="noopener">
                        ${link.nome}
                    </a>
                </p>
            `).join("")}
        </article>
    `;
} else {
    detalhes.innerHTML = `
        <h1>Pesquisa não encontrada</h1>
        <p>Não foi possível localizar essa pesquisa.</p>
        <a href="geografia.html">Voltar às pesquisas</a>
    `;
}
