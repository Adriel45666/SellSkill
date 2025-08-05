document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmar = document.getElementById('confirmarSenha').value.trim();
  const erro = document.getElementById('erro');

  if (!nome || !email || !senha || !confirmar) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }
  if (senha !== confirmar) {
    erro.textContent = "As senhas não coincidem.";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  if (usuarios.some(u => u.email === email)) {
    erro.textContent = "E-mail já cadastrado.";
    return;
  }

  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  // Loga automaticamente
  localStorage.setItem('usuarioLogado', JSON.stringify({ nome, email }));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
});
