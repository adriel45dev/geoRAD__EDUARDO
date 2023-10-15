const nomes = Array.from(document.querySelectorAll(".name"));

const buscar = (str) => {
  nomes.forEach((nome) => {
    if (!nome.textContent.toLocaleLowerCase().includes(str.toLowerCase())) {
      nome.closest(".content").classList.add("hidden");
    }
  });
};

const reset = () => {
  document.querySelectorAll(".content.hidden").forEach((e) => {
    e.classList.remove("hidden");
  });
};

const input = document.querySelector("input");
input.addEventListener("keyup", (e) => {
  const { value } = e.target;

  if (value == "") {
    reset();
  } else {
    buscar(value);
  }
});
