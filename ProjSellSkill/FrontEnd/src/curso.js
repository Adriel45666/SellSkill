document.addEventListener('DOMContentLoaded', () => {
  const cursos = {
    1: { id: 1, titulo: "Segurança da Informação", descricao: "Proteja dados...", preco: "R$ 119,90", imagem: "imagens/curso-seguranca.jpg" },
    2: { id: 2, titulo: "Desenvolvimento Web Full Stack", descricao: "HTML, CSS...", preco: "R$ 149,90", imagem: "imagens/curso-fullstack.jpg" }
    // ... restantes
  };

  function getCursoId() {
    return new URLSearchParams(window.location.search).get('id');
  }

  function adicionarAoCarrinho(curso) {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuario) {
      alert("Você precisa estar logado.");
      window.location.href = "login.html";
      return;
    }

    const chaveCarrinho = `carrinho_${usuario.email}`;
    let carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

    if (!carrinho.some(item => item.id === curso.id)) {
      carrinho.push(curso);
      localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
    }
  }

  const id = getCursoId();
  if (!id || !cursos[id]) return;

  const curso = cursos[id];
  document.getElementById('imagem-curso').src = curso.imagem;
  document.getElementById('titulo-curso').textContent = curso.titulo;
  document.getElementById('descricao-curso').textContent = curso.descricao;
  document.getElementById('preco-curso').textContent = curso.preco;

  document.getElementById('btn-adicionar').onclick = () => {
    adicionarAoCarrinho(curso);
    alert("Adicionado ao carrinho!");
  };
  document.getElementById('btn-comprar').onclick = () => {
    adicionarAoCarrinho(curso);
    window.location.href = "C:/Users/SKA/Desktop/sellskils/SellSkill/ProjSellSkill/FrontEnd/src//pages/carrinho/carrinho.html";
  };
});
