document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const input = document.getElementById(targetId);
    const iconEyeOpen = button.querySelector('.icon-eye-open');
    const iconEyeClosed = button.querySelector('.icon-eye-closed');

    if (input.type === 'password') {
      input.type = 'text';
      iconEyeOpen.style.display = 'none';
      iconEyeClosed.style.display = 'block';
      button.setAttribute('aria-label', 'Ocultar senha');
    } else {
      input.type = 'password';
      iconEyeOpen.style.display = 'block';
      iconEyeClosed.style.display = 'none';
      button.setAttribute('aria-label', 'Mostrar senha');
    }
  });
});

// Lógica principal de login com validação
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  // Validação prévia
  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação de e-mail (se "usuario" for o e-mail)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  const dto = {
    email: email,
    senha: senha,
  };

  try {
    const response = await fetch('http://localhost:8080/LoginController/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    });

    if (!response.ok) {
      const erro = await response.text();
      throw new Error(erro || 'Erro desconhecido');
    }

    const resultado = await response.text(); // Aqui é texto, pois o backend devolve texto simples
    alert(resultado);
    window.location.href = "C:/Users/SKA/Desktop/FrontEnd/src/index.html";

  } catch (error) {
    console.error("Erro ao tentar logar:", error);
    alert("Erro ao logar: " + error.message);
  }

  // Resetar formulário e botão de olho
  document.getElementById('loginForm').reset();
  document.querySelectorAll('.toggle-btn').forEach(button => {
    const targetId = button.getAttribute('data-target');
    const input = document.getElementById(targetId);
    const iconEyeOpen = button.querySelector('.icon-eye-open');
    const iconEyeClosed = button.querySelector('.icon-eye-closed');

    if (input.type === 'text') {
      input.type = 'password';
      iconEyeOpen.style.display = 'block';
      iconEyeClosed.style.display = 'none';
      button.setAttribute('aria-label', 'Mostrar senha');
    }
  });
});