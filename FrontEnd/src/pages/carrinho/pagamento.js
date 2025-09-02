document.addEventListener("DOMContentLoaded", () => {
  const manivela = document.getElementById("manivela-rodar");
  const numeroCartao = document.getElementById("numero-cartao");
  
  let numero = 0;
  let isRotating = false;
  let startAngle = 0;
  let currentAngle = 0;

  // Função para iniciar a rotação
  manivela.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isRotating = true;
    startAngle = e.clientX;
    manivela.style.transition = 'none'; // Remover transições para rotação mais suave
  });

  // Função para realizar a rotação
  document.addEventListener("mousemove", (e) => {
    if (isRotating) {
      let delta = e.clientX - startAngle;
      let newAngle = currentAngle + delta;

      // Aplica a rotação ao botão
      manivela.style.transform = `rotate(${newAngle}deg)`;

      // Atualiza o número do cartão conforme a rotação
      if (Math.abs(newAngle) > 100) {
        let rotationIncrement = Math.floor(newAngle / 100);
        numero += rotationIncrement;
        if (numero > 999) {
          numero = 0;
        }
        numeroCartao.textContent = numero.toString().padStart(3, "0");

        // Atualiza o ângulo para o próximo movimento
        startAngle = e.clientX;
        currentAngle = newAngle;
      }
    }
  });

  // Função para terminar a rotação
  document.addEventListener("mouseup", () => {
    isRotating = false;
    manivela.style.transition = 'transform 0.2s ease'; // Reaplica a transição suave
  });
});