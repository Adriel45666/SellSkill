document.addEventListener('DOMContentLoaded', () => {
  function getUsuario() {
    const raw = localStorage.getItem('usuarioLogado');
    if (!raw) return null;
    try {
      const obj = JSON.parse(raw);
      if (obj && obj.email) return obj;
      if (typeof obj === 'string' && obj.includes('@')) {
        return { email: obj, nome_completo: obj.split('@')[0] };
      }
      return null;
    } catch {
      if (raw.includes('@')) return { email: raw, nome_completo: raw.split('@')[0] };
      return null;
    }
  }

  function carrinhoKey() {
    const u = getUsuario();
    return u && u.email ? `carrinho_${u.email}` : null;
  }

  const key = carrinhoKey();
  const container = document.getElementById('itens-carrinho');
  const qtdTotal = document.getElementById('quantidade-total');
  const totalElement = document.getElementById('total-geral');

  const btnFinalizar = document.getElementById('btn-finalizar');
  const btnEsvaziar = document.getElementById('btn-esvaziar');

  if (!key) {
    container.innerHTML = "<h2>Você precisa estar logado para ver o carrinho.</h2>";
    qtdTotal.textContent = "0";
    totalElement.textContent = "R$ 0,00";
    return;
  }

  let carrinho = JSON.parse(localStorage.getItem(key)) || [];

  function salvar() {
    localStorage.setItem(key, JSON.stringify(carrinho));
  }

  function render() {
    if (!carrinho.length) {
      container.innerHTML = "<h2>Seu carrinho está vazio.</h2>";
      qtdTotal.textContent = "0";
      totalElement.textContent = "R$ 0,00";
      return;
    }

    container.innerHTML = "";
    let total = 0;
    carrinho.forEach((curso, index) => {
      const preco = parseFloat(curso.preco.replace("R$", "").replace(",", "."));
      total += preco;

      const item = document.createElement("div");
      item.innerHTML = `
        <h2>${curso.titulo}</h2>
        <p>${curso.preco}</p>
        <button data-index="${index}">Remover</button>
      `;
      container.appendChild(item);
    });

    qtdTotal.textContent = carrinho.length;
    totalElement.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  }

  container.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      carrinho.splice(e.target.dataset.index, 1);
      salvar();
      render();
    }
  });

  // 🚀 botão "Esvaziar"
  btnEsvaziar.addEventListener("click", () => {
    if (!carrinho.length) return;
    if (confirm("Deseja esvaziar o carrinho?")) {
      carrinho = [];
      salvar();
      render();
    }
  });

  // 🚀 botão "Finalizar compra"
  btnFinalizar.addEventListener("click", () => {
    if (!carrinho.length) {
      alert("Seu carrinho está vazio.");
      return;
    }

    salvar(); // salva estado final do carrinho

    // 👉 aqui você define a página de pagamento
    window.location.href = "../carrinho/pagamento.html";
  });

  render();
});
