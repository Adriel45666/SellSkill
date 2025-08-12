document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lista-cursos');
  const pesquisa = document.getElementById('pesquisa');
  const btnCarrinho = document.getElementById('btn-carrinho');
  const btnPesquisar = document.getElementById('btn-pesquisar');

  // novo: botão menu (três riscos) e painel de opções
  const btnMenu = document.getElementById('btn-menu');
  const menuOpcoes = document.getElementById('menuOpcoes');

  const cursos = [
    {
      id: 1,
      titulo: "Segurança da Informação",
      descricao: "Proteja dados, redes e sistemas contra ameaças cibernéticas",
      preco: "R$ 199,90",
      imagem: "img/seguranca.jpg"
    },
    {
      id: 2,
      titulo: "Desenvolvimento Web Full Stack",
      descricao: "HTML, CSS, JavaScript, Node.js e mais",
      preco: "R$ 299,90",
      imagem: "img/fullstack.jpg"
    },
    {
      id: 3,
      titulo: "Inteligência Artificial com Python",
      descricao: "Crie modelos de IA com aprendizado de máquina",
      preco: "R$ 399,90",
      imagem: "img/ia.jpg"
    }
  ];

  function montarCards(lista) {
    container.innerHTML = '';
    if (!lista.length) {
      container.innerHTML = '<p style="color:#aaa">Nenhum curso encontrado.</p>';
      return;
    }

    lista.forEach(curso => {
      const card = document.createElement('div');
      card.className = 'curso-card';
      card.dataset.id = String(curso.id);
      card.innerHTML = `
        <div class="thumb">
          <img src="${curso.imagem}" alt="${curso.titulo}">
        </div>
        <h3>${curso.titulo}</h3>
        <p class="descricao">${curso.descricao}</p>
        <div class="preco">${curso.preco}</div>
      `;

      card.addEventListener('click', () => {
        try {
          localStorage.setItem('cursoSelecionado', JSON.stringify(curso));
        } catch (err) {
          console.warn('Erro salvando no localStorage:', err);
        }
        window.location.href = 'curso.html';
      });

      container.appendChild(card);
    });
  }

  montarCards(cursos);

  function filtrar() {
    const termo = (pesquisa.value || '').trim().toLowerCase();
    if (!termo) {
      montarCards(cursos);
      return;
    }
    const filtrados = cursos.filter(c =>
      c.titulo.toLowerCase().includes(termo) ||
      c.descricao.toLowerCase().includes(termo)
    );
    montarCards(filtrados);
  }

  pesquisa.addEventListener('input', filtrar);
  btnPesquisar && btnPesquisar.addEventListener('click', (e) => {
    e.preventDefault();
    filtrar();
  });

  btnCarrinho && btnCarrinho.addEventListener('click', (e) => {
    // link já navega, mas deixei caso queira tratar
  });

  // --- Tratamento do botão de três riscos ---
  if (btnMenu && menuOpcoes) {
    btnMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = menuOpcoes.style.display === 'block';
      menuOpcoes.style.display = isVisible ? 'none' : 'block';
      menuOpcoes.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
    });

    // fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!menuOpcoes.contains(e.target) && e.target !== btnMenu) {
        menuOpcoes.style.display = 'none';
        menuOpcoes.setAttribute('aria-hidden', 'true');
      }
    });

    // fechar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menuOpcoes.style.display = 'none';
        menuOpcoes.setAttribute('aria-hidden', 'true');
      }
    });
  }
});
