// Função que valida os campos
function validarCampos() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const erro = document.getElementById('erro');

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  erro.textContent = '';

  if (nome === '') {
    erro.textContent = 'Por favor, preencha seu nome completo.';
    return false;
  }
  if (email === '') {
    erro.textContent = 'Por favor, preencha seu e-mail.';
    return false;
  }
  if (!validarEmail(email)) {
    erro.textContent = 'Por favor, insira um e-mail válido.';
    return false;
  }
  if (senha === '') {
    erro.textContent = 'Por favor, preencha sua senha.';
    return false;
  }
  if (senha.length < 6) {
    erro.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    return false;
  }
  if (confirmarSenha === '') {
    erro.textContent = 'Por favor, confirme sua senha.';
    return false;
  }
  if (senha !== confirmarSenha) {
    erro.textContent = 'As senhas não conferem.';
    return false;
  }
  erro.textContent = '';
  return true;
}

// Função para cadastrar o usuário
function cadastrarUsuario() {
  const nome = document.getElementById("nome").value.trim();
  const senha = document.getElementById("senha").value;
  const email = document.getElementById("email").value.trim();

  const dto = {
    nome_completo: nome,
    senha: senha,
    email: email,
  };

  fetch("http://localhost:8080/CadastroController/cadastro", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dto)
  })
  .then(response => {
    if (!response.ok) {
      return response.text().then(texto => {
        throw new Error(texto || 'Erro desconhecido');
      });
    }
    return response.text();
  })
  .then(resultado => {
    alert('Cadastro realizado com sucesso!');
    console.log(resultado);
    document.getElementById("cadastroForm").reset();

    // Redireciona após o sucesso
    window.location.href = "C:/Users/SKA/Desktop/FrontEnd/src/pages/login/login.html"; // trocar esse caminho
  })
  .catch(error => {
    console.error("Erro ao fazer a requisição:", error);
    alert("Erro ao cadastrar: " + error.message);
  });
}

// Captura o submit do formulário para validar e enviar
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  if (validarCampos()) {
    cadastrarUsuario();
  }
});

// Função para alternar visibilidade da senha
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    const senhaField = document.getElementById(target);
    const eyeOpen = this.querySelector('.icon-eye-open');
    const eyeClosed = this.querySelector('.icon-eye-closed');

    if (senhaField.type === 'password') {
      senhaField.type = 'text';
      eyeOpen.style.display = 'none';
      eyeClosed.style.display = 'block';
    } else {
      senhaField.type = 'password';
      eyeOpen.style.display = 'block';
      eyeClosed.style.display = 'none';
    }
  });
});