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

  const curso = JSON.parse(localStorage.getItem('cursoSelecionado'));
  if (!curso) {
    alert('Nenhum curso selecionado.');
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('titulo-curso').textContent = curso.titulo;
  document.getElementById('descricao-curso').textContent = curso.descricao;
  document.getElementById('preco-curso').textContent = curso.preco;
  document.getElementById('imagem-curso').src = curso.imagem;

  function adicionarAoCarrinho(item) {
    const key = carrinhoKey();
    if (!key) {
      alert('Você precisa estar logado para adicionar ao carrinho.');
      window.location.href = 'pages/cadastro/cadastro.html';
      return;
    }
    const carrinho = JSON.parse(localStorage.getItem(key)) || [];
    if (!carrinho.some(i => i.id === item.id)) {
      carrinho.push(item);
      localStorage.setItem(key, JSON.stringify(carrinho));
    }
  }

  document.getElementById('btn-adicionar')
    .addEventListener('click', () => adicionarAoCarrinho(curso));

  document.getElementById('btn-comprar')
    .addEventListener('click', () => {
      adicionarAoCarrinho(curso);
      window.location.href = 'pages/carrinho/carrinho.html';
    });
});
