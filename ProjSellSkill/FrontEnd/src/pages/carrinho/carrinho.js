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
});
