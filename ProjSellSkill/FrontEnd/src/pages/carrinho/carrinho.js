
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
      // Função de redirecionamento para a página de pagamento
      const finalizarCompraBtn = document.querySelector(".finalizar-compra");
      finalizarCompraBtn.addEventListener("click", function () {
        // Redireciona para a página de pagamento
        window.location.href = 'C:/Users/SKA/Desktop/sellskils/SellSkill/ProjSellSkill/FrontEnd/src/pages/carrinho/pagamento.html';  // Caminho relativo
      });