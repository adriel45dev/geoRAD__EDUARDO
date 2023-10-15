const formas = (() => {
  const cubo = () => {
    return new THREE.BoxGeometry();
  };

  const capsula = () => {
    return new THREE.CapsuleGeometry(1, 2, 4, 8);
  };

  const cone = () => {
    return new THREE.ConeGeometry(1, 2, 12);
  };

  const cilindro = () => {
    return new THREE.CylinderGeometry(1, 1, 2, 32);
  };

  const esfera = () => {
    return new THREE.SphereGeometry(1, 32, 32);
  };

  const tetraedro = () => {
    return new THREE.TetrahedronGeometry(1);
  };

  const dodecaedro = () => {
    return new THREE.DodecahedronGeometry(1);
  };

  const icosaedro = () => {
    return new THREE.IcosahedronGeometry(1);
  };
  const octaedro = () => {
    return new THREE.OctahedronGeometry(1);
  };
  const prisma = () => {
    return new THREE.BoxGeometry(1, 2, 3);
  };
  const piramide = () => {
    return new THREE.ConeGeometry(1, 1, 4);
  };
  const piramide_pentagonal = () => {
    return new THREE.ConeGeometry(1, 2, 5);
  };

  return {
    cubo,
    esfera,
    capsula,
    cone,
    cilindro,
    tetraedro,
    dodecaedro,
    icosaedro,
    octaedro,
    prisma,
    piramide,
    piramide_pentagonal,
  };
})();
