function cadastrarUsuario() {
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  var email = document.getElementById("email").value;

  var dto = {
    nome_completo: nome,
    senha: senha,
    email: email,
  };

  fetch("http://localhost:8080/UsuarioController/cadastro", {
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
  })
  .catch(error => {
    console.error("Erro ao fazer a requisição:", error);
    alert("Erro ao cadastrar: " + error.message);
  });
}

// Aciona a função ao clicar no botão
document.getElementById("cadastroButton").addEventListener("click", cadastrarUsuario);

    