

const busca = document.getElementById("busca");
const filtroTema = document.getElementById("filtro-tema");
const filtroGrupo = document.getElementById("filtro-grupo");
const lista = document.getElementById("lista-trabalhos");
const contador = document.getElementById("contador");
const paginacao = document.getElementById("paginacao");

const porPagina = 1;
let pagina = 1;

// Preenche os filtros
trabalhos.forEach(trabalho => {
    if (![...filtroTema.options].some(op => op.value === trabalho.tema)) {
        filtroTema.innerHTML += `<option value="${trabalho.tema}">${trabalho.tema}</option>`;
    }

    if (![...filtroGrupo.options].some(op => op.value === trabalho.grupo)) {
        filtroGrupo.innerHTML += `<option value="${trabalho.grupo}">${trabalho.grupo}</option>`;
    }
});


// Exibe os trabalhos
function mostrarTrabalhos() {
    const termo = busca.value.toLowerCase();
    const tema = filtroTema.value;
    const grupo = filtroGrupo.value;

    const resultados = trabalhos.filter(t =>
        `${t.titulo} ${t.tema} ${t.resumo} ${t.autores.join(" ")} ${t.grupo}`
        .toLowerCase().includes(termo)
        && (!tema || t.tema === tema)
        && (!grupo || t.grupo === grupo)
    );

    const totalPaginas = Math.ceil(resultados.length / porPagina);
    pagina = Math.min(pagina, Math.max(1, totalPaginas));

    const inicio = (pagina - 1) * porPagina;

    lista.innerHTML = resultados.slice(inicio, inicio + porPagina).map(t => `
        <article class="cartao">
            <img src="${t.imagem.src}" alt="${t.imagem.alt}" width="200">
            <p>${t.tema}</p>
            <p>Autores: ${t.autores.join(", ")}</p>
            <h2>${t.titulo}</h2>
            <p>${t.resumo}</p>
            <a href="trabalho.html?area=geografia&id=${t.id}">Ver pesquisa</a>
        </article>
    `).join("");

    if (busca.value !== "" || filtroTema.value !== "" || filtroGrupo.value !== "") {
    contador.textContent = `${resultados.length} pesquisa(s) encontrada(s).`;
    } else {
        contador.textContent = `${trabalhos.length} pesquisa(s) cadastrada(s).`;
    }

    paginacao.innerHTML = "";

if (totalPaginas > 1) {
    paginacao.innerHTML = `
        <nav aria-label="Paginação das pesquisas">
            <ul class="pagination justify-content-center">

                <li class="page-item ${pagina === 1 ? "disabled" : ""}">
                    <button class="page-link" data-pagina="${pagina - 1}">
                        Anterior
                    </button>
                </li>

                ${Array.from({ length: totalPaginas }, (_, i) => `
                    <li class="page-item ${pagina === i + 1 ? "active" : ""}">
                        <button class="page-link" data-pagina="${i + 1}">
                            ${i + 1}
                        </button>
                    </li>
                `).join("")}

                <li class="page-item ${pagina === totalPaginas ? "disabled" : ""}">
                    <button class="page-link" data-pagina="${pagina + 1}">
                        Próxima
                    </button>
                </li>

            </ul>
        </nav>
    `;

    paginacao.querySelectorAll("button").forEach(botao => {
        botao.addEventListener("click", () => {
            const novaPagina = Number(botao.dataset.pagina);

            if (novaPagina >= 1 && novaPagina <= totalPaginas) {
                pagina = novaPagina;
                mostrarTrabalhos();
            }
        });
    });
}
}
busca.addEventListener("input", () => {
    pagina = 1;
    mostrarTrabalhos();
});

filtroTema.addEventListener("change", () => {
    pagina = 1;
    mostrarTrabalhos();
});

filtroGrupo.addEventListener("change", () => {
    pagina = 1;
    mostrarTrabalhos();
});

mostrarTrabalhos();
