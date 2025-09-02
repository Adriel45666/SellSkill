document.addEventListener('DOMContentLoaded', () => {
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

  if (!cursoId) {
    // Se não tem ID na URL, listar todos os cursos
    fetch("http://localhost:8080/api/cursos")
      .then(response => response.json())
      .then(cursos => {
        const container = document.getElementById("lista-cursos");

        if (!container) return;

        cursos.forEach(curso => {
          const card = document.createElement("div");
          card.className = "card";

          card.innerHTML = `
            <h3>${curso.titulo}</h3>
            <p>${curso.descricao}</p>
            <a href="?id=${curso.id}">Ver detalhes</a>
          `;

          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar cursos:", error);
      });

    return; // para não executar o código abaixo
  }

  // Se tem ID na URL, carregar detalhes do curso
  fetch(`http://localhost:8080/api/cursos/${cursoId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Curso não encontrado.");
      }
      return response.json();
    })
    .then(curso => {
      
      document.getElementById('imagem-curso').alt = curso.titulo;
      document.getElementById('titulo-curso').textContent = curso.titulo;
      document.getElementById('descricao-curso').textContent = curso.descricao;
      document.getElementById('preco-curso').textContent = `R$ ${curso.preco?.toFixed(2) || '0,00'}`;

      document.getElementById('btn-comprar').addEventListener('click', () => {
        adicionarAoCarrinho(curso);
        window.location.href = "../src/pages/carrinho/carrinho.html";
      });

      document.getElementById('btn-adicionar').addEventListener('click', () => {
        adicionarAoCarrinho(curso);
        alert("Curso adicionado ao carrinho com sucesso!");
      });
    })
    .catch(error => {
      document.body.innerHTML = "<h1 style='text-align:center; color: red;'>Curso não encontrado.</h1>";
      console.error(error);
    });
});