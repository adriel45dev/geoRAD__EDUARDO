// Obtém uma coleção de elementos com a classe 'button'
const buttons = document.getElementsByClassName("forma");

// Adiciona um evento de clique a cada botão na coleção
for (const button of buttons) {
  button.addEventListener("click", () => {
    overlay.style.display = "flex"; // Exibe a tela de sobreposição
    // window.alert("ola");
  });
}

fecharBtn.addEventListener("click", () => {
  overlay.style.display = "none"; // Oculta a tela de sobreposição
});
