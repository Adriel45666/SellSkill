document.addEventListener('DOMContentLoaded', function () {
  const listaCursos = document.querySelectorAll('.curso-card');
  listaCursos.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      window.location.href = `curso.html?id=${id}`;
    });
  });

  document.getElementById('pesquisa').addEventListener('input', function () {
    const termo = this.value.toLowerCase();
    listaCursos.forEach(card => {
      const titulo = card.querySelector('h3').textContent.toLowerCase();
      const descricao = card.querySelector('p').textContent.toLowerCase();
      card.style.display = (titulo.includes(termo) || descricao.includes(termo)) ? 'block' : 'none';
    });
  });
});  