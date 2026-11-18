

const botao = document.getElementById("verificar-resposta");
const resultado = document.getElementById("resultado-atividade");

const respostasCorretas = {
    q1: "b",
    q2: "c",
    q3: "a",
    q4: "b"
};

botao.addEventListener("click", () => {
    let acertos = 0;
    let respondidas = 0;

    for (const questao in respostasCorretas) {
        const resposta = document.querySelector(
            `input[name="${questao}"]:checked`
        );

        if (resposta) {
            respondidas++;

            if (resposta.value === respostasCorretas[questao]) {
                acertos++;
            }
        }
    }

    if (respondidas < 4) {
        resultado.textContent = "Responda às quatro questões antes de verificar.";
    } else {
        resultado.textContent = `Você acertou ${acertos} de 4 questões.`;
    }
});
