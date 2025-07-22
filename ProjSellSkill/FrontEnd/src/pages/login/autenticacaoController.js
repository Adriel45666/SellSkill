document.getElementById("loginForms").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
 
  
  
 
  
  const cursos = {
  "seguranca": {
    nome: "Segurança da Informação",
    descricao: "Fundamentos de segurança e ética hacker",
    preco: 99.90,
    imagem: "imagens/curso-programacao.jpg"
  },
  "redes": {
    nome: "Redes de Computadores",
    descricao: "Aprenda sobre TCP/IP, roteamento e segurança",
    preco: 99.90,
    imagem: "imagens/curso-programacao.jpg"
  },
  "python": {
    nome: "Python para Iniciantes",
    descricao: "Aprenda lógica e automação com Python",
    preco: 99.90,
    imagem: "imagens/curso-programacao.jpg"
  },
  "programacao": {
    nome: "Curso de Programação Completo",
    descricao: "Domine HTML, CSS, JavaScript, Python e mais. Ideal para iniciantes e avançados",
    preco: 99.90,
    imagem: "imagens/curso-programacao.jpg"
  },
  "ia": {
    nome: "Inteligência Artificial com Python",
    descricao: "Crie modelos de IA com aprendizado de máquina",
    preco: 99.90,
    imagem: "imagens/curso-programacao.jpg"
  }
};

    fetch("http://localhost:8080/servico/titulo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

                     let html = '';
                        for (let i = 0; i < resultado.length; i++) {
                          html += `
                            <div class="item">
                              <span>Label ${i + 1}:</span>
                              <input type="text" nome="input${i}" "text" descricao= descricao>
                            </div>
                          
                            `   
                          
                          
  
                        }

                        // Atribuir o conteúdo à div criada
                        container.innerHTML = html;

                        // Adicionar ao DOM
                        document.body.appendChild(container);


      })
      .catch(error => { // ERRO DE JS OU SERVIDOR
        console.error("Erro ao fazer a requisição:", error);
      });



 
 
