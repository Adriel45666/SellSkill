import React,{ useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import "../main.css";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Alterna o menu
  const toggleMenu = () => setMenuAberto((prev) => !prev);

  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuAberto(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="topo">
      <div className="header-conteudo">
        {/* Logo */}
        <div className="logo">
          <img src="/SellSkill.png" alt="Logo SELLSKILLS" />
        </div>

        {/* Barra de pesquisa */}
        <input
          type="text"
          placeholder="Buscar cursos..."
          className="barra-pesquisa"
        />

        {/* Botão do carrinho */}
        <div
          className="botao-carrinho-header"
          onClick={() => (window.location.href = "/carrinho")}
        >
          <FaShoppingCart size={24} />
        </div>

        {/* Menu hamburguer */}
        <div className="menu-hamburguer">
          <div className="icon-button" onClick={toggleMenu}>
            <FaBars size={24} />
          </div>

          {menuAberto && (
            <div className="menu-opcoes" ref={menuRef}>
              <a href="/carrinho">Carrinho</a>
              <a href="/perfil">Perfil</a>
              <a href="/sobre">Sobre Nós</a>
              <a href="/sair">Sair</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}