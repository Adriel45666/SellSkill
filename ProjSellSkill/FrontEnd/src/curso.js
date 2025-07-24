document.addEventListener('DOMContentLoaded', () => {
  const cursos = {
    1: {
      id: 1,
      titulo: "Segurança da Informação",
      descricao: "Proteja dados, redes e sistemas contra ameaças cibernéticas",
      preco: "R$ 119,90",
      imagem: "imagens/curso-seguranca.jpg"
    },
    2: {
      id: 2,
      titulo: "Desenvolvimento Web Full Stack",
      descricao: "HTML, CSS, JavaScript, Node.js e mais",
      preco: "R$ 149,90",
      imagem: "imagens/curso-fullstack.jpg"
    },
    3: {
      id: 3,
      titulo: "Inteligência Artificial com Python",
      descricao: "Crie modelos de IA com aprendizado de máquina",
      preco: "R$ 99,90",
      imagem: "imagens/curso-ia-python.jpg"
    },
    4: {
      id: 4,
      titulo: "Marketing Digital",
      descricao: "Domine SEO, redes sociais e campanhas de anúncios",
      preco: "R$ 129,90",
      imagem: "imagens/curso-marketing.jpg"
    },
    5: {
      id: 5,
      titulo: "Gestão de Projetos",
      descricao: "Aprenda a gerenciar projetos com metodologias ágeis",
      preco: "R$ 149,90",
      imagem: "imagens/curso-gestao.jpg"
    },
    6: {
      id: 6,
      titulo: "Excel Avançado",
      descricao: "Funções, dashboards e automações com VBA",
      preco: "R$ 89,90",
      imagem: "imagens/curso-excel.jpg"
    },
    7: {
      id: 7,
      titulo: "Design Gráfico com Photoshop",
      descricao: "Crie artes visuais incríveis com o Adobe Photoshop",
      preco: "R$ 109,90",
      imagem: "imagens/curso-photoshop.jpg"
    },
    8: {
      id: 8,
      titulo: "Empreendedorismo e Startups",
      descricao: "Transforme ideias em negócios escaláveis",
      preco: "R$ 139,90",
      imagem: "imagens/curso-startups.jpg"
    }
  };

  function getCursoId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  function adicionarAoCarrinho(curso) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const jaExiste = carrinho.some(item => item.id === curso.id);

    if (!jaExiste) {
      carrinho.push(curso);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
  }

  const cursoId = getCursoId();

  if (!cursoId || !cursos[cursoId]) {
    document.body.innerHTML = "<h1 style='text-align:center; color: red;'>Curso não encontrado.</h1>";
    console.error("ID inválido ou curso inexistente:", cursoId);
    return;
  }

  const curso = cursos[cursoId];

  document.getElementById('imagem-curso').src = curso.imagem;
  document.getElementById('imagem-curso').alt = curso.titulo;
  document.getElementById('titulo-curso').textContent = curso.titulo;
  document.getElementById('descricao-curso').textContent = curso.descricao;
  document.getElementById('preco-curso').textContent = curso.preco;

  document.getElementById('btn-comprar').addEventListener('click', () => {
    adicionarAoCarrinho(curso);
    window.location.href = "../src/pages/carrinho/carrinho.html";
  });

  document.getElementById('btn-adicionar').addEventListener('click', () => {
    adicionarAoCarrinho(curso);
    alert("Curso adicionado ao carrinho com sucesso!");
  });
});
