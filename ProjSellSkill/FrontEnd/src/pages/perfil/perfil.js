// Função auxiliar para pegar usuário logado
function getUsuario() {
  const raw = localStorage.getItem('usuarioLogado');
  if (!raw) return null;
  try {
    const obj = JSON.parse(raw);
    if (obj && obj.email) return obj;
    if (typeof raw === 'string' && raw.includes('@')) {
      return { email: raw, nome_completo: raw.split('@')[0] };
    }
    return null;
  } catch {
    if (raw.includes('@')) return { email: raw, nome_completo: raw.split('@')[0] };
    return null;
  }
}

const usuario = getUsuario();

if (!usuario) {
  alert("Você precisa estar logado.");
  window.location.href = "../cadastro/cadastro.html";
} else {
  // Nome do usuário
  document.getElementById("nome-usuario").textContent = usuario.nome_completo;

  // ===============================
  // Compras
  // ===============================
  const compras = JSON.parse(localStorage.getItem(`carrinho_${usuario.email}`)) || [];
  const listaCompras = document.getElementById("lista-compras");

  if (compras.length === 0) {
    listaCompras.innerHTML = "<li>Nenhuma compra registrada.</li>";
  } else {
    compras.forEach(curso => {
      const li = document.createElement("li");
      const dataCompra = curso.compradoEm ? new Date(curso.compradoEm).toLocaleDateString() : 'data desconhecida';
      li.innerHTML = `<strong>${curso.titulo}</strong> – comprado em ${dataCompra}`;
      listaCompras.appendChild(li);
    });
  }

  // ===============================
  // Favoritos
  // ===============================
  const listaFav = document.getElementById("lista-favoritos");
  const favIds = JSON.parse(localStorage.getItem(`favoritos_${usuario.email}`)) || [];

  if (favIds.length === 0) {
    listaFav.innerHTML = "<li>Nenhum favorito encontrado.</li>";
  } else {
    favIds.forEach(id => {
      // Buscar dados do curso no localStorage global
      const todosCursos = JSON.parse(localStorage.getItem("cursos")) || [];
      const curso = todosCursos.find(c => c.id === id);

      if (curso) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${curso.titulo}</strong> – ${curso.preco}`;
        listaFav.appendChild(li);
      }
    });
  }
}

// Função de logout
function logout() {
  localStorage.removeItem('usuarioLogado');
  window.location.href = "../cadastro/cadastro.html";
}
