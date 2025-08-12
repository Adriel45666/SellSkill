<<<<<<< HEAD
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
=======
/* main.css - com ícone de três riscos ao lado do Login e dropdown */

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #0b0b0b;
  color: #e6e6e6;
  min-height: 100vh;
}

/* Topo */
.topo {
  position: relative; /* para posicionar o menuOpcoes */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  border-bottom: 2px solid #00ff33;
  padding: 12px 24px;
}

/* Logo */
.logo h1 {
  color: #00ff33;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 1.6rem;
}

/* Barra de pesquisa */
.barra-pesquisa {
  display: flex;
  flex-grow: 1;
  max-width: 720px;
  margin: 0 24px;
  align-items: center;
}
.barra-pesquisa input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 6px 0 0 6px;
  font-size: 15px;
  outline: none;
  background: #fff;
  color: #000;
  height: 40px;
}
.barra-pesquisa button {
  background-color: #00ff33;
  color: #000;
  border: none;
  padding: 0 14px;
  height: 40px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-weight: 700;
}

/* Ações (carrinho / login / menu) */
.acoes {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* ícone carrinho */
.acoes a.icone { color: #00ff33; font-size: 1.25rem; text-decoration: none; }

/* login */
.acoes a.botao-login {
  background-color: #00ff33;
  color: #000;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s ease;
}
.acoes a.botao-login:hover { background-color: #00cc29; }

/* botão com três riscos */
.menu-icon {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 36px;
  padding: 6px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.03);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.12s ease;
  align-items: center;
}
.menu-icon:hover {
  background: rgba(255,255,255,0.02);
  transform: translateY(-1px);
}
.menu-icon span {
  display: block;
  width: 22px;
  height: 2.6px;
  background: #00ff33; /* riscos em verde neon */
  border-radius: 2px;
}

/* menuOpcoes (dropdown) */
.menu-opcoes {
  position: absolute;
  top: calc(100% + 8px);
  right: 16px; /* alinha ao canto direito do header */
  background: #0d0d0d;
  border: 1px solid rgba(0,255,51,0.12);
  border-radius: 10px;
  padding: 8px;
  display: none; /* mostrado via JS */
  min-width: 180px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.6), 0 0 10px rgba(0,255,51,0.03);
  z-index: 999;
}

/* links do menu */
.menu-opcoes a {
  display: block;
  padding: 10px 12px;
  color: #e6e6e6;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.95rem;
}
.menu-opcoes a:hover {
  background: rgba(0,255,51,0.06);
  color: #00ff33;
}

/* Conteúdo principal */
.conteudo { padding: 30px 36px; }
.conteudo h2 { color: #fff; margin-bottom: 18px; font-size: 1.25rem; }

/* Grid de cursos: cards maiores */
.cursos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

/* Card do curso — mais espaçoso e com destaque visual */
.curso-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius: 14px;
  padding: 20px;
  cursor: pointer;
  border: 2px solid rgba(0,255,51,0.10);
  transition: background-color 0.28s ease, transform 0.18s ease, border-color 0.28s ease, box-shadow 0.28s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 320px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.6), 0 0 12px rgba(0,255,51,0.03);
}

.curso-card .thumb { width: 100%; height: 220px; border-radius: 10px; overflow: hidden; background: #111; display: block; }
.curso-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

.curso-card h3 { margin: 0; color: #00ff33; font-size: 1.25rem; font-weight: 900; }
.curso-card p { margin: 0; color: #dcdcdc; font-size: 1rem; line-height: 1.35; }
.curso-card .preco { margin-top: auto; font-weight: 900; color: #ffffff; font-size: 1.05rem; }

.curso-card:hover {
  background-color: rgba(255,255,255,0.04);
  border-color: rgba(0,255,51,0.50);
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 16px 36px rgba(0,0,0,0.65), 0 0 26px rgba(0,255,51,0.06);
}

/* Responsividade */
@media (max-width: 1100px) {
  .cursos { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 22px; }
  .curso-card { min-height: 300px; }
  .curso-card .thumb { height: 200px; }
}
@media (max-width: 720px) {
  .barra-pesquisa { max-width: 100%; margin: 0 12px; }
  .cursos { grid-template-columns: 1fr; gap: 18px; }
  .curso-card { min-height: auto; }
  .curso-card .thumb { height: 180px; }

  /* ajusta o dropdown para tela pequena */
  .menu-opcoes { right: 8px; left: 8px; top: calc(100% + 8px); }
}
>>>>>>> f5c0a7d6407b9d9a348bade17ef9da47d64be371
