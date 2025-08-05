<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (!usuario) {
    document.body.innerHTML = "<h2>Você precisa estar logado para ver o carrinho.</h2>";
    return;
  }

  const chaveCarrinho = `carrinho_${usuario.email}`;
  const carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

  const container = document.getElementById("itens-carrinho");
  const qtdTotal = document.getElementById("quantidade-total");
  const totalElement = document.querySelector(".resumo-carrinho strong");

  if (carrinho.length === 0) {
    container.innerHTML = "<h2>Seu carrinho está vazio.</h2>";
    totalElement.textContent = "R$ 0,00";
    qtdTotal.textContent = "0";
    return;
  }

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

  totalElement.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  qtdTotal.textContent = carrinho.length;

  container.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      carrinho.splice(e.target.dataset.index, 1);
      localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
      location.reload();
    }
  });
});
=======
   document.addEventListener("DOMContentLoaded", () => {
      const container = document.getElementById("itens-carrinho");
      const qtdTotal = document.getElementById("quantidade-total");
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      if (carrinho.length === 0) {
        container.innerHTML = "<h2 style='text-align:center'>Seu carrinho está vazio.</h2>";
        document.querySelector(".resumo-carrinho strong").textContent = "R$ 0,00";
        qtdTotal.textContent = "0";
        return;
      }

      let total = 0;

      carrinho.forEach((curso, index) => {
        const precoNumero = parseFloat(
          curso.preco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
        );
        total += precoNumero;

        const item = document.createElement("div");
        item.className = "item-carrinho";
        item.innerHTML = `
          <img src="${curso.imagem}" alt="${curso.titulo}" />
          <div>
            <h2>${curso.titulo}</h2>
            <p>${curso.descricao}</p>
            <p class="preco">${curso.preco}</p>
            <button class="remover" data-index="${index}">Remover</button>
          </div>
        `;
        container.appendChild(item);
      });

      document.querySelector(".resumo-carrinho strong").textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
      qtdTotal.textContent = carrinho.length;

      // Remoção de item
      container.querySelectorAll(".remover").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const idx = parseInt(e.target.getAttribute("data-index"));
          carrinho.splice(idx, 1);
          localStorage.setItem("carrinho", JSON.stringify(carrinho));
          location.reload();
        });
      });

      // Função de redirecionamento para a página de pagamento
      const finalizarCompraBtn = document.querySelector(".finalizar-compra");
      finalizarCompraBtn.addEventListener("click", function () {
        // Redireciona para a página de pagamento
        window.location.href = 'pagamento.html';  // Caminho relativo
      });
    });
>>>>>>> 5fdb5fabf3681b9ef7bd3b003c7995e30bb1b249
