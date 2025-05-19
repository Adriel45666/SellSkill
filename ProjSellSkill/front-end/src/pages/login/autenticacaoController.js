document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
 
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  
 
  //define o tipo do parametro da requisição
  const dto = {
      usuario: usuario,
      senha: senha
    };

    fetch("http://localhost:8080/autenticacaoController/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dto) //define que o parametro dto(SERVICO) seja enviado
    })
      .then(response => {
        // EXECOES OU ERROS DO SERVIDOR

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json(); 
      })
      .then(data => {        // RETORNO DO SERVIDOR              
        console.log("Resposta da API:", data );

        if(data = true){
          href = 'home'
        }


      })
      .catch(error => { // ERRO DE JS
        console.error("Erro ao fazer a requisição:", error);
      });



 
  /**
   * 
  const usuarioValido = "Adriel"; 
  const senhaValida = "123";
   * 
   * if (usuario === usuarioValido && senha === senhaValida) {
    // 
    window.location.href = "index.html";
  } else {
    
    alert("Usuário ou senha inválidos.");
  }
   */
  
});