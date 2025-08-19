document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/api/cursos')
    .then(response => response.json())
    .then(cursos => {
      const listaCursos = document.getElementById('lista-cursos');
      
      if (!Array.isArray(cursos) || cursos.length === 0) {
        listaCursos.innerHTML = "<p>Nenhum curso disponível no momento.</p>";
        return;
      }

      cursos.forEach(curso => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <h3>${curso.titulo}</h3>
          <p>${curso.descricao.substring(0, 100)}...</p>
          <p><strong>R$ ${curso.preco.toFixed(2)}</strong></p>
          <a href="curso.html?id=${curso.id}">Ver detalhes</a>
        `;

        listaCursos.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar cursos:', error);
      document.getElementById('lista-cursos').innerHTML = "<p>Erro ao carregar cursos.</p>";
    });
});