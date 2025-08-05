const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

if (!usuario) {
  alert("Você precisa estar logado.");
  window.location.href = "C:/Users/SKA/Desktop/sellskils/SellSkill/ProjSellSkill/FrontEnd/src/pages/cadastro/cadastro.html"; // Ajuste o caminho conforme sua estrutura
} else {
  document.getElementById("nome-usuario").textContent = usuario.nome_completo;

  const carrinhoKey = `carrinho_${usuario.email}`;
  const compras = JSON.parse(localStorage.getItem(carrinhoKey)) || [];
  const lista = document.getElementById("lista-compras");

  if (compras.length === 0) {
    lista.innerHTML = "<li>Nenhuma compra registrada.</li>";
  } else {
    compras.forEach(curso => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Curso: ${curso.titulo}</strong> – comprado em ${new Date().toLocaleDateString()}`;
      lista.appendChild(li);
    });
  }
}

function logout() {
  localStorage.removeItem('usuarioLogado');
  window.location.href = "C:/Users/SKA/Desktop/sellskils/SellSkill/ProjSellSkill/FrontEnd/src/pages/cadastro/cadastro.html"; // Ajuste o caminho
}
