// Configuração inicial
const scene = new THREE.Scene();

scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Função para atualizar o tamanho da câmera ao redimensionar a janela
window.addEventListener("resize", () => {
  const newWidth = window.innerWidth * 0.6;
  const newHeight = window.innerHeight * 0.6;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

// Criação de uma forma
// const geometry = new THREE.BoxGeometry();
let geometry = formas.cubo();

let material = new THREE.MeshBasicMaterial({
  color: 0x3293a8,
  wireframe: true,
});

let forma = new THREE.Mesh(geometry, material);

// Escala da forma
forma.scale.set(1.9, 1.9, 1.9); // Define a escala em x, y e z para duplicar o tamanho

scene.add(forma);

// Movimentação da câmera
camera.position.z = 5;

// Renderização da cena
const animate = (forma) => {
  requestAnimationFrame(() => animate(forma));

  // Rotação da forma
  forma.rotation.x += 0.01;
  forma.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate(forma);

let selectedForma = "cubo";

const novaForma = (wireframeState) => {
  scene.clear();
  material = new THREE.MeshBasicMaterial({
    color: 0x3293a8,
    wireframe: wireframeState,
  });

  geometry = formas[selectedForma]();
  forma = new THREE.Mesh(geometry, material);

  forma.scale.set(1.9, 1.9, 1.9);
  scene.add(forma);
  animate(forma);
};

document.querySelectorAll(".forma").forEach((btnForma) => {
  btnForma.addEventListener("click", (e) => {
    const { name } = e.target;
    selectedForma = name;
    novaForma(true);
  });
});

// evento preencher
document.querySelector(".fill").addEventListener("change", (e) => {
  const { checked } = e.target;
  novaForma(!checked);
});
