// curso.js
document.addEventListener('DOMContentLoaded', () => {
  // Leitura segura do usuário (trata string ou objeto)
  function getUsuario() {
    const raw = localStorage.getItem('usuarioLogado');
    if (!raw) return null;
    try {
      const obj = JSON.parse(raw);
      if (obj && obj.email) return obj;
      // se não for objeto, pode ser só uma string (email)
      if (typeof raw === 'string' && raw.includes('@')) {
        return { email: raw, nome_completo: raw.split('@')[0] };
      }
      return null;
    } catch {
      // não JSON — assume string com email
      if (raw.includes('@')) return { email: raw, nome_completo: raw.split('@')[0] };
      return null;
    }
  }

  const usuario = getUsuario();

  const curso = JSON.parse(localStorage.getItem('cursoSelecionado'));
  const tituloEl = document.getElementById('titulo-curso');
  const descEl = document.getElementById('descricao-curso');
  const precoEl = document.getElementById('preco-curso');
  const imgEl = document.getElementById('imagem-curso');
  const btnAdicionar = document.getElementById('btn-adicionar');
  const btnComprar = document.getElementById('btn-comprar');
  const btnFav = document.getElementById('btn-fav');
  const iconeFav = document.getElementById('icone-fav');

  if (!curso) {
    alert('Nenhum curso selecionado.');
    window.location.href = 'index.html';
    return;
  }

  tituloEl.textContent = curso.titulo;
  descEl.textContent = curso.descricao;
  precoEl.textContent = curso.preco;
  imgEl.src = curso.imagem;

  // Carrinho por usuário
  function adicionarAoCarrinho(item) {
    const usr = getUsuario();
    if (!usr || !usr.email) {
      alert('Você precisa estar logado para adicionar ao carrinho.');
      window.location.href = 'pages/cadastro/cadastro.html';
      return;
    }
    const chave = `carrinho_${usr.email}`;
    const carrinho = JSON.parse(localStorage.getItem(chave)) || [];
    if (!carrinho.some(i => i.id === item.id)) {
      carrinho.push({ ...item, compradoEm: new Date().toISOString() });
      localStorage.setItem(chave, JSON.stringify(carrinho));
    }
  }

  btnAdicionar.addEventListener('click', () => adicionarAoCarrinho(curso));
  btnComprar.addEventListener('click', () => {
    adicionarAoCarrinho(curso);
    window.location.href = 'C:/Users/SKA/Desktop/sellskils/SellSkill/ProjSellSkill/FrontEnd/src/pages/carrinho/carrinho.html';
  });

  // Favoritos por usuário (ou publicos se não logado)
  function favKey() {
    const u = getUsuario();
    return u && u.email ? `favoritos_${u.email}` : 'favoritos_publico';
  }

  function carregarFavoritos() {
    return JSON.parse(localStorage.getItem(favKey())) || [];
  }
  function salvarFavoritos(list) {
    localStorage.setItem(favKey(), JSON.stringify(list));
  }

  function atualizarIconeFavorito() {
    const favs = carregarFavoritos();
    iconeFav.className = favs.includes(curso.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  }

  btnFav.addEventListener('click', () => {
    const favs = carregarFavoritos();
    const idx = favs.indexOf(curso.id);
    if (idx === -1) {
      favs.push(curso.id);
      alert('Adicionado aos favoritos.');
    } else {
      favs.splice(idx, 1);
      alert('Removido dos favoritos.');
    }
    salvarFavoritos(favs);
    atualizarIconeFavorito();
  });

  atualizarIconeFavorito();
});
