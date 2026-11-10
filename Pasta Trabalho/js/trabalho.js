
// Elementos da página
const busca = document.getElementById("busca");
const filtroTema = document.getElementById("filtro-tema");
const filtroGrupo = document.getElementById("filtro-grupo");
const lista = document.getElementById("lista-trabalhos");
const contador = document.getElementById("contador");

// Preenche os filtros com os dados existentes
trabalhos.forEach(trabalho => {
    if (![...filtroTema.options].some(opcao => opcao.value === trabalho.tema)) {
        filtroTema.innerHTML += `
            <option value="${trabalho.tema}">${trabalho.tema}</option>
        `;
    }

    if (![...filtroGrupo.options].some(opcao => opcao.value === trabalho.grupo)) {
        filtroGrupo.innerHTML += `
            <option value="${trabalho.grupo}">${trabalho.grupo}</option>
        `;
    }
});

// Exibe os cartões
function mostrarTrabalhos(listaTrabalhos) {
    lista.innerHTML = "";

    listaTrabalhos.forEach(trabalho => {
        lista.innerHTML += `
            <article class="cartao">
                <img
                    src="${trabalho.imagem.src}"
                    alt="${trabalho.imagem.alt}"
                    width="200"
                >

                <p>${trabalho.tema}</p>
                <p>Autores: ${trabalho.autores.join(", ")}</p>

                <h2>${trabalho.titulo}</h2>

                <p>${trabalho.resumo}</p>

                <a href="trabalho.html?area=geografia&id=${trabalho.id}">
                    Ver pesquisa
                </a>
            </article>
        `;
    });

    contador.textContent = `${listaTrabalhos.length} pesquisa(s) encontrada(s).`;
}

// Aplica a busca e os filtros
function filtrarTrabalhos() {
    const termo = busca.value.toLowerCase();
    const tema = filtroTema.value;
    const grupo = filtroGrupo.value;

    const resultados = trabalhos.filter(trabalho => {
        const conteudo = [
            trabalho.titulo,
            trabalho.tema,
            trabalho.resumo,
            trabalho.autores.join(" "),
            trabalho.grupo,
            trabalho.texto.join(" ")
        ].join(" ").toLowerCase();

        return conteudo.includes(termo)
            && (tema === "" || trabalho.tema === tema)
            && (grupo === "" || trabalho.grupo === grupo);
    });

    mostrarTrabalhos(resultados);
}

// Atualiza os resultados quando os controles mudam
busca.addEventListener("input", filtrarTrabalhos);
filtroTema.addEventListener("change", filtrarTrabalhos);
filtroGrupo.addEventListener("change", filtrarTrabalhos);

// Exibe todas as pesquisas inicialmente
mostrarTrabalhos(trabalhos);
