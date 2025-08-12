<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  // 1. Verifica se usuário está logado
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar o pagamento.");
    window.location.href = "login.html";
    return;
  }

  // 2. Usa o email do usuário para montar a chave do carrinho
  const chaveCarrinho = `carrinho_${usuarioLogado.email}`;
  const carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

  const listaProdutos = document.getElementById('lista-produtos');
  const valorTotal = document.getElementById('valor-total');

  listaProdutos.innerHTML = '';

  if (carrinho.length === 0) {
    listaProdutos.innerHTML = "<p>Seu carrinho está vazio.</p>";
    valorTotal.textContent = "R$ 0,00";
    return;
  }

  // 3. Monta a lista de produtos e soma o total
  let total = 0;
  carrinho.forEach(item => {
    let preco = item.preco;
    if (typeof preco === "string") {
      preco = preco.replace("R$", "").replace(".", "").replace(",", ".");
      preco = parseFloat(preco);
    }

    const div = document.createElement('div');
    div.classList.add('produto');
    div.innerHTML = `<span>${item.titulo || item.nome}</span> <span>R$ ${preco.toFixed(2).replace(".", ",")}</span>`;
    listaProdutos.appendChild(div);
    total += preco;
  });

  valorTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;

  // 4. Seleciona os inputs
  const inputNome = document.getElementById("nome-cartao");
  const inputCartao = document.getElementById("cartao");
  const inputValidade = document.getElementById("validade");
  const inputCVV = document.getElementById("cvv");

  // Funções de validação para os campos
  function validarNome(nome) {
    return /^[a-zA-ZÀ-ÿ\s]+$/.test(nome.trim());
  }

  function validarCartao(cartao) {
    return /^\d{13,16}$/.test(cartao);
  }

  function validarValidade(validade) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(validade);
  }

  function validarCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
  }

  // Permitir só letras e espaços no nome em tempo real
  inputNome.addEventListener("input", () => {
    inputNome.value = inputNome.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
  });

  // Permitir só números no cartão
  inputCartao.addEventListener("input", () => {
    inputCartao.value = inputCartao.value.replace(/\D/g, "");
  });

  // Permitir só números e barra no validade
  inputValidade.addEventListener("input", () => {
    inputValidade.value = inputValidade.value.replace(/[^0-9\/]/g, "");
  });

  // Permitir só números no CVV
  inputCVV.addEventListener("input", () => {
    inputCVV.value = inputCVV.value.replace(/\D/g, "");
  });

  // 5. Finalizar compra com validação
  document.getElementById('form-pagamento').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = inputNome.value.trim();
    const cartao = inputCartao.value.trim();
    const validade = inputValidade.value.trim();
    const cvv = inputCVV.value.trim();

    // Validações
    if (!validarNome(nome)) {
      alert("Por favor, digite um nome válido (apenas letras e espaços).");
      inputNome.focus();
      return;
    }

    if (!validarCartao(cartao)) {
      alert("Por favor, digite um número de cartão válido (13 a 16 dígitos).");
      inputCartao.focus();
      return;
    }

    if (!validarValidade(validade)) {
      alert("Por favor, digite a validade no formato MM/AA.");
      inputValidade.focus();
      return;
    }

    if (!validarCVV(cvv)) {
      alert("Por favor, digite um CVV válido (3 ou 4 dígitos).");
      inputCVV.focus();
      return;
    }

    alert(`Obrigado pela compra, ${usuarioLogado.nome}!`);
    localStorage.removeItem(chaveCarrinho);
    window.location.href = "index.html"; // ajuste para o caminho correto no seu projeto
  });
});
=======
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
>>>>>>> f5c0a7d6407b9d9a348bade17ef9da47d64be371
