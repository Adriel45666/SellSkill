document.addEventListener('DOMContentLoaded', function () {
  const cursos = {
    1: {
      titulo: "Segurança da Informação",
      descricao: "Proteja dados, redes e sistemas contra ameaças cibernéticas",
      preco: "R$ 1.202,55",
      imagem: "imagens/curso-seguranca.jpg"
    },
    2: {
      titulo: "Desenvolvimento Web Full Stack",
      descricao: "HTML, CSS, JavaScript, Node.js e mais",
      preco: "R$ 1.202,55",
      imagem: "imagens/curso-fullstack.jpg"
    },
    3: {
      titulo: "Inteligência Artificial com Python",
      descricao: "Crie modelos de IA com aprendizado de máquina",
      preco: "R$ 99,90",
      imagem: "imagens/curso-ia-python.jpg"
    }
  };

  function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }

  const idCurso = getQueryParam('id');
  const curso = cursos[idCurso];

  if (!curso) {
    document.body.innerHTML = '<h2 style="color:#f00; text-align:center; margin-top:50px;">Curso não encontrado.</h2>';
  } else {
    document.getElementById('imagem-curso').src = curso.imagem;
    document.getElementById('imagem-curso').alt = curso.titulo;
    document.getElementById('titulo-curso').textContent = curso.titulo;
    document.getElementById('descricao-curso').textContent = curso.descricao;
    document.getElementById('preco-curso').textContent = curso.preco;

    document.getElementById('btn-comprar').onclick = () => {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      carrinho.push(curso);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      alert("Curso adicionado ao carrinho!");
    };
  }
});