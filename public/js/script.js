function esconderSenha() {
  const senhaInput = document.getElementById("senha");
  const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
  senhaInput.setAttribute("type", tipo);
}


//Carrossel do home funcionando no mouse e no dedo
 const carrossel = document.getElementById('carrossel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carrossel.addEventListener('mousedown', (e) => {
      isDown = true;
      carrossel.classList.add('active');
      startX = e.pageX - carrossel.offsetLeft;
      scrollLeft = carrossel.scrollLeft;
    });

    carrossel.addEventListener('mouseleave', () => {
      isDown = false;
      carrossel.classList.remove('active');
    });

    carrossel.addEventListener('mouseup', () => {
      isDown = false;
      carrossel.classList.remove('active');
    });

    carrossel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carrossel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carrossel.scrollLeft = scrollLeft - walk;
    });

    // Suporte a toque (mobile)
    carrossel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX - carrossel.offsetLeft;
      scrollLeft = carrossel.scrollLeft;
    });

    carrossel.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - carrossel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carrossel.scrollLeft = scrollLeft - walk;
    });