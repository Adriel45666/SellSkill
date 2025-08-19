// pagamento.js
document.addEventListener('DOMContentLoaded', () => {

  // Função para pegar o usuário logado
  function getUsuario() {
    const raw = localStorage.getItem('usuarioLogado');
    if (!raw) return null;
    try {
      const obj = JSON.parse(raw);
      if (obj && obj.email) return obj;
      if (typeof obj === 'string' && raw.includes('@')) {
        return { email: raw, nome_completo: raw.split('@')[0] };
      }
      return null;
    } catch {
      if (raw.includes('@')) return { email: raw, nome_completo: raw.split('@')[0] };
      return null;
    }
  }

  // Função para gerar a chave do carrinho
  function carrinhoKey() {
    const u = getUsuario();
    return u && u.email ? `carrinho_${u.email}` : null;
  }

  const key = carrinhoKey();
  const listaProdutos = document.getElementById('lista-produtos');
  const valorTotal = document.getElementById('valor-total');
  const formPagamento = document.getElementById('form-pagamento');

  if (!key) {
    listaProdutos.innerHTML = "<h2>Você precisa estar logado para acessar o pagamento.</h2>";
    valorTotal.textContent = "R$ 0,00";
    return;
  }

  let carrinho = JSON.parse(localStorage.getItem(key)) || [];

  // Função para salvar o carrinho
  function salvar() {
    localStorage.setItem(key, JSON.stringify(carrinho));
  }

  // Função para renderizar os produtos e calcular total
  function render() {
    if (!carrinho.length) {
      listaProdutos.innerHTML = "<p>Seu carrinho está vazio.</p>";
      valorTotal.textContent = "R$ 0,00";
      return;
    }

    listaProdutos.innerHTML = "";
    let total = 0;

    carrinho.forEach((curso, index) => {
      const preco = parseFloat(curso.preco.replace("R$", "").replace(",", "."));
      total += preco;

      const item = document.createElement("div");
      item.classList.add("item-produto");
      item.innerHTML = `
        <p>${curso.titulo} - ${curso.preco}</p>
        <button type="button" data-index="${index}">Remover</button>
      `;
      listaProdutos.appendChild(item);
    });

    valorTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  }

  // Evento para remover produto
  listaProdutos.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const index = e.target.dataset.index;
      carrinho.splice(index, 1);
      salvar();
      render();
    }
  });

  // Função para validar campos do cartão
  function validarCampos() {
    const cartao = document.getElementById('cartao').value.trim();
    const nome = document.getElementById('nome-cartao').value.trim();
    const validade = document.getElementById('validade').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    const cartaoRegex = /^\d{16}$/;
    const nomeRegex = /^[A-Za-z\s]+$/;
    const validadeRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3}$/;

    if (!cartaoRegex.test(cartao)) {
      alert("Número do cartão inválido. Digite 16 números.");
      return false;
    }
    if (!nomeRegex.test(nome)) {
      alert("Nome no cartão inválido. Digite apenas letras.");
      return false;
    }
    if (!validadeRegex.test(validade)) {
      alert("Validade inválida. Use o formato MM/AA.");
      return false;
    }
    if (!cvvRegex.test(cvv)) {
      alert("CVV inválido. Digite 3 números.");
      return false;
    }
    return true;
  }

  // Evento de envio do formulário
  formPagamento.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!carrinho.length) {
      alert("Seu carrinho está vazio.");
      return;
    }

    if (!validarCampos()) return;

    alert("Compra realizada com sucesso!");
    carrinho = [];
    salvar();
    render();
    window.location.href = "../index.html"; // Redireciona para a página inicial
  });

  render();
});
