import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../main.css";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuAberto(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuAberto(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="home">
      {/* HEADER */}
      <header className="topo">
        <div className="header-conteudo">
          <div className="logo">
            <img src="/SellSkill.png" alt="Logo SELLSKILLS" />
          </div>

          <input
            id="pesquisa"
            type="text"
            placeholder="Buscar cursos..."
            className="barra-pesquisa"
          />

          <Link to="/carrinho" className="botao-carrinho-header">
            <i className="fas fa-shopping-cart"></i>
          </Link>

          <div className="menu-hamburguer" ref={menuRef}>
            <i className="fas fa-bars" onClick={toggleMenu}></i>
            {menuAberto && (
              <div className="menu-opcoes">
                <Link to="/carrinho">Carrinho</Link>
                <Link to="/perfil">Perfil</Link>
                <Link to="/sobre">Sobre Nós</Link>
                <Link to="/sair">Sair</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="container">
        <h1 style={{ textAlign: "center", color: "#4ec868" }}>
          Bem-vindo ao SELLSKILLS!
        </h1>
        <p style={{ textAlign: "center", color: "#e0e0e0" }}>
          Aqui você encontra os melhores cursos.
        </p>

        <div className="lista-cursos">
          {/* Aqui você pode mapear seus cursos */}
          <div className="curso-card" onClick={() => alert("Abrir curso 1")}>
            <h3>Curso Exemplo 1</h3>
            <p>Descrição do curso...</p>
          </div>
          <div className="curso-card" onClick={() => alert("Abrir curso 2")}>
            <h3>Curso Exemplo 2</h3>
            <p>Descrição do curso...</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="rodape">
        <p>&copy; 2025 SELLSKILLS - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
