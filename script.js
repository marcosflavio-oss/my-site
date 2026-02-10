// linha do tempo dinâmica
const eventos = [
    "2028 - Conclusão do curso técnico em Informática no IFRN",
    "2030 - Graduação em Segurança Pública",
    "2032 - Aprovação no concurso da PRF",
    "2036 - Atuação em operações especiais e tecnologia policial"
];

const lista = document.getElementById("linhaTempo");

eventos.forEach(evento => {
    const li = document.createElement("li");
    li.textContent = evento;
    lista.appendChild(li);
});

// botão interativo
document.getElementById("btnMensagem").addEventListener("click", () => {
    alert("Disciplina, tecnologia e compromisso com a segurança da sociedade.");
});
